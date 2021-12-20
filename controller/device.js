const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { Op, Sequelize } = require("sequelize");
const device = require("../model/device");


router.post("/device", bets);

module.exports = router;


const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };
  
async function bets(req, res) {
    const schema = Joi.object({
        deviceID:Joi.string().required(),
        upiId:Joi.string().required()
    });
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    
    const dd = device.create({
        upi:value.upiId,
        deviceId:value.deviceID
    }).then(()=>{
        return res.status(200).json({
            status:200,
            message:"Saved Successfully !!"
        })
    }).catch((err)=>{
        return res.status(400).json({
            status:200,
            message:"Already Exists"
        })
    })
    
}
