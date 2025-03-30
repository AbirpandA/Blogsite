const express = require("express");
const userRoutes = require('./routes/userRoutes')
const blogRoutes =  require('./routes/blogRoutes')




const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// middlewares





//routes

app.use('/auth', userRoutes);
app.use('/blogs',blogRoutes)





module.exports= app