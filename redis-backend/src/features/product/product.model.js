const mongoose = require('mongoose');
const file = {
  title: { type: String, require: true },
  image: { type: String, require: true },
  quantity: { type: Number },
};
const productSchema = new mongoose.Schema(file);
const productModel = mongoose.model('product', productSchema);
module.exports = productModel;
