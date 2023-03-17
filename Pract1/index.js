const express = require('express');
const app = express();
const redis = require('redis');
const client = redis.createClient({
  host: '127.0.0.1',
  port: '6379',
  enable_offline_queue: false,
});
client.on('connect', () => {
  console.log('redis connected');
});
client.on('error', (er) => {
  console.log(er.message);
});

let jwt = require('jsonwebtoken');
app.get('/', async (req, res) => {
  const token = jwt.sign({ id: 'NayanKumar', roll: '1234' }, 'XYZ');
  await client.connect();
  await client.set('nayan', token);
  await client.disconnect();

  return res.send({ roll: '12345', token });
});
app.get('/show', async (req, res) => {
  await client.connect();
  let x = await client.get('nayan');
  await client.disconnect();
  return res.status(200).send({ get: 'verify', x });
});
app.listen(8080, () => {
  console.log('server listening on http://localhost:8080');
});
