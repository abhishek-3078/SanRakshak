const express=require('express')
const Admin=require('../models/admin')
const {adminAuth}=require('../middleware/auth')
const router=new express.Router()
const jwt = require('jsonwebtoken');
const passport = require("passport");

router.get('/',adminAuth,async (req,res)=>{
    console.log("get admin:",req.user)
    try{
        const user=req.user;
        res.status(200).send(user)
    }catch(e){
        console.log("hello error");
        return res.status(401).send({message:e.message});

    }
})

router.post('/signup',async(req,res)=>{
    const admin=new Admin(req.body)
    try{ 
    console.log(user)
    await user.save()
    // sendWelcomeEmail(user.email,user.name)
    const token=await user.generateAuthToken()
    res.status(201).send({admin,token})
    }catch(e){
        res.status(400).send(e)
    }
    
})

router.post('/signup/address',adminAuth,async(req,res)=>{
    const body=req.body;
    const admin=req.user
    if(!admin) return res.status(400).send()
    try{
        admin.location.main=req.body;
        console.log(admin)
        await admin.save()
        res.status(201).send({admin})
    }catch(e){

    }
})
// router.post('/user/login',passport.authenticate('local',{failureRedirect:"/auth/login/failed",successRedirect:process.env.CLIENT_URL}));
router.post('/login',async(req,res)=>{
    let userData=req.body
    console.log("login data:",userData)

        try{

            const user=await User.findByCredentials(req.body.email,req.body.password)
            const token=await user.generateAuthToken()
            res.send({user,token})
        }catch(e){
            res.status(400).send({Error:e.message})
        }
    
})

// router.post('/user/logout',(req,res)=>{
//     console.log("ask for logout",req.session)
//     req.logout()
//     res.send({message:"hello"})
    
// })

router.post('/logout',adminAuth,(req,res)=>{
    try{
        console.log("hello");
        res.send({success:true,message:"successfully logout"})
    }catch(e){
        res.status(403).send({message:e.message})
    }
})

module.exports=router