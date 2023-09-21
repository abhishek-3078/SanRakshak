const express=require('express')
const jwt=require('jsonwebtoken')
require('dotenv').config()
require('./db/mongoose')
const authRoute = require("./routers/auth");
const passport = require("passport");
const passportStrategy = require("./passport");
const bodyParser = require('body-parser');


const cookieSession = require("cookie-session");
const userRouter=require('./routers/user')
const cors=require('cors')
// const taskRouter=require('./routers/task')
// const { findByIdAndUpdate, findByIdAndDelete } = require('./models/user')

const app=express() 
app.set("trust proxy",1) 
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100
        
	})
);


app.use(passport.initialize());
app.use(passport.session());

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
const port=process.env.PORT
app.get("/",(req,res)=>{
    console.log(req.user)
    res.send({message:"hello"})
})

app.use(userRouter)
app.use("/auth", authRoute)


  


app.listen(port,()=>{
    console.log("SERVER IS UP ON PORT "+port)
})

module.exports=app

