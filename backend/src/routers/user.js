const express=require('express')
const User=require('../models/user')
const auth=require('../middleware/auth')
const router=new express.Router()
const jwt = require('jsonwebtoken');
const passport = require("passport");
router.get('/user/getUser',async (req,res)=>{
    console.log("get user:",req.user)
    if(!req.user) return res.status(401).send({message:"Unauthorized User"})
    try{
        const user=req.user;
        res.status(200).send(user)
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
// router.post('/user/login',passport.authenticate('local',{failureRedirect:"/auth/login/failed",successRedirect:process.env.CLIENT_URL}));
router.post('/user/login',async(req,res)=>{
    let userData=req.body
    console.log(userData)
    try{
        try{

            const user=await User.findByCredentials(req.body.email,req.body.password)
            const token=await user.generateAuthToken()
            res.send({user,token})
        }catch(e){
            res.status(400).send("error"+ e)
        }
    }catch(e){
        res.status(403).send({success:false,message:e.message})
    }
})

// router.post('/user/logout',(req,res)=>{
//     console.log("ask for logout",req.session)
//     req.logout()
//     res.redirect(process.env.CLIENT_URL)
    
// })

router.get('/user/logout',(req,res)=>{
    try{
        console.log("hello");
        res.send({success:true,message:"successfully logout"})
    }catch(e){
        console.log(e)
    }
})

module.exports=router
