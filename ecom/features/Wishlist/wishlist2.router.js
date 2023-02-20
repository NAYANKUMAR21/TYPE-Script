const express = require('express');
const app = express.Router();

const cartModel = require('../Cart/cart.model');
const productModel = require('../prodData/prod.model');
const wishModel = require('./wishlist.model');
const userModel = require('../auth/auth.model');
const jwt = require('jsonwebtoken');

const cartMiddlewareNew = async (req, res, next) => {
  const { token } = req.body;
  console.log(token, 'back fron above');
  if (!token) {
    return res
      .status(401)
      .send({ message: 'Something happened Wrong from middleware cart token' });
  }

  try {
    console.log('1');
    const verify = jwt.verify(token, 'ECOM');
    console.log('2');
    console.log(verify, 'verify jwt');
    if (verify) {
      console.log('3');
      const check = await userModel.findOne({ _id: verify.id });
      console.log('4');
      if (check) {
        console.log('5');
        req.UserId = check._id;
        console.log('6');
        console.log(token, 'this back');
        console.log('7');
        return next();
      }
    }
    return res.status(402).send({ message: 'token Expired' });
  } catch (er) {
    return res.status(403).send({
      message: 'Something happened Wrong from here',
      error: er.message,
    });
  }
};
app.post('/:id', cartMiddlewareNew, async (req, res) => {
  const { id } = req.params;
  const { token } = req.body;
  if (!id || !token) {
    return res.status(403).send({ message: 'Un-Authorized' });
  }
  try {
    console.log(req.UserId, 'herer');
    const dataWishDelete = await wishModel.findByIdAndDelete({ _id: id });
    console.log(dataWishDelete, 'this is that product');
    console.log(1);
    await cartModel.create({
      user: req.UserId,
      product: dataWishDelete.product,
      quantity: 1,
    });
    console.log(2);
    await productModel.findByIdAndUpdate(
      { _id: dataWishDelete.product },
      { $inc: { quantity: -1 } },
      { new: true }
    );
    console.log(3);
    return res.status(200).send({ message: 'Moved to cart successfully' });
  } catch (er) {
    console.log(4);
    return res.status(403).send({ message: 'xyz SOMETHING WRONG HAPPEND' });
  }
});
module.exports = app;
