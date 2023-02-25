const { Router } = require('express');
const app = Router();
const redis = require('redis');
const productModel = require('./product.model');
const client = redis.createClient();
app.get('/', async (req, res) => {
  try {
    await client.connect();
    let y = await client.get('token');
    let x = await productModel.find();
    await client.disconnect();
    return res.status(200).send({ redis: y, DB: x });
  } catch (er) {
    return res.status(400).send(er.message + ' from product get router');
  }
});
module.exports = app;
