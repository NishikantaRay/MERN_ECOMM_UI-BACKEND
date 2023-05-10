"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _cart2 = _interopRequireDefault(require("../../models/cart.model"));

var _endpoints = _interopRequireDefault(require("../../models/endpoints.model"));

var _joi = require("../validators/joi.validator");

var router = _express["default"].Router();

var Mongoose = require('mongoose');

router.post('/cart', _joi.newCartValidator, /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var userId, cart, _cart, cartDetails, _userId;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(req.validatedBody.action == "add")) {
              _context.next = 19;
              break;
            }

            _context.next = 4;
            return _cart2["default"].find({
              user_id: req.validatedBody.user_id
            });

          case 4:
            userId = _context.sent;

            if (!userId) {
              _context.next = 12;
              break;
            }

            _context.next = 8;
            return _cart2["default"].findOneAndUpdate({
              user_id: req.validatedBody.user_id
            }, {
              $push: {
                product_list: req.validatedBody.product_list
              }
            });

          case 8:
            cart = _context.sent;
            res.json({
              status: "success",
              code: 200,
              data: cart
            });
            _context.next = 17;
            break;

          case 12:
            // create a new cart
            _cart = new _cart2["default"]({
              user_id: req.validatedBody.user_id,
              product_list: req.validatedBody.product_list
            });
            _context.next = 15;
            return _cart.save();

          case 15:
            cartDetails = _context.sent;
            res.json({
              status: "success",
              code: 200,
              data: cartDetails
            });

          case 17:
            _context.next = 27;
            break;

          case 19:
            if (!(req.validatedBody.action == "remove")) {
              _context.next = 26;
              break;
            }

            _context.next = 22;
            return _cart2["default"].find({
              user_id: req.validatedBody.user_id
            });

          case 22:
            _userId = _context.sent;

            if (_userId) {// remove the product from product list
            }

            _context.next = 27;
            break;

          case 26:
            if (req.validatedBody.action == "update") {} else {// list all the products in the cart according to user_id
            }

          case 27:
            _context.next = 33;
            break;

          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              status: "failed",
              code: 401,
              error: _context.t0
            });

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 29]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;