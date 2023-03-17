const express = require('express');
const app = express();
const Redis = require('ioredis');
const redis = new Redis(6380, '127.0.0.1');
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
  console.log('server listening on http://localhost:8080');
});
