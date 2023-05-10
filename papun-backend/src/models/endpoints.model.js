import { Schema, model } from 'mongoose';
const mongoose = require('mongoose')

const endpointsSchema = new Schema({
    endpoints: [{
        type: Object
    }]
})

export default model('Endpoints', endpointsSchema)