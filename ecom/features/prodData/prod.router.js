const { Router } = require('express');
const userModel = require('../auth/auth.model');
const productModel = require('./prod.model');
const app = Router();
const { middlewarePost } = require('../../Middleware/middleware');
//redis

app.get('/', async (req, res) => {
  try {
    console.log('this geall');
    let getAll = await productModel.find().sort({ price: -1 });
    return res
      .status(200)
      .send({ message: 'Succefully feteched', data: getAll });
  } catch (er) {
    return res
      .status(500)
      .send({ message: 'Something happened Wrong from product get' });
  }
});
app.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // console.log('this get genders');
    console.log(id, 'backedn');

    let getAll = await productModel.find({ category: id }).sort({ price: -1 });

    return res
      .status(200)
      .send({ message: 'Succefully feteched', data: getAll });
  } catch (er) {
    return res
      .status(500)
      .send({ message: 'Something happened Wrong from product get' });
  }
});
app.get('/single/:single', async (req, res) => {
  const { single } = req.params;
  try {
    const getSingle = await productModel.findOne({ _id: single });

    return res.status(200).send(getSingle);
  } catch (er) {
    return res.status(500).send(er.message);
  }
});
//product post by shopkeeper
app.post('/', middlewarePost, async (req, res) => {
  const { image, title, quantity, price, descriptiton } = req.body;
  if (!image || !title || !quantity || !price) {
    return res
      .status(500)
      .send({ message: 'Something happened Wrong from this' });
  }
  try {
    const postdata = await productModel.create({
      image,
      title,
      quantity,
      visited: req.body.visited ? req.body.visited : 0,
      price,
      descriptiton,
      category: req.body.category,
    });
    return res
      .status(200)
      .send({ message: 'product Added succesfully', postdata });
  } catch (er) {
    return res
      .status(500)
      .send({ message: 'Something happened Wrong from post product' });
  }
});

app.patch('/', middlewarePost, async (req, res) => {
  const { title, price, quantity, image, id } = req.body;
  if (!image || !title || !quantity || !price || !id) {
    return res.status(500).send({ message: 'Something happened Wrong' });
  }
  try {
    const UpdateProd = await productModel.findByIdAndUpdate(
      id,
      { image, title, quantity, price, category: req.body.category },
      { new: true }
    );
    return res
      .status(300)
      .send({ message: 'Product Edit Successfull', updated: UpdateProd });
  } catch (er) {
    return res.status(500).send({ message: 'Something happened Wrong' });
  }
});
app.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id, '?this backend');
  if (!id) {
    return res
      .status(500)
      .send({ message: 'Something happened Wrong with id' });
  }
  try {
    await productModel.findByIdAndDelete({ _id: id });
    return res.status(300).send({ message: 'Product Successfully deleted' });
  } catch (er) {
    return res.status(500).send({ message: 'Something happened Wrong' });
  }
});
module.exports = app;
