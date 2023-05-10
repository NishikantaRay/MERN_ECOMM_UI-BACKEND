"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var mongoose = require('mongoose');

var cartSchema = new _mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  product_list: {
    type: [Object]
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Cart', cartSchema);

exports["default"] = _default;