"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var userController = _interopRequireWildcard(require("../controllers/user.controller"));

var _joi = require("../validators/joi.validator");

var _auth = require("../middlewares/auth.middleware");

var _otpGenerator = _interopRequireDefault(require("otp-generator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _otp = _interopRequireDefault(require("../models/otp.model"));

var _user2 = _interopRequireDefault(require("../models/user.model"));

var _axios = _interopRequireDefault(require("axios"));

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = _express["default"].Router(); //route to get all users


router.get('', userController.getAllUsers); //route to create a new user
// router.post('/userRegister', newUserValidator, userController.newUser);

router.post('/userRegister', _joi.newUserValidator, userController.userRegister);
router.post('/userLogin', _joi.loginValidator, userController.userLogin);
router.post('/generateOtp', _joi.otpGenerateValidator, /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var userData, userDetail, r, passwordHash, name, nameArray, OTP, hashOtp, otp, otpDetails, textLocalClient, params, textLocalResponse;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user2["default"].findOne({
              phoneNumber: req.validatedBody.phoneNumber
            }).lean();

          case 3:
            userData = _context.sent;
            userDetail = {};

            if (!(userData != null && userData.phoneNumber == req.validatedBody.phoneNumber)) {
              _context.next = 9;
              break;
            }

            userDetail = userData;
            _context.next = 16;
            break;

          case 9:
            r = (Math.random() + 1).toString(36).substring(7);
            _context.next = 12;
            return _bcrypt["default"].hash(r, 10);

          case 12:
            passwordHash = _context.sent;
            name = req.validatedBody.userName;
            nameArray = name.split(" "); // req.body.password = passwordHash

            userDetail = new _user2["default"]({
              "email": req.validatedBody.email,
              "firstName": nameArray[0],
              "lastName": nameArray[nameArray.length - 1],
              "phoneNumber": req.validatedBody.phoneNumber,
              "password": passwordHash,
              "avatar": "https://www.w3schools.com/howto/img_avatar2.png",
              "role": "generalUser",
              "allowed_operations": ["personal"],
              "created_by": "bookingRequestsRamlingam",
              "status": "active"
            }); // userDetail = await newUser.save()

          case 16:
            OTP = _otpGenerator["default"].generate(6, {
              digits: true,
              lowerCaseAlphabets: false,
              upperCaseAlphabets: false,
              specialChars: false
            });
            console.log(OTP, "<<<<<<<<<<");
            _context.next = 20;
            return _bcrypt["default"].hash(OTP, 10);

          case 20:
            hashOtp = _context.sent;
            otp = new _otp["default"]({
              phoneNumber: req.validatedBody.phoneNumber,
              otp: hashOtp
            });
            _context.next = 24;
            return otp.save();

          case 24:
            otpDetails = _context.sent;
            userDetail.otp = otpDetails._id;

            if (!(userData == null)) {
              _context.next = 29;
              break;
            }

            _context.next = 29;
            return userDetail.save();

          case 29:
            textLocalClient = _axios["default"].create({
              baseURL: "https://api.textlocal.in/",
              params: {
                apiKey: "NGI1Mjc1NGM2ZDczNmI1NjMxNjE3NzZmNjU3OTY0NDI=",
                //Text local api key
                sender: "berham"
              }
            });
            params = new URLSearchParams();
            params.append("numbers", [parseInt("91" + req.body.phoneNumber)]); // params.append(
            //     "message",
            //     `Dear User,\n\nUse the OTP ${OTP} login or reset password to your ii universe account. OTP is valid for 180 seconds. Kindly do not share this OTP.`
            // );

            params.append("message", "".concat(OTP, " is your OTP to proceed with the Berhampur booking portal. Do not share OTP with anyone."));
            _context.next = 35;
            return textLocalClient.post("/send", params);

          case 35:
            textLocalResponse = _context.sent;
            console.log(textLocalResponse.data);
            res.json({
              status: "SUCCESS",
              code: 200,
              data: otpDetails,
              message: "Otp generated successfully"
            });
            _context.next = 44;
            break;

          case 40:
            _context.prev = 40;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              status: "failed",
              code: 401,
              error: _context.t0
            });

          case 44:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 40]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/validateOtp', _joi.otpValidateValidator, /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var otpData, userData, rightOtpFind, validUser, payload, token, otpVerification;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _otp["default"].find({
              phoneNumber: req.validatedBody.phoneNumber
            });

          case 3:
            otpData = _context2.sent;
            _context2.next = 6;
            return _user2["default"].findOne({
              phoneNumber: req.validatedBody.phoneNumber
            });

          case 6:
            userData = _context2.sent;

            if (!(otpData.length > 0 && userData)) {
              _context2.next = 15;
              break;
            }

            rightOtpFind = otpData[otpData.length - 1];
            _context2.next = 11;
            return _bcrypt["default"].compare(req.validatedBody.otp, rightOtpFind.otp);

          case 11:
            validUser = _context2.sent;

            if (rightOtpFind.phoneNumber == req.validatedBody.phoneNumber && validUser) {
              payload = {
                userData: userData
              };
              token = jwt.sign(payload, process.env.TOKEN_SECRET, {
                expiresIn: "2d"
              });
              otpVerification = {
                token: token,
                userData: userData
              };
              res.json({
                status: "SUCCESS",
                data: otpVerification,
                message: "Login sucess",
                code: 200
              });
            } else res.json({
              data: {},
              message: "Wrong Otp",
              code: 403
            }); // res.json({
            //     status: "user found ",
            //     code: 200,
            //     data: validUser
            // })


            _context2.next = 16;
            break;

          case 15:
            res.json({
              status: "failed",
              message: "no such user found or no such otp against this phoneNumber",
              code: 400,
              data: {}
            });

          case 16:
            _context2.next = 21;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);
            res.json({
              status: "failed",
              code: 401,
              error: _context2.t0
            });

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 18]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); //route to get a single user by their user id

router.get('/:_id', _auth.userAuth, userController.getUser); //route to update a single user by their user id

router.put('/:_id', userController.updateUser); //route to delete a single user by their user id

router["delete"]('/:_id', userController.deleteUser);
var _default = router;
exports["default"] = _default;