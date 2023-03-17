const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.send({ roll: '12345' });
});

app.listen(8080, () => {
  console.log('http://localhost:8080');
});
