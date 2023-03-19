const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const Chatio = new Server(server);
console.log(1);
Chatio.on('connection', (socket) => {
  console.log(2);
  console.log('A User Conncted');
  socket.on('chat', (msg) => {
    console.log('message received', msg);
    socket.emit('update', msg);
  });
  Chatio.on('disconnect', (x) => {
    console.log(5);
    console.log(x, 'user disconnected');
  });
});

app.get('/', (req, res) => {
  console.log(3);
  res.status(200).sendFile(__dirname + '/index.html');
});

server.listen(8000, () => {
  console.log('server started on http://localhost:8000 ', 8000);
});
