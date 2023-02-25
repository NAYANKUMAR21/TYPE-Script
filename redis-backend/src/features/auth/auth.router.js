require('dotenv').config();
const { Router } = require('express');
const authModel = require('./auth.model');
const app = Router();
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
const client = require('../../Redis/redisConfig');
const privateKey = process.env.KEY || 'REDIS';

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await authModel.findOne({ email: email });
    if (check && (await argon2.verify(check.password, password))) {
      const token = jwt.sign(
        { id: check._id, email: check.email },
        privateKey,
        {
          expiresIn: '1 day',
        }
      );

      const refreshToken = jwt.sign(
        { id: check._id, email: check.email },
        privateKey,
        {
          expiresIn: '7 day',
        }
      );
      await client.connect();
      await client.set('token', token);
      let x = await client.get('token');
      await client.quit();
      return res.status(200).send({ token, refreshToken, redis: x });
    }
    return res.status(403).send('User not registered');
  } catch (er) {
    console.log();
    return res.status(500).send(er.message + '  from  Login');
  }
});
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const check = await authModel.findOne({ email: email });
    if (check) {
      return res.status(403).send('Account Already Existed');
    }
    const hash = await argon2.hash(password);
    await authModel.create({
      name: name,
      email: email,
      password: hash,
    });
    return res.status(200).send({ message: 'Account Successfully created' });
  } catch (er) {
    return res.status(500).send(er.message + '  from  Signup ROute');
  }
});
module.exports = app;
