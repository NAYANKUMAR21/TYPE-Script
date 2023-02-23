const userModel = require('../features/auth/auth.model');
const jwt = require('jsonwebtoken');
const { createClient } = require('redis');
const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));

const middlewarePost = async (req, res, next) => {
  try {
    console.log(1, 'cl');
    await client.connect();
    console.log(2, 'cl');
    let token = await client.get('token');
    await client.disconnect();
    console.log(3, 'cl');
    if (!token) {
      return res
        .status(500)
        .send({ message: 'Something happened Wrong from here' });
    }
    const verify = jwt.verify(token, 'ECOM');
    if (verify) {
      console.log(verify, 'v');
      const check = await userModel.findOne({ _id: verify.id });
      console.log(check, 'c');
      if (check.role === 'Admin') {
        console.log(token, 'this from middleware');
        return next();
      }
      return res.status(403).send({ message: 'Un-Authorized' });
    }
    return res.status(400).send({ message: 'token Expired' });
  } catch (er) {
    return res
      .status(500)
      .send({ message: 'Something happened Wrong from here' });
  }
};
const cartMiddleware = async (req, res, next) => {
  console.log(req.body, 'this');
  console.log(1, 'cl');
  await client.connect();
  console.log(2, 'cl');
  let token = await client.get('token');
  console.log(3, 'cl');
  await client.disconnect();
  console.log(4, 'cl');
  console.log(token, 'back fron above');
  if (!token) {
    return res
      .status(500)
      .send({ message: 'Something happened Wrong from middleware cart token' });
  }

  try {
    const verify = jwt.verify(token, 'ECOM');
    console.log(verify, 'verify jwt');
    if (verify) {
      const check = await userModel.findOne({ _id: verify.id });
      if (check) {
        req.UserId = verify.id;
        console.log(token, 'this back');
        return next();
      }
    }
    return res.status(400).send({ message: 'token Expired' });
  } catch (er) {
    return res.status(500).send({ message: 'Something happened Wrong' });
  }
};

module.exports = { middlewarePost, cartMiddleware };
