"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _getCart = _interopRequireDefault(require("./getCart"));

var router = _express["default"].Router();

router.use('/getCartRoutes', _getCart["default"]);
var _default = router;
exports["default"] = _default;