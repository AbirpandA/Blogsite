const joi = require('joi');

const signUpValidation = (req, res, next) => {
    const Schema = joi.object().keys({
        username: joi.string().required(), 
        email: joi.string().email().required(),
        password: joi.string().required(),
        confirmPassword: joi.string().valid(joi.ref('password')).required() 
    });
    
    const { error } = Schema.validate(req.body); 
    console.log(error)
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    
    next();
    
};

const loginValidation = (req, res, next) => {
    const Schema = joi.object().keys({
        email: joi.string().email().required(),
        password: joi.string().required(),
    });
    
    const { error } = Schema.validate(req.body); 
    
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    
    next();
};

module.exports = { signUpValidation, loginValidation };