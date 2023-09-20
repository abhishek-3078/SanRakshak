

const authenticate=async (req,res,next)=>{
    const token = req.header('Authorization');
    if(!token || token=='null') return res.status(401).send()
    try{
    const {email}=jwt.verify(token,process.env.KEY)
    const user=await User.findOne({email}) 
    req.user=user
    next()
}catch (error) {
    return res.status(401).json({ error: error.message });
  }

}