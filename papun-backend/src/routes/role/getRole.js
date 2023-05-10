import express from 'express';
import Role from '../../models/role.model'
import Endpoints from '../../models/endpoints.model'
import { ROLES } from '../../middlewares/role.middleware';
const router = express.Router();
const Mongoose = require('mongoose')

router.post('/addRole', async (req, res) => {
    try {
        console.log(req.body)

        const newRole = new Role({
            ...req.body
        })

        const newRoleDetails = await newRole.save()

        if (newRoleDetails._id === newRole._id ) {
            res.json({
                message: "Role added successfully",
                code: 201,
                data: newRoleDetails
            })
        }else{
            res.json({
                status: "failed",
                code: 401,
                error: "Internal Issue Faced"
            })
        }

    } catch (error) {
        console.log(error)
        res.json({
            status: "failed",
            code: 401,
            data: {}
        })
    }
})

router.post('/setRole', async(req,res) => {

    try {
        const updateRole = await Role.updateOne({
            roleName : req.body.roleName
        },{
            $set : {
                roleApi : req.body.roleApi
            }
        })
        res.json({
            message: "Role Updated successfully",
            code: 201,
            data: updateRole
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: "failed",
            code: 401,
            data: {}
        })
    }

})

router.post('/removeRole', async(req,res) => {

    try {
        let rollName = req.body.rollName
        let rollKey = req.body.rollKey




        
    } catch (error) {
        console.log(error)
        res.json({
            status: "failed",
            code: 401,
            data: {}
        })
    }

})

router.post('/getAllApi', async (req, res) => {
    try { 
        let a = await Endpoints.find()
        res.json({
            data : a,
            status : "SUCCESS" ,
            message : "all api endpoints fetched",
            code : 200
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: "failed",
            code: 401,
            data: {}
        })
    }
})

export default router
