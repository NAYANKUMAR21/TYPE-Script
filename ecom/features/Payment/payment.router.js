require('dotenv').config();
const express = require('express');
const orderModel = require('./payment.model');
const app = express.Router();

const Razorpay = require('razorpay');
const cartModel = require('../Cart/cart.model');
const { cartMiddleware } = require('../../Middleware/middleware');

//return res.redirect(301, "https://www.google.co.in/").send();

app.get('/get-razorpay-key', async (req, res) => {
  try {
    return res.send({ key: process.env.RAZORPAY_KEY_ID });
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.post('/create-order', async (req, res) => {
  try {
    console.log('ceate-orders');
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const options = {
      amount: req.body.amount,
      currency: 'INR',
    };
    const order = await instance.orders.create(options);
    if (!order) {
      return res.status(500).send('some error occured');
    }
    console.log(order, 'backend amount passage');
    return res.status(200).send({ message: 'reached orders', order });
  } catch (er) {
    return res.status(404).send('query Not found');
  }
});

app.post('/pay-order', cartMiddleware, async (req, res) => {
  try {
    const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
      req.body;
    console.log(1, 'payorder ');
    const cartOrders = await cartModel.find({ user: req.UserId });
    console.log(2, 'payorder ');
    const newPayment = orderModel({
      orders: [...cartOrders],
      user: req.UserId,
      isPaid: true,
      amount: amount,
      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
    });
    await newPayment.save();
    console.log(3, 'payorder ');
    await cartModel.deleteMany({ user: req.UserId });
    console.log(4, 'payorder ');
    return res.status(200).send({ message: 'new payment Successfull' });
  } catch (er) {
    console.log(er.message);
    return res.status(500).send(er.message);
  }
});

app.post('/pay-order/single', cartMiddleware, async (req, res) => {
  try {
    const {
      amount,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      single,
    } = req.body;
    console.log(1, 'payorder ');
    let dataOrderd = [
      {
        user: req.UserId,
        product: single[0]._id,
        quantity: 1,
      },
    ];
    console.log(2, 'payorder ');
    const newPayment = orderModel({
      orders: dataOrderd,
      user: req.UserId,
      isPaid: true,
      amount: amount,
      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
    });
    await newPayment.save();
    console.log(3, 'payorder ');
    console.log(4, 'payorder ');
    return res.status(200).send({ message: 'new payment Successfull' });
  } catch (er) {
    console.log(er.message);
    return res.status(500).send(er.message);
  }
});

app.get('/list-order', async (req, res) => {
  console.log(req);
  try {
    const list = await orderModel
      .find()
      .populate(['orders.product', 'orders.user']);
    /* {}.aggregate([
      { $project: { orders: 1, user: 1 } },
      {
        $group: {
          _id: '$user',
          orders: { $push: '$orders' },
        },
      },
    ]); */
    console.log(list, 'backend get orders');
    return res.status(200).send(list);
  } catch (er) {
    return res.status(500).send(er.message);
  }
});
app.post('/get-orders', cartMiddleware, async (req, res) => {
  try {
    const list = await orderModel
      .find({ user: req.UserId })
      .populate('orders.product');
    console.log('backend get orders');
    return res.status(200).send(list);
  } catch (er) {
    return res.status(500).send(er.message);
  }
});

module.exports = app;
/* 
 orders: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'auth' },
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    },
  ], 
  user: String,
  isPaid: Boolean,
  amount: Number,
  razorpay: {
    orderId: String,
    paymentId: String,
    signature: String,
  },
*/
