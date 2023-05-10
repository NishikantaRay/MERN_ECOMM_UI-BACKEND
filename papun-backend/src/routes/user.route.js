import express from 'express';
import * as userController from '../controllers/user.controller';
import { loginValidator, newUserValidator, otpGenerateValidator, otpValidateValidator } from '../validators/joi.validator';
import { userAuth } from '../middlewares/auth.middleware';
import otpGenerator from 'otp-generator';
import bcrypt from 'bcrypt';
import Otp from '../models/otp.model';
import User from '../models/user.model';
import axios from 'axios';
import * as jwt from 'jsonwebtoken';


const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to create a new user
// router.post('/userRegister', newUserValidator, userController.newUser);
router.post('/userRegister', newUserValidator, userController.userRegister)
router.post('/userLogin', loginValidator, userController.userLogin)

router.post('/generateOtp',otpGenerateValidator, async (req, res) => {

    try {
        let userData = await User.findOne({ phoneNumber: req.validatedBody.phoneNumber }).lean()

        let userDetail = {}

        if (userData != null && userData.phoneNumber == req.validatedBody.phoneNumber) {
            userDetail = userData
        } else {
            let r = (Math.random() + 1).toString(36).substring(7)
            const passwordHash = await bcrypt.hash(r, 10)
            let name = req.validatedBody.userName
            let nameArray = name.split(" ")

            // req.body.password = passwordHash
            userDetail = new User({
                "email": req.validatedBody.email,
                "firstName": nameArray[0],
                "lastName": nameArray[nameArray.length - 1],
                "phoneNumber": req.validatedBody.phoneNumber,
                "password": passwordHash,
                "avatar": "https://www.w3schools.com/howto/img_avatar2.png",
                "role": "generalUser",
                "allowed_operations": ["personal"],
                "created_by": "bookingRequestsRamlingam",
                "status": "active",
            })
            // userDetail = await newUser.save()
        }

        const OTP = otpGenerator.generate(6, {
            digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false
        });
        console.log(OTP, "<<<<<<<<<<")
        const hashOtp = await bcrypt.hash(OTP, 10);
        const otp = new Otp({
            phoneNumber: req.validatedBody.phoneNumber,
            otp: hashOtp
        });
        const otpDetails = await otp.save()
        userDetail.otp = otpDetails._id
        if(userData==null){
            await userDetail.save()

        }

        let textLocalClient = axios.create({
            baseURL: "https://api.textlocal.in/",
            params: {
                apiKey: "NGI1Mjc1NGM2ZDczNmI1NjMxNjE3NzZmNjU3OTY0NDI=", //Text local api key
                sender: "berham"
            }
        });
        let params = new URLSearchParams();
        params.append("numbers", [parseInt("91" + req.body.phoneNumber)]);
        // params.append(
        //     "message",
        //     `Dear User,\n\nUse the OTP ${OTP} login or reset password to your ii universe account. OTP is valid for 180 seconds. Kindly do not share this OTP.`
        // );
        params.append(
            "message",
            `${OTP} is your OTP to proceed with the Berhampur booking portal. Do not share OTP with anyone.`
        )
        let textLocalResponse = await textLocalClient.post("/send", params);
        console.log(textLocalResponse.data)
        res.json({
            status: "SUCCESS",
            code: 200,
            data: otpDetails,
            message : "Otp generated successfully"
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: "failed",
            code: 401,
            error: error
        })
    }
})

router.post('/validateOtp',otpValidateValidator, async (req, res) => {
    try {
        let otpData = await Otp.find({ phoneNumber: req.validatedBody.phoneNumber });
        let userData = await User.findOne({ phoneNumber: req.validatedBody.phoneNumber })
        if (otpData.length > 0 && userData) {
            const rightOtpFind = otpData[otpData.length - 1];
            const validUser = await bcrypt.compare(req.validatedBody.otp, rightOtpFind.otp);
            if (rightOtpFind.phoneNumber == req.validatedBody.phoneNumber && validUser) {
                const payload = { userData }
                const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "2d" })
                const otpVerification = {
                    token,
                    userData
                }
                res.json({
                    status : "SUCCESS",
                    data: otpVerification,
                    message: "Login sucess",
                    code: 200
                })
            } else res.json({
                data: {},
                message: "Wrong Otp",
                code: 403
            })

            // res.json({
            //     status: "user found ",
            //     code: 200,
            //     data: validUser
            // })
        } else res.json({
            status : "failed",
            message: "no such user found or no such otp against this phoneNumber",
            code: 400,
            data: {}
        })
    } catch (error) {
        res.json({
            status: "failed",
            code: 401,
            error: error
        })
    }
})




//route to get a single user by their user id
router.get('/:_id', userAuth, userController.getUser);

//route to update a single user by their user id
router.put('/:_id', userController.updateUser);

//route to delete a single user by their user id
router.delete('/:_id', userController.deleteUser);

export default router;
