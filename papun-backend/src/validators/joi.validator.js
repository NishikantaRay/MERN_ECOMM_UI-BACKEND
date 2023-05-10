import Joi from '@hapi/joi';
Joi.objectId = require('joi-objectid')(Joi)

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().trim().alphanum().min(3).max(25).trim(true),
    lastName: Joi.string().trim().alphanum().min(3).max(25).trim(true),
    email: Joi.string().trim().email().trim(true).required(),
    password: Joi.string().trim().min(4).trim(true).required(),
    phoneNumber: Joi.string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/),
    avatar: Joi.string().trim(),
    role: Joi.string().trim(),
    allowed_operations: Joi.array(),
    resetPassword_token: Joi.allow(),
    resetPassord_expire: Joi.allow(),
    created_by: Joi.string().trim(),
    status: Joi.string().trim(),
    api_key:Joi.string().trim()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};

export const newCartValidator = (req, res, next) => {
  const schema = Joi.object({
    user_id: Joi.objectId().required(),
    product_list: Joi.array().required(),
    action: Joi.string().trim().required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};

export const newProductValidator = (req, res, next) => {
  const schema = Joi.object({
    pid: Joi.string().trim().required(),
    name: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    price: Joi.number().required(),
    category: Joi.string().trim().required(),
    sub_category: Joi.string().trim().required(),
    image_list: Joi.array().required(),
    status: Joi.string().trim().required(),
    brand: Joi.string().trim().required(),
    color: Joi.string().trim().required(),
    size: Joi.string().trim().required(),
    discount: Joi.number().required(),
    gender: Joi.string().trim().required(),
    action: Joi.string().trim().required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};

export const newOrderValidator = (req, res, next) => {
  const schema = Joi.object({
    user_id: Joi.objectId().required(),
    order_id: Joi.string().trim().required(),
    cart_id: Joi.objectId().required(),
    price: Joi.number().required(),
    payment_method:Joi.string().trim().required(),
    payment_id:Joi.string().trim().required(),
    payment_status:Joi.string().trim().required(),
    status: Joi.string().trim().required(),
    action: Joi.string().trim().required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};

export const loginValidator = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().trim().min(4).trim(true).required(),
    email: Joi.string().trim().email().trim(true).required(),
    api_key: Joi.string().trim().required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};


export const otpGenerateValidator = (req, res, next) => {

  const schema = Joi.object({
    phoneNumber: Joi.string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
    email: Joi.string().trim(),
    userName: Joi.string().trim(),
    api_key: Joi.string().trim().required()
  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}

export const otpValidateValidator = (req, res, next) => {

  const schema = Joi.object({
    phoneNumber: Joi.string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
    otp: Joi.string().trim(),
    api_key: Joi.string().trim().required()
  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}