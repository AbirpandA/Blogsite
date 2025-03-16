const express = require('express')
const {signUpValidation,loginValidation} = require("../middleware/userAuth")


const router=express()


router.post('/signun',signUpValidation,)