//mongoose.Schema.ObjectId
const mongoose = require('mongoose');
const file = {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'auth' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
  quantity: { type: Number },
};
const cartSchema = new mongoose.Schema(file);
const cartModel = mongoose.model('cart', cartSchema);
module.exports = cartModel;
