const { Router } = require('express');

const app = Router();
const { cartMiddleware } = require('../../Middleware/middleware');
const userModel = require('../auth/auth.model');
const productModel = require('../prodData/prod.model');
const cartModel = require('./cart.model');
app.get('/', cartMiddleware, async (req, res) => {
  try {
    console.log(req.UserId, 'from get');
    const getCart = await cartModel.find({ user: req.UserId });
    return res.status(200).send(getCart);
  } catch (er) {
    return res.status(500).send({ message: 'Something wrong happened' });
  }
});
app.post('/', async (req, res) => {
  const { userId, productId, quantity } = req.body;
  if (!userId || !productId || !quantity) {
    return res
      .status(500)
      .send({ message: 'Something wrong happened from if condtn' });
  }
  try {
    console.log('this', productId);
    await productModel.findByIdAndUpdate(
      { _id: productId },
      { $inc: { quantity: -quantity } },
      { new: true }
    );

    await cartModel.create({ user: userId, product: productId, quantity });

    return res.status(300).send({ message: 'Successfully added to cart' });
  } catch (er) {
    return res
      .status(500)
      .send({ message: 'Something wrong happened from bottom error' });
  }
});
app.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { UserId, productId, quantity } = req.body;
  try {
    const getCart = await cartModel.findByIdAndDelete({ _id: id });
    await productModel.findByIdAndUpdate(
      { _id: productId },
      { $inc: { quantity: getCart.quantity } },
      { new: true }
    );
    return res
      .status(200)
      .send({ message: 'Product deleted from cart successfully' });
  } catch (er) {
    return res.status(500).send({ message: 'Something wrong happened' });
  }
});
module.exports = app;
