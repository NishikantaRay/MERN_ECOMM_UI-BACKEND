"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user.route"));

var _role = _interopRequireDefault(require("./role"));

var router = _express["default"].Router();

/**
 * Function contains Application routes
 *
 * @returns router
 */
var routes = function routes() {
  router.use('/users', _user["default"]);
  router.use('/roles', _role["default"]);
  return router;
};

var _default = routes;
exports["default"] = _default;