const mongoose = require('mongoose')
require('dotenv').config()

const connectdb=()=>{
    mongoose.connect(process.env.mongodb_url)
    .then(()=>console.log(`✅Connected to mongodb`))
    .catch((err) => console.error(`❌ MongoDB connection error: ${err.message}`));

}



module.exports=connectdb