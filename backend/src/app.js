const express = require("express");
const userRoutes = require('./routes/userRoutes')




const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// middlewares





//routes

app.use('/auth', userRoutes);





module.exports= app