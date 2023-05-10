import User from '../models/user.model';
import bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken';

//create new user for tshirt store
export const userRegister = async (req) => {
  try {
    if (req.validatedBody.api_key === process.env.API_SECRET_KEY) {
      let userDataEmail = await User.find({ email: req.validatedBody.email })
      if (!userDataEmail.length) {
        const passwordHash = await bcrypt.hash(req.validatedBody.password, 10)
        req.validatedBody.password = passwordHash
        let newUser = new User({
          ...req.validatedBody
        })
        const userDetails = await newUser.save()
        return {
          message: "added successfully",
          code: 201,
          data: userDetails
        }
      } else return {
        message: "user already registered",
        code: 400,
        data: {}
      }
    } else return {
      message: "unauthorised",
      code: 400,
      data: {}
    }
  } catch (error) {
    console.log(error)
    res.json({
      status: "failed",
      code: 401,
      error: error
    })
  }
};

//login user for tshirt store
export const userLogin = async (req) => {
  let userData = await User.findOne({ email: req.validatedBody.email })
  if (userData) {
    let passwordVerify = await bcrypt.compare(req.body.password, userData.password)
    if (passwordVerify) {
      const payload = { userData }
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "2d" })
      return {
        token: token,
        userId: userData._id,
        message: "Login sucess",
        code: 200
      }
    }
    else return {
      data: {},
      message: "Wrong Password",
      code: 403
    }
  } else return {
    data: {},
    message: "No such user found",
    code: 403
  }
};



//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};
//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
