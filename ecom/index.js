const express = require('express');
const app = express();
const cors = require('cors');
const connect = require('./config/db');
const userRouter = require('./features/auth/auth.router');
app.use(express.json());
app.use(cors());
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('WELCOME TO HOME PAGE OF WEBSITE');
});

app.listen(8080, async () => {
  try {
    await connect();
    console.log('listening on http://localhost:8080');
  } catch (er) {
    throw er;
  }
});
