"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPgPayment = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var checkPgPayment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(data.paymentStatus === "SUCCESS")) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {
              status: "SUCCESS",
              settlementStatus: "pending",
              amount: data.bankTransaction.amount,
              netAmount: data.bankTransaction.amount * (1 - 0.2),
              bankTransactionId: data.bankTransactionId,
              bankTransaction: data.bankTransaction,
              transactionType: "CREDIT",
              paymentGateway: "HDFC",
              paymentMode: "ONLINE",
              pgCharges: 2
            });

          case 4:
            return _context.abrupt("return", {
              status: "FAILED",
              settlementStatus: "pending",
              amount: 0,
              netAmount: 0,
              bankTransactionId: data.bankTransactionId,
              bankTransaction: data.bankTransaction,
              transactionType: "CREDIT",
              paymentGateway: "HDFC",
              paymentMode: "ONLINE",
              pgCharges: 2
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkPgPayment(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkPgPayment = checkPgPayment;