const mongoose = require('mongoose');
const file = {
  name: String,
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
};
const authSchema = new mongoose.Schema(file);
const authModel = mongoose.model('user', authSchema);
module.exports = authModel;
