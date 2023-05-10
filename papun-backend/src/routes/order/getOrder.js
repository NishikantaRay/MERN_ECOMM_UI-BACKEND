import express from 'express';
import order from '../../models/order.model'
import { newOrderValidator} from '../validators/joi.validator';

const router = express.Router();
const Mongoose = require('mongoose')

router.post('/orderAPI',newOrderValidator, async (req, res) => {
    try{
        if(req.validatedBody.action == "add"){
            const orderDetails = new order({
                order_id: req.validatedBody.order_id,
                user_id: req.validatedBody.user_id,
                cart_id: req.validatedBody.cart_id,
                price: req.validatedBody.price,
                payment_method: req.validatedBody.payment_method,
                payment_id: req.validatedBody.payment_id,
                payment_status: req.validatedBody.payment_status,
                status: req.validatedBody.status,
            })
            const orderDetailsSave = await orderDetails.save()
            res.json({
                status: "success",
                code: 200,
                data: orderDetailsSave
            })
        }else if(req.validatedBody.action == "remove"){
            const orderDetails = await order.findByIdAndDelete(req.validatedBody.id)
            res.json({
                status: "success",
                code: 200,
                data: orderDetails
            })
        }else if(req.validatedBody.action == "update"){
            const orderDetails = new order({
                order_id: req.validatedBody.order_id,
                user_id: req.validatedBody.user_id,
                cart_id: req.validatedBody.cart_id,
                price: req.validatedBody.price,
                payment_method: req.validatedBody.payment_method,
                payment_id: req.validatedBody.payment_id,
                payment_status: req.validatedBody.payment_status,
                status: req.validatedBody.status,
            })
            const updatedOrderDetails= await order.findByIdAndUpdate(req.validatedBody.id,orderDetails)
            res.json({
                status: "success",
                code: 200,
                data: updatedOrderDetails
            })
        }else{
            res.json({
                status: "error",
                code: 500,
                error: "Invalid Action"
            })
        }
    }catch(err){
        res.json({
            status: "error",
            code: 500,
            error: err
        })
    }
})

router.post('/getAllOrder', async (req, res) => {
    try{
        const orderDetails = await order.find()
        res.json({
            status: "success",
            code: 200,
            data: orderDetails
        })
    }catch(err){
        res.json({
            status: "error",
            code: 500,
            error: err
        })
    }
})


router.post('/razorpayAfterCapture', async (req, res) => {
    try{
        

    }catch(err){
        res.json({
            status: "error",
            code: 500,
            error: err
        })
    }
})

export default router
