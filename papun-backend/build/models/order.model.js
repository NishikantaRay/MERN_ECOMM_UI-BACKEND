"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var mongoose = require('mongoose');

var orderSchema = new _mongoose.Schema({
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
  payment_method: {
    type: String
  },
  payment_id: {
    type: String
  },
  status: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Order', orderSchema);

exports["default"] = _default;