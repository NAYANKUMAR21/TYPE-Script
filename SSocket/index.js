const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app); //send express server to http
const { Server } = require('socket.io');
const io = new Server(server); //send http server to socket.io Server
app.get('/', (req, res) => {
  return res.status(200).sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.broadcast.emit('hi');
  socket.on('message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
server.listen(8080, () => {
  //listen from that http server
  console.log(`Server started on http://localhost:8080`);
});
