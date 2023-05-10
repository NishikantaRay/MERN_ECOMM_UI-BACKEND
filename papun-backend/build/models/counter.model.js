"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var mongoose = require('mongoose');

var counterSchema = new _mongoose.Schema({
  count: {
    type: Number,
    "default": 1000
  },
  prefix: {
    type: String,
    require: true,
    unique: true
  },
  counterFor: {
    type: String,
    require: true,
    unique: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
});

var _default = (0, _mongoose.model)('Counter', counterSchema);

exports["default"] = _default;