const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const client = require('./redis');
app.get('/', async (req, res) => {
  const token = jwt.sign({ _id: 'NayanKumar1', roll: '4558' }, 'NAYAN');
  await client.connect();
  await client.set('token', token);
  await client.disconnect();
  return res.status(200).send({ token });
});

app.get('/show', async (req, res) => {
  await client.connect();
  let savedtoken = await client.get('token');
  let x = jwt.verify(savedtoken, 'NAYAN');
  await client.disconnect();
  return res.status(200).send({ savedtoken, x });
});
app.listen(8080, () => {
  console.log('http://localhost:8080');
});
