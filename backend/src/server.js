require('dotenv').config()
const cors = require("cors");
const app = require('./app')
const connectdb = require('./config/db')
const port=process.env.port||3002


app.use(cors())
connectdb();



app.listen(port,()=>{
    console.log(`🚀server is running on port  http://${port}`)
})