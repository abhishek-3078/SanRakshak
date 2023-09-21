const User=require("../models/user")
const auth=async(req,res,next)=>{
  try{    
      const token=req.header('Authorization')
      const decoded=jwt.verify(token,process.env.JWT_SECRET)
      const user=await User.findOne({_id:decoded._id})
      if(!user){
          throw new Error()
      }
      req.user=user
      req.token=token
      next()
  }catch(e){
      res.status(401).send({error:"Please authenticate."})
  }
}
module.exports=auth