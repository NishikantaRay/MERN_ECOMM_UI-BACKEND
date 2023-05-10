"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _routes = _interopRequireDefault(require("./routes"));

var _database = _interopRequireDefault(require("./config/database"));

var _error = require("./middlewares/error.middleware");

var _logger = _interopRequireWildcard(require("./config/logger"));

var _morgan = _interopRequireDefault(require("morgan"));

var _endpoints = _interopRequireDefault(require("./models/endpoints.model"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_dotenv["default"].config();

var listEndpoints = require('express-list-endpoints');

var app = (0, _express["default"])();
var host = process.env.APP_HOST;
var port = process.env.APP_PORT;
var api_version = process.env.API_VERSION;
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _morgan["default"])('combined', {
  stream: _logger.logStream
}));
(0, _database["default"])();
app.use("/api/".concat(api_version), (0, _routes["default"])());
app.use(_error.appErrorHandler);
app.use(_error.genericErrorHandler);
app.use(_error.notFound);

var endPoint = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var a, newEndpoint, eventDetails;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _endpoints["default"].remove({});

          case 2:
            a = listEndpoints(app); // console.log(a,"<<<<<<<<<")

            newEndpoint = new _endpoints["default"]({
              endpoints: a
            });
            _context.next = 6;
            return newEndpoint.save();

          case 6:
            eventDetails = _context.sent;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function endPoint() {
    return _ref.apply(this, arguments);
  };
}();

endPoint();
app.listen(port, function () {
  _logger["default"].info("Server started at ".concat(host, ":").concat(port, "/api/").concat(api_version, "/"));
});
var _default = app;
exports["default"] = _default;