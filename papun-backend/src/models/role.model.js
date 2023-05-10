import { Schema, model } from 'mongoose';
const mongoose = require('mongoose')

const roleSchema = new Schema({
    roleName: {
        type: String,
        unique: true
    },
    roleKey: {
        type: String,
    },
    roleApi: [
        {
            type: Object,
            _id : false
        }
    ]
})

export default model('Role', roleSchema)