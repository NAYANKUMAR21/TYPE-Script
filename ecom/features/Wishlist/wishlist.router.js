const { Router } = require('express');
const app = Router();
const { cartMiddleware } = require('../../Middleware/middleware');
const cartModel = require('../Cart/cart.model');
const productModel = require('../prodData/prod.model');
const wishModel = require('./wishlist.model');

app.post('/', cartMiddleware, async (req, res) => {
  const { productId } = req.body;

  try {
    await wishModel.create({
      user: req.UserId,
      product: productId,
    });
    return res.status(200).send({ message: 'Product added to wishlist' });
  } catch (er) {
    return res.status(400).send({ message: 'Something went wrong' });
  }
});

app.get('/', cartMiddleware, async (req, res) => {
  try {
    const getAll = await wishModel.find();
    return res
      .status(200)
      .send({ message: 'fetched all from wishlist', data: getAll });
  } catch (er) {
    return res.status(400).send({ message: 'Something went wrong' });
  }
});

app.post('/toCart', cartMiddleware, async (req, res) => {
  const { wishId } = req.body;

  try {
    let x = await wishModel.findByIdAndDelete(productId);
    await productModel.findByIdAndUpdate(
      { _id: x.product },
      {
        $inc: { quantity: -1 },
      }
    );
    await cartModel.create({
      user: req.UserId,
      product: productId,
      quantity: 1,
    });
    return res.status(200).send({ message: 'Product moved to cart ' });
  } catch (er) {
    return res.status(400).send({ message: 'Something went wrong' });
  }
});

app.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await wishModel.findByIdAndDelete({ _id: id });
    return res.status(200).send({ message: 'Product deleted successfully' });
  } catch (er) {
    return res.status(400).send({ message: 'Something went wrong' });
  }
});
module.exports = app;
