"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.qrHashFunction = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var crypto = require("crypto");

var QRCode = require("qrcode");

var qrKey = 'oeqfe';
var qrSalt = 'salt';

var qrHashFunction = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ticketData) {
    var cryp, text, hash, QRCode, url;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cryp = crypto.createHash("sha512");
            text = qrKey + "|" + JSON.stringify(ticketData);
            "|" + qrSalt;
            console.log(text);
            cryp.update(text);
            hash = cryp.digest("hex");
            QRCode = require('qrcode');
            _context.next = 9;
            return QRCode.toDataURL(hash);

          case 9:
            url = _context.sent;
            return _context.abrupt("return", {
              url: url,
              hash: hash
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function qrHashFunction(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.qrHashFunction = qrHashFunction;