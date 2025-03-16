const joi =require('joi')
const { schema } = require('../models/blogpostModel')


const signUpValidation = (req,res,next)=>{
    const Schema=joi.object().keys({
        name:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().required(),
        confirmpassword:joi.string().valid(joi.ref(password)).required()
    })
    const{error}=schema.validate(req.body)
    if(error){
        console.log(error.details[0].message)
    }
    next()
}

const loginValidation = (req,res,next)=>{
    const Schema=joi.object().keys({
        email:joi.string().email().required(),
        password:joi.string().required(),
    })
    const{error}=schema.validate(req.body)
    if(error){
        console.log(error.details[0].message)
    }
    next()
}



module.exports={signUpValidation,loginValidation}