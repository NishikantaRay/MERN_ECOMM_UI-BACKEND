import { Schema, model} from 'mongoose';
const mongoose = require('mongoose')

const userSchema = new Schema(
  {
    email: {
      type: String
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    password: {
      type: String
    },
    avatar: {
      type: String
    },
    role: {
      type: String
    },
    allowed_operations: [
      { type: String }
    ],
    resetPassword_token: {
      type: String
    },
    resetPassord_expire: {
      type: Date
    },
    created_by: {
      type: String
    },
    address: {
      type: String
    },
    status: {
      type: String
    },
    otp: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Otp'
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
