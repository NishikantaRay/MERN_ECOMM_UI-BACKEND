import express from 'express';
import Cart from '../../models/cart.model'
import { newCartValidator } from '../validators/joi.validator';

const router = express.Router();
const Mongoose = require('mongoose')

router.post('/cartAPI',newCartValidator, async (req, res) => {
    try{
        // if action is add
        if(req.validatedBody.action == "add"){
            // if a cart is already present for the user then update the cart else create a new cart
            const userId= await Cart.find({user_id: req.validatedBody.user_id})
            if(userId){
                // append the products in product list
                const cart = await Cart.findOneAndUpdate({user_id: req.validatedBody.user_id}, {$push: {product_list: req.validatedBody.product_list}})
                res.json({
                    status: "success",
                    code: 200,
                    data: cart
                })
            }else{
                // create a new cart
                const cart = new Cart({
                    user_id: req.validatedBody.user_id,
                    product_list: req.validatedBody.product_list
                })
                const cartDetails = await cart.save()
                res.json({
                    status: "success",
                    code: 200,
                    data: cartDetails
                })
            }
        }
        // if action is remove
        else if(req.validatedBody.action == "remove"){ 
            // remove the product by product id 
            const userId= await Cart.find({user_id: req.validatedBody.user_id})
            if(userId){
                // remove the product from product list
                const deleteProduct = await Cart.findByIdAndDelete(
                    {user_id: req.validatedBody.user_id},{
                        $pull: {product_list: {product_id: req.validatedBody.product_list.product_id}}
                    }
                )
                res.json({
                    status: "success",
                    code: 200,
                    data: deleteProduct
                })
            }else{
                res.json({
                    status: "failed",
                    code: 401,
                    error: "User id not found"
                })
            }
        }
        // if action is update
        else if(req.validatedBody.action == "update"){
            // update the product by product id
            const userId= await Cart.find({user_id: req.validatedBody.user_id})
            if(userId){
                //update the product from product list
                const updateProduct = await Cart.findOneAndUpdate(
                    {user_id: req.validatedBody.user_id, "product_list.product_id": req.body.product_list.product_id},
                    {$set: {"product_list.$.quantity": req.body.product_list.quantity}}
                )
                res.json({
                    status: "success",
                    code: 200,
                    data: updateProduct
                })
            }else{
                res.json({
                    status: "failed",
                    code: 401,
                    error: "User id not found"
                })
            }
        }
        else{
            // list all the products in the cart according to user_id
            const userId= await Cart.find({user_id: req.validatedBody.user_id})
            if(userId){
                const cart = await Cart.find({user_id: req.validatedBody.user_id}).populate('product_list.product_id')
                res.json({
                    status: "success",
                    code: 200,
                    data: cart
                })
            }else{
                res.json({
                    status: "failed",
                    code: 401,
                    error: "User id not found"
                })
            }
        }
    }catch(err){
        console.log(err)
        res.json({
            status: "failed",
            code: 401,
            error: err
        })
    }

});


export default router
