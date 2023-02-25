require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connect = require('./config/db');
const authRouter = require('./features/auth/auth.router');
const productRouter = require('./features/product/product.router');
//middlesware
app.use(express.json());
app.use(cors());
//routes
app.use('/auth', authRouter);
app.use('/product', productRouter);
//home page basic get Route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to backend focused on redis ');
});
//start server
app.listen(8080, async () => {
  try {
    await connect();
    console.log(`listening http://localhost:${process.env.PORT || 4000}`);
  } catch (er) {
    console.log(er.message);
  }
});
