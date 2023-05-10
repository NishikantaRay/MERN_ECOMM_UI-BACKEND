"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _role = _interopRequireDefault(require("../../models/role.model"));

var _endpoints = _interopRequireDefault(require("../../models/endpoints.model"));

var _role2 = require("../../middlewares/role.middleware");

var router = _express["default"].Router();

var Mongoose = require('mongoose');

router.post('/test', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              data = {
                a: "12",
                b: "13"
              };
              res.json({
                status: "success",
                code: 200,
                data: data
              });
            } catch (error) {
              res.json({
                status: "failed",
                code: 401,
                data: {}
              });
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;