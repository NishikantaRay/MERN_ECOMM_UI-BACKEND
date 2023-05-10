"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAuth = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
var userAuth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var bearerToken, _yield$jwt$verify, userData;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(req.method);
            bearerToken = req.header('Authorization');

            if (req.method === "GET") {
              req.body.api_key = process.env.API_SECRET_KEY;
            }

            if (!(!bearerToken || !req.body.api_key || req.body.api_key !== process.env.API_SECRET_KEY)) {
              _context.next = 8;
              break;
            }

            throw {
              code: _httpStatusCodes["default"].BAD_REQUEST,
              message: 'Authorization token or api key is required/invalid'
            };

          case 8:
            bearerToken = bearerToken.split(' ')[1];
            _context.next = 11;
            return _jsonwebtoken["default"].verify(bearerToken, process.env.TOKEN_SECRET);

          case 11:
            _yield$jwt$verify = _context.sent;
            userData = _yield$jwt$verify.userData;
            res.locals.user = userData;
            req.user = userData; // console.log(userData,"from auth")

            res.locals.token = bearerToken;
            next();

          case 17:
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19]]);
  }));

  return function userAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.userAuth = userAuth;