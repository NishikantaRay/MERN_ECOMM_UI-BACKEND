"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var mongoose = require('mongoose');

var productSchema = new _mongoose.Schema({
  pid: {
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
  brand: {
    type: String
  },
  color: {
    type: String
  },
  size: {
    type: String
  },
  discount: {
    type: Number
  },
  gender: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Product', productSchema);

exports["default"] = _default;