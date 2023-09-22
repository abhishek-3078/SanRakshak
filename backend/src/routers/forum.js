const express=require('express')
const {Admin,Shelter}=require('../models/admin')
const {Disaster}=require("../models/disaster")
const {adminAuth, auth}=require('../middleware/auth')
const router=new express.Router()
const jwt = require('jsonwebtoken');
const passport = require("passport");
const {Post}=require("../models/forum")
router.get('/',async (req,res)=>{
    try{
        const user=req.user;
        res.status(200).send(user)
    }catch(e){
        console.log("hello error");
        return res.status(401).send({message:e.message});
    }
})

router.post('/post',auth,async(req,res)=>{
    try{ 
    p=req.body
    p.author=req.user.name
    const data=new Post(p)
    console.log("data:",data)
    await data.save()
   
    res.status(201).send({data})
    }catch(e){
        console.log(e.message)
        res.status(400).send(e)
    }
})
router.get('/post/:id',async(req,res)=>{
    try{ 
        const id=req.params.id
        console.log(id)
    const data=await Post.find({disaster:id}).sort({createdAt:-1})
        res.status(201).send(data)
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

    }
})
// router.post('/user/login',passport.authenticate('local',{failureRedirect:"/auth/login/failed",successRedirect:process.env.CLIENT_URL}));
router.post('/login',async(req,res)=>{
    let userData=req.body
    console.log("login data:",userData)

        try{

            const user=await Admin.findByCredentials(req.body.email,req.body.password)
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



module.exports=router
