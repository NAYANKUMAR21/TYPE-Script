const { Router } = require('express');
const app = Router();

const productModel = require('./product.model');

app.get('/', async (req, res) => {
  try {
    let x = await productModel.find();

    return res.status(200).send({ DB: x });
  } catch (er) {
    return res.status(400).send(er.message + ' from product get router');
  }
});
module.exports = app;
