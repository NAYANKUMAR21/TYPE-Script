const mongoose = require('mongoose');
const file = {
  fname: String,
  lname: String,
  age: Number,
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  role: { type: String, enum: ['User', 'Admin'] },
};
const userSchema = new mongoose.Schema(file);
const userModel = mongoose.model('auth', userSchema);
module.exports = userModel;
