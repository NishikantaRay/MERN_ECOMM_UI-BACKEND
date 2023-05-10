"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var mongoose = require('mongoose');

var endpointsSchema = new _mongoose.Schema({
  endpoints: [{
    type: Object
  }]
});

var _default = (0, _mongoose.model)('Endpoints', endpointsSchema);

exports["default"] = _default;