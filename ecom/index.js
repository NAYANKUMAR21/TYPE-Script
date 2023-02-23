const express = require('express');
const app = express();
const Razorpay = require('razorpay');
const cors = require('cors');
const connect = require('./config/db');
const userRouter = require('./features/auth/auth.router');
const ProdRouter = require('./features/prodData/prod.router');
const cartRouter = require('./features/Cart/cart.router');
const wishRouter = require('./features/Wishlist/wishlist.router');
const paymentRouter = require('./features/Payment/payment.router');


app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/product', ProdRouter);
app.use('/cart', cartRouter);
app.use('/wishlist', wishRouter);
app.use('/payment', paymentRouter);
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
