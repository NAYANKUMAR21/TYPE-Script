const express = require('express');
const app = express();
const Redis = require('ioredis');
const redis = new Redis();
let jwt = require('jsonwebtoken');
app.get('/', (req, res) => {
  const token = jwt.sign({ id: 'NayanKumar', roll: '1234' }, 'XYZ');
  redis.set('token', token);
  return res.send({ roll: '12345' });
});
app.get('/show', async (req, res) => {
  const savedToken = await redis.get('token');
  console.log(savedToken);
  const verify = jwt.verify(savedToken, 'XYZ');
  return res.status(200).send({ savedToken, verify });
});
app.listen(8080, () => {
  console.log('http://localhost:8080');
});
