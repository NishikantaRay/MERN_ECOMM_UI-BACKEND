"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlSortner = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var axios = require("axios");

var qs = require("qs");

var urlSortner = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url) {
    var data, config, responded;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = qs.stringify({
              'secretKey': 'noMoreBitLy',
              'link': "https://portal.dev.bemc.teceads.co.in/".concat(url)
            });
            config = {
              method: 'post',
              url: 'https://t12.in/api/getShortLink',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              data: data
            };
            _context.next = 4;
            return axios(config);

          case 4:
            responded = _context.sent;
            console.log(responded.data);
            return _context.abrupt("return", responded.data.link);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function urlSortner(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.urlSortner = urlSortner;