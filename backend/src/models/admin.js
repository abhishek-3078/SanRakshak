const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')



const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        trim:true,
        minLength:6
    },
    profileUrl:{
        type:String
    },
    organisationType:{
        type:Number
    },
    subject:{
        type:String
    }
    
},{
    timestamps:true
})

adminSchema.virtual('organisationType').get(function () {
    switch (this.organisationType) {
      case 1:
        return 'ngo';
      case 2:
        return 'something else';
      default:
        return 'unknown';
    }
  });

userSchema.statics.findByCredentials=async(email,password)=>{
    const user=await User.findOne({email})
    
    if(!user){
        throw new Error("Unable to Log In")
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error("Unable to login")
    }
    // console.log("user=",user)
    return user
}
//methods method is for creating functiod for instance of User model 
// userSchema.methods.getPublicProfile=function(){
//     const user=this
//     const userObject=user.toObject()
//     delete userObject.password
//     delete userObject.tokens
//     return userObject
// }
// userSchema.methods.toJSON=function(){
//     const user=this
//     const userObject=user.toObject()
//     delete userObject.password
//     delete userObject.tokens
//     // userObject.avatar=undefined
//     delete userObject.avatar
//     return userObject
// }
userSchema.methods.generateAuthToken=async function(){
    const user =this
    token = jwt.sign({_id:user._id.toString()},process.env.JWT_SECRET)
    user.tokens=user.tokens.concat({token})
    await user.save()
    return token
}
//arrow function dont support this keyword
userSchema.pre('save',async function(next){
    const user=this
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }
    next()
})
//delete user tasks when user is removed
// userSchema.pre('remove',async function(next){
//     const user=this
//     await Task.deleteMany({owner:user._id})
//     next()
// })
const User=mongoose.model('User',userSchema)
module.exports=User