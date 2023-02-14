//mongoose.Schema.ObjectId
const mongoose = require('mongoose');
const file = {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'auth' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
};
const wishSchema = new mongoose.Schema(file);
const wishModel = mongoose.model('wishlist', wishSchema);
module.exports = wishModel;
