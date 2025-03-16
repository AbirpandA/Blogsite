const  User = require("../models/userModel")

const signUp=async(req,res)=>{
try{
    const {username,email,password}=req.body
    if(!username||!password||!email){
        res.json({message:"all fields are required"})
    }
    const user = User.findone((e)=>e.email==email)
    if(user){
        res.json({message:"user Already exist"})
    }
    
}
catch(err){

}
}