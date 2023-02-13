const mongoose = require('mongoose');
const file = {
  name: String,
  age: Number,
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
};
const userSchema = new mongoose.Schema(file);
const userModel = mongoose.model('auth', userSchema);
module.exports = userModel;
