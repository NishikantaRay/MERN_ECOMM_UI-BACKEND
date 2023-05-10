"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var mongoose = require('mongoose');

var roleSchema = new _mongoose.Schema({
  roleName: {
    type: String,
    unique: true
  },
  roleKey: {
    type: String
  },
  roleApi: [{
    type: Object,
    _id: false
  }]
});

var _default = (0, _mongoose.model)('Role', roleSchema);

exports["default"] = _default;