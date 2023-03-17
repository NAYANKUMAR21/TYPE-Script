import mongoose from 'mongoose';
require('dotenv').config();
export const connect = async () => {
  mongoose.set('strictQuery', false);
  return mongoose.connect(process.env.DB_URL);
};
