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
client.on('disconnect', () => {
  console.log('redis disconnected');
});
let jwt = require('jsonwebtoken');
app.get('/', async (req, res) => {
  try {
    const token = jwt.sign({ id: 'NayanKumar', roll: '1234' }, 'XYZ');
    await client.connect();
    await client.set('nayan', token);
    await client.disconnect();

    return res.send({ roll: '12345', token });
  } catch (er) {
    return res.status(402).send(er.message);
  }
});
app.get('/show', async (req, res) => {
  try {
    await client.connect();
    let x = await client.get('nayan');
    await client.disconnect();
    return res.status(200).send({ get: 'verify', x });
  } catch (er) {
    return res.status(403).send(er.message);
  }
});
app.listen(8080, () => {
  console.log('server listening on http://localhost:8080');
});
