"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _testRoutes = _interopRequireDefault(require("./testRoutes"));

var router = _express["default"].Router();

router.use('/getRoleRoutes', _testRoutes["default"]);
var _default = router;
exports["default"] = _default;