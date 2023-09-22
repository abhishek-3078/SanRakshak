const express=require('express')
const {Admin,Shelter}=require('../models/admin')
const Alert=require('../models/alert')
const {adminAuth}=require('../middleware/auth')
const router=new express.Router()
const jwt = require('jsonwebtoken');
const passport = require("passport");

router.get('/',adminAuth,async (req,res)=>{
    console.log("get admin:",req.user)
    try{
        const user=req.user;a
        res.status(200).send(user)
    }catch(e){
        console.log("hello error");
        return res.status(401).send({message:e.message});

    }
})

router.post('/signup',async(req,res)=>{
    try{ 
    const user=new Admin(req.body)
    console.log(user)
    await user.save()
    // sendWelcomeEmail(user.email,user.name)
    let token = jwt.sign({_id:user._id.toString()},process.env.JWT_SECRET,{expiresIn:60*60})
    res.status(201).send({user,token})
    }catch(e){
        console.log(e.message)
        res.status(400).send(e)
    }
    
})

router.post('/signup/address',adminAuth,async(req,res)=>{
    const body=req.body;
    const admin=req.user
    if(!admin) return res.status(400).send()
    try{
        admin.location={}
        admin.location.main=req.body;
        console.log(admin)
        await admin.save()
        res.status(201).send({admin})
    }catch(e){
        res.status(400).send({Error:e.message})
    }
})
// router.post('/user/login',passport.authenticate('local',{failureRedirect:"/auth/login/failed",successRedirect:process.env.CLIENT_URL}));
router.post('/login',async(req,res)=>{
    let userData=req.body
    console.log("login data:",userData)

        try{
            const user=await Admin.findByCredentials(req.body.email,req.body.password)
            const token=await user.generateAuthToken()
            
            console.log("user:",user)
            res.send({user,token,completed:user.profileCompleted})
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


router.post('/addalert',adminAuth,async(req,res)=>{
    try{
        const data=new Alert(req.body)
        await data.save()
        res.status(201).send(data)
    }catch(e){
        res.status(403).send({message:e.message})
    }
})
router.get('/getalert',adminAuth,async(req,res)=>{
    try{
        const data=await Alert.find({})

        res.status(200).send(data)
    }catch(e){
        res.status(403).send({message:e.message})
    }
})
module.exports=router
