"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegister = exports.userLogin = exports.updateUser = exports.getUser = exports.getAllUsers = exports.deleteUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

//create new user for tshirt store
var userRegister = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var userDataEmail, passwordHash, newUser, userDetails;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(req.validatedBody.api_key === process.env.API_SECRET_KEY)) {
              _context.next = 20;
              break;
            }

            _context.next = 4;
            return _user["default"].find({
              email: req.validatedBody.email
            });

          case 4:
            userDataEmail = _context.sent;

            if (userDataEmail.length) {
              _context.next = 17;
              break;
            }

            _context.next = 8;
            return _bcrypt["default"].hash(req.validatedBody.password, 10);

          case 8:
            passwordHash = _context.sent;
            req.validatedBody.password = passwordHash;
            newUser = new _user["default"](_objectSpread({}, req.validatedBody));
            _context.next = 13;
            return newUser.save();

          case 13:
            userDetails = _context.sent;
            return _context.abrupt("return", {
              message: "added successfully",
              code: 201,
              data: userDetails
            });

          case 17:
            return _context.abrupt("return", {
              message: "user already registered",
              code: 400,
              data: {}
            });

          case 18:
            _context.next = 21;
            break;

          case 20:
            return _context.abrupt("return", {
              message: "unauthorised",
              code: 400,
              data: {}
            });

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              status: "failed",
              code: 401,
              error: _context.t0
            });

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 23]]);
  }));

  return function userRegister(_x) {
    return _ref.apply(this, arguments);
  };
}(); //login user for tshirt store


exports.userRegister = userRegister;

var userLogin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var userData, passwordVerify, payload, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _user["default"].findOne({
              email: req.validatedBody.email
            });

          case 2:
            userData = _context2.sent;

            if (!userData) {
              _context2.next = 16;
              break;
            }

            _context2.next = 6;
            return _bcrypt["default"].compare(req.body.password, userData.password);

          case 6:
            passwordVerify = _context2.sent;

            if (!passwordVerify) {
              _context2.next = 13;
              break;
            }

            payload = {
              userData: userData
            };
            token = jwt.sign(payload, process.env.TOKEN_SECRET, {
              expiresIn: "2d"
            });
            return _context2.abrupt("return", {
              token: token,
              userId: userData._id,
              message: "Login sucess",
              code: 200
            });

          case 13:
            return _context2.abrupt("return", {
              data: {},
              message: "Wrong Password",
              code: 403
            });

          case 14:
            _context2.next = 17;
            break;

          case 16:
            return _context2.abrupt("return", {
              data: {},
              message: "No such user found",
              code: 403
            });

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function userLogin(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); //get all users


exports.userLogin = userLogin;

var getAllUsers = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _user["default"].find();

          case 2:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getAllUsers() {
    return _ref3.apply(this, arguments);
  };
}(); //update single user


exports.getAllUsers = getAllUsers;

var updateUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _user["default"].findByIdAndUpdate({
              _id: _id
            }, body, {
              "new": true
            });

          case 2:
            data = _context4.sent;
            return _context4.abrupt("return", data);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateUser(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}(); //delete single user


exports.updateUser = updateUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _user["default"].findByIdAndDelete(id);

          case 2:
            return _context5.abrupt("return", '');

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteUser(_x5) {
    return _ref5.apply(this, arguments);
  };
}(); //get single user


exports.deleteUser = deleteUser;

var getUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
    var data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _user["default"].findById(id);

          case 2:
            data = _context6.sent;
            return _context6.abrupt("return", data);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getUser(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getUser = getUser;