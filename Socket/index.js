const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/index.html');
});
server.listen(8000, () => {
  console.log('server started on http://localhost:8000 ', 8000);
});
