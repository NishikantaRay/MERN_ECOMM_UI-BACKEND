"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCounter = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _counter = _interopRequireDefault(require("../models/counter.model"));

var prifixs = {
  bankTransactionId: "BNT",
  accountId: "BT",
  ramalingamBookingId: "RP",
  ramalingamBookingRequestId: "RPR",
  ramalingamEventId: "RP"
};

var handleCounter = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(counterFor) {
    var counter, newCounter;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!prifixs[counterFor]) {
              _context.next = 14;
              break;
            }

            _context.next = 3;
            return _counter["default"].findOneAndUpdate({
              counterFor: counterFor
            }, {
              $inc: {
                count: 1
              }
            }, {
              returnDocument: "after"
            });

          case 3:
            counter = _context.sent;

            if (!(counter != null && counter.count > 99)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", "".concat(counter.prefix).concat(counter.count));

          case 8:
            newCounter = new _counter["default"]({
              prefix: prifixs[counterFor],
              counterFor: counterFor
            });
            _context.next = 11;
            return newCounter.save();

          case 11:
            return _context.abrupt("return", "".concat(newCounter.prefix).concat(newCounter.count));

          case 12:
            _context.next = 15;
            break;

          case 14:
            return _context.abrupt("return", false);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleCounter(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.handleCounter = handleCounter;

var samp = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var counter;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return handleCounter("ramalingamBookingRequestId");

          case 2:
            counter = _context2.sent;
            console.log(counter);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function samp() {
    return _ref2.apply(this, arguments);
  };
}(); // samp()