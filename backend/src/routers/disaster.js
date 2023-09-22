const express=require('express')
const User=require('../models/user')
const {Admin,Shelter}=require('../models/admin')
// const Shelter=require('../models/shelter')
const {auth,adminAuth}=require('../middleware/auth')
const router=new express.Router()
const Disaster=require('../models/disaster')
router.get('/',async (req,res)=>{
    // console.log("get user:",req.user)
    try{
        const data=Disaster.find({})
        // const user=req.user;
        res.status(200).send(data)
    }catch(e){
        console.log("hello error");
        return res.status(401).send({message:e.message});
    }
})

router.post('/add',async(req,res)=>{
    const d=new Disaster(req.body)
    try{ 
    await d.save()
    // sendWelcomeEmail(user.email,user.name)
    res.status(201).send({data:d})
    }catch(e){
        res.status(400).send(e)
    }
})

// router.post('/user/login',passport.authenticate('local',{failureRedirect:"/auth/login/failed",successRedirect:process.env.CLIENT_URL}));

router.post('/addshelter',adminAuth,async(req,res)=>{
    const admin=req.user
    console.log("login user:",admin)
        try{
            data=new Shelter(req.body)
            await data.save()
            console.log(data)
            admin.shelters.push(data._id);

            await admin.save()
            res.send({admin,shelter:data})
        }catch(e){
            res.status(400).send({Error:e.message})
        }
  
})

router.get('/shelter/:id',async(req,res)=>{
     try{   
            const id=req.params.id
            console.log(id)
            const data=await Shelter.find({disaster:id})
            res.send({data})
        }catch(e){
            res.status(400).send({Error:e.message})
        }
})
// router.post('/user/logout',(req,res)=>{
//     console.log("ask for logout",req.session)
//     req.logout()
//     res.send({message:"hello"})
    
// })

router.post('/user/logout',auth,(req,res)=>{
    try{
        console.log("hello");
        res.send({success:true,message:"successfully logout"})
    }catch(e){
        res.status(403).send({message:e.message})
    }
})

module.exports=router
