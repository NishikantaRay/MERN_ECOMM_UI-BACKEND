import { Schema, model, Mongoose } from 'mongoose';
const mongoose = require('mongoose')

const productSchema = new Schema(
  {
    pid:{
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    },
    sub_category: {
        type: String
    },
    image_list: {
        type: [String]
    },
    status: {
        type: String
    },
    brand:{
        type: String
    },
    color:{
        type: String
    },
    size:{
        type: String
    },
    discount:{
        type: Number
    },
    gender:{
        type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Product', productSchema);
