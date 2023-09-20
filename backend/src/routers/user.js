const express=require('express')
const User=require('../models/user')
const auth=require('../middleware/auth')
const router=new express.Router()
const jwt = require('jsonwebtoken');
const passport = require("passport");
router.get('/user/getUser',async (req,res)=>{
    const token=req.headers.authorization

    console.log("token: " , token ,typeof(token));
    if(token == "null") {
        return res.status(401).send()
    }
    try{
        const {email:Email,exp}=jwt.verify(token,process.env.KEY)
        if(new Date().getTime()/1000 > exp){
            return res.status(401).send({message:"token expired"})
        }
    
        // console.log(exp,Email,new Date().getTime())
        const data= await User.findOne({email:Email})

        res.status(200).send({username:data.username,fullname:data.fullname,email:data.email})
    }catch(e){
        console.log("hello erroe");
        return res.status(401).send({message:e.message});

    }
})

router.post('/user/signup',async(req,res)=>{

    const user=new User(req.body)
    console.log(user)
    try{ 
    await user.save()
    // sendWelcomeEmail(user.email,user.name)
    const token=await user.generateAuthToken()
    res.status(201).send({user,token})
    }catch(e){
        res.status(400).send(e)
    }
    
})
router.post('/user/login',passport.authenticate('local',{failureRedirect:"/auth/login/failed",successRedirect:process.env.CLIENT_URL}));
// router.post('/user/login',async(req,res)=>{
//     let userData=req.body
//     console.log(userData)
//     try{
//         try{

//             const user=await User.findByCredentials(req.body.email,req.body.password)
//             const token=await user.generateAuthToken()
//             res.send({user,token})
//         }catch(e){
//             res.status(400).send("error"+ e)
//         }
//     }catch(e){
//         res.status(403).send({success:false,message:e.message})
//     }
// })
router.post('/user/logout',(req,res)=>{
    console.log("ask for logout",req.session)
    req.logout()
    res.redirect(process.env.CLIENT_URL)
    
})
// router.get('/user/logout',(req,res)=>{
//     try{
//         console.log("hello");
//         res.send({success:true,message:"successfully logout"})
//     }catch(e){
//         console.log(e)
//     }
   
// })

module.exports=router
