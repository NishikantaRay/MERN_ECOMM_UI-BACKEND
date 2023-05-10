
import { Schema, model } from 'mongoose';
const mongoose = require('mongoose')

const otpSchema = new Schema(
    {
        phoneNumber: {
            type: String,
            required: true
        },
        otp: {
            type: String,
            required: true
        },
        createdAt: { type: Date, default: Date.now, index: { expires: 300 } },
        user : {
            type : mongoose.Types.ObjectId,
            ref : 'User'
        }
        //after 5 min it will get deleted automatically from databse
    },
    {
        timestamps: true
    }
);

export default model('Otp', otpSchema);
//User table name
