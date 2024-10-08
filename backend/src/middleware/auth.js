const {Admin} = require("../models/admin")
const User=require("../models/user")
const jwt=require("jsonwebtoken")
const auth=async(req,res,next)=>{
  try{    
      const token=req.header('Authorization')
      console.log(token)
      const decoded=jwt.verify(token,process.env.JWT_SECRET)
      console.log(decoded)
      const user=await User.findOne({_id:decoded._id})
      if(!user){
          throw new Error("no user found")
      }
      if(!user.profileUrl){
        user.profileUrl="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
      }
      req.user=user
      req.token=token
      next()
  }catch(e){
      res.status(401).send({error:e.message})
  }
}
const adminAuth=async(req,res,next)=>{
  try{    
      const token=req.header('Authorization')
      console.log(token)
      const decoded=jwt.verify(token,process.env.JWT_SECRET)
      console.log(decoded)
      const user=await Admin.findOne({_id:decoded._id}).populate('shelters')
      if(!user){
          throw new Error("no admin found")
      }
      if(!user.profileUrl){
        user.profileUrl="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Image.png"
      }
      req.user=user
      req.token=token
      next()
  }catch(e){
      res.status(401).send({error:e.message})
  }
}
module.exports={auth,adminAuth}