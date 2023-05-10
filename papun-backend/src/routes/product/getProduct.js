import express from 'express';
import product from '../../models/product.model'
import { newProductValidator} from '../validators/joi.validator';

const router = express.Router();
const Mongoose = require('mongoose')

router.post('/productAPI',newProductValidator, async (req, res) => {
    try{
        if(req.validatedBody.action == "add"){
            const productDetails = new product({
                product_name: req.validatedBody.name,
                product_description: req.validatedBody.description,
                product_price: req.validatedBody.price,
                product_category: req.validatedBody.category,
                product_subcategory: req.validatedBody.sub_category,
                product_image: req.validatedBody.image_list,
                product_status: req.validatedBody.status,
                product_brand: req.validatedBody.brand,
                product_color: req.validatedBody.color,
                product_size: req.validatedBody.size,
                product_discount: req.validatedBody.discount,
                product_gender:req.validatedBody.gender
            })
            const productDetailsSave = await productDetails.save()
            res.json({
                status: "success",
                code: 200,
                data: productDetailsSave
            })
        }else if(req.validatedBody.action=="remove"){
            const productDetails = await product.findByIdAndDelete(req.validatedBody.id)
            res.json({
                status: "success",
                code: 200,
                data: productDetails
            })
        }else if(req.validatedBody.action=="update"){
            const productDetails = new product({
                product_name: req.validatedBody.name,
                product_description: req.validatedBody.description,
                product_price: req.validatedBody.price,
                product_category: req.validatedBody.category,
                product_subcategory: req.validatedBody.sub_category,
                product_image: req.validatedBody.image_list,
                product_status: req.validatedBody.status,
                product_brand: req.validatedBody.brand,
                product_color: req.validatedBody.color,
                product_size: req.validatedBody.size,
                product_discount: req.validatedBody.discount,
                product_gender:req.validatedBody.gender
            })
            const updateProduct = await product.findByIdAndUpdate(req.validatedBody.id,productDetails)
            res.json({
                status: "success",
                code: 200,
                data: updateProduct
            })
        }else{
            res.json({
                status: "failed",
                code: 401,
                error: "Action not found"
            })
        }
    }catch(err){
        res.json({
            status: "failed",
            code: 401,
            error: err
        })
    }
})

router.post('/getAllProduct', async (req, res) => {
    try{
        const productDetails = await product.find()
        res.json({
            status: "success",
            code: 200,
            data: productDetails
        })
    }catch(err){
        res.json({
            status: "failed",
            code: 401,
            error: err
        })
    }
})

router.post('/getProductById', async (req, res) => {
    try{
        const productDetails = await product.findById(req.validatedBody.id)
        res.json({
            status: "success",
            code: 200,
            data: productDetails
        })
    }catch(err){
        res.json({
            status: "failed",
            code: 401,
            error: err
        })
    }
})

export default router
