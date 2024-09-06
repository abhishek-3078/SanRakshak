const express=require('express')
const jwt=require('jsonwebtoken')
require('dotenv').config()
require('./db/mongoose')
// const authRoute = require("./routers/auth");
// const passport = require("passport");
// const bodyParser = require('body-parser');


// const cookieSession = require("cookie-session");
const userRouter=require('./routers/user')
const adminRouter=require('./routers/admin')
const disasterRouter=require('./routers/disaster')
const forumRouter=require('./routers/forum')
const cors=require('cors')
// const taskRouter=require('./routers/task')
// const { findByIdAndUpdate, findByIdAndDelete } = require('./models/user')

const app=express() 
const allowedOrigins = ["http://localhost:5173", "https://sanrakshak.onrender.com"];

app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));

// Preflight request handler
app.options('*', cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
// 	cookieSession({
// 		name: "session",
// 		keys: ["cyberwolve"],
// 		maxAge: 24 * 60 * 60 * 100,
// 	})
// );


// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
const port=process.env.PORT
app.get("/",(req,res)=>{
    console.log(req.user)
    res.send({message:"hello"})
})

app.use(userRouter)
app.use("/admin",adminRouter)
app.use("/disaster",disasterRouter)
app.use('/forum',forumRouter)
// app.use("/auth", authRoute)


  


app.listen(port,()=>{
    console.log("SERVER IS UP ON PORT "+port)
})

module.exports=app

