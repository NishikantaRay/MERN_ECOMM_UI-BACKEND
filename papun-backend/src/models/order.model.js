import { Schema, model, Mongoose } from 'mongoose';
const mongoose = require('mongoose')

const orderSchema = new Schema(
  {
    order_id: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cart_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    },
    price: {
        type: Number
    },
    payment_method:{
        type: String
    },
    payment_id:{
        type: String
    },
    payment_status:{
        type: String
    },
    status:{
        type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Order', orderSchema);
