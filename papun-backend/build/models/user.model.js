"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var mongoose = require('mongoose');

var userSchema = new _mongoose.Schema({
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
  allowed_operations: [{
    type: String
  }],
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
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('User', userSchema);

exports["default"] = _default;