const mongoose = require('mongoose');
const file = {
  orders: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'auth' },
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
      quantity: Number,
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'auth' },
  isPaid: Boolean,
  amount: Number,
  razorpay: {
    orderId: String,
    paymentId: String,
    signature: String,
  },
};
const paymentSchema = new mongoose.Schema(file);
const paymentModel = mongoose.model('Payment', paymentSchema);
module.exports = paymentModel;
