import { Schema, model, Mongoose } from 'mongoose';
const mongoose = require('mongoose')

const cartSchema = new Schema(
  {
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product_list: {
        type: [Object]
    },
  },
  {
    timestamps: true
  }
);

export default model('Cart', cartSchema);