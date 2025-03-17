const express = require('express');
const { signUp, login } = require('../controller/usercontroller');
const { signUpValidation, loginValidation } = require("../middleware/userAuth");

const router = express.Router();

router.post('/signup', signUpValidation, signUp);  
router.post('/login', loginValidation, login);     

module.exports = router;