"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.otpValidateValidator = exports.otpGenerateValidator = exports.newUserValidator = exports.newCartValidator = exports.loginValidator = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

_joi["default"].objectId = require('joi-objectid')(_joi["default"]);

var newUserValidator = function newUserValidator(req, res, next) {
  var schema = _joi["default"].object({
    firstName: _joi["default"].string().trim().alphanum().min(3).max(25).trim(true),
    lastName: _joi["default"].string().trim().alphanum().min(3).max(25).trim(true),
    email: _joi["default"].string().trim().email().trim(true).required(),
    password: _joi["default"].string().trim().min(4).trim(true).required(),
    phoneNumber: _joi["default"].string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/),
    avatar: _joi["default"].string().trim(),
    role: _joi["default"].string().trim(),
    allowed_operations: _joi["default"].array(),
    resetPassword_token: _joi["default"].allow(),
    resetPassord_expire: _joi["default"].allow(),
    created_by: _joi["default"].string().trim(),
    status: _joi["default"].string().trim(),
    api_key: _joi["default"].string().trim()
  });

  var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error,
      value = _schema$validate.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

exports.newUserValidator = newUserValidator;

var newCartValidator = function newCartValidator(req, res, next) {
  var schema = _joi["default"].object({
    user_id: _joi["default"].objectId().required(),
    product_list: _joi["default"].array().required(),
    action: _joi["default"].string().trim().required()
  });

  var _schema$validate2 = schema.validate(req.body),
      error = _schema$validate2.error,
      value = _schema$validate2.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

exports.newCartValidator = newCartValidator;

var loginValidator = function loginValidator(req, res, next) {
  var schema = _joi["default"].object({
    password: _joi["default"].string().trim().min(4).trim(true).required(),
    email: _joi["default"].string().trim().email().trim(true).required(),
    api_key: _joi["default"].string().trim().required()
  });

  var _schema$validate3 = schema.validate(req.body),
      error = _schema$validate3.error,
      value = _schema$validate3.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

exports.loginValidator = loginValidator;

var otpGenerateValidator = function otpGenerateValidator(req, res, next) {
  var schema = _joi["default"].object({
    phoneNumber: _joi["default"].string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
    email: _joi["default"].string().trim(),
    userName: _joi["default"].string().trim(),
    api_key: _joi["default"].string().trim().required()
  });

  var _schema$validate4 = schema.validate(req.body),
      error = _schema$validate4.error,
      value = _schema$validate4.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

exports.otpGenerateValidator = otpGenerateValidator;

var otpValidateValidator = function otpValidateValidator(req, res, next) {
  var schema = _joi["default"].object({
    phoneNumber: _joi["default"].string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
    otp: _joi["default"].string().trim(),
    api_key: _joi["default"].string().trim().required()
  });

  var _schema$validate5 = schema.validate(req.body),
      error = _schema$validate5.error,
      value = _schema$validate5.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

exports.otpValidateValidator = otpValidateValidator;