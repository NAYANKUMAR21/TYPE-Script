require('dotenv').config();
const mongoose = require('mongoose');
const connect = async () => {
  mongoose.set('strictQuery', false);
  return mongoose.connect(process.env.URL);
};
module.exports = connect;
