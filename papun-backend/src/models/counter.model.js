import { Schema, model } from 'mongoose';
const mongoose = require('mongoose')

const counterSchema = new Schema({
    count: {
        type: Number,
        default: 1000,
    },
    prefix: {
        type: String,
        require: true,
        unique: true
    },
    counterFor: {
        type: String,
        require: true,
        unique: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

export default model('Counter', counterSchema)