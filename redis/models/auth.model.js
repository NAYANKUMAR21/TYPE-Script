import mongoose from 'mongoose';
const file = {
  name: { type: String },
  email: { type: String },
  password: { type: String },
};
const authSchema = new mongoose.Schema(file);
export const authModel =
  mongoose.models.auth || mongoose.model('auth', authSchema);
