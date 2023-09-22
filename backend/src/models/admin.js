const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const shelterSchema = new mongoose.Schema({
    coordinator:{
      type:String
    },
    description:{
        type:String
    },
    address: {
      street: {
        type: String
        
      },
      city: {
        type: String,
        
      },
      state: {
        type: String,
        
      },
      postalCode: {
        type: String,
        
      },
      country: {
        type: String,
        
      }
    },
    coord: {
      lng:{type:Number},
      lat:{type:Number}
    },
    resources:[{
        name:{
            type:String
        },
        qty:{
            type:Number
        }
    }],
    shelterType:{
      type:String
    },
    disaster: { type: mongoose.Schema.Types.ObjectId, ref: 'Disaster' },
    active:{
      type:Number,
      default:1
    },
    
  });
const Shelter=mongoose.model('shelter',shelterSchema)
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
    location:{
        main: {
            address: {
              street: {
                type: String,
                
              },
              city: {
                type: String,
                
              },
              state: {
                type: String,
                
              },
              postalCode: {
                type: String,
                
              },
              country: {
                type: String,
                
              }
            },
            coord: {
              lng:{type:Number},
              lat:{type:Number}
            },
          }
         
    },
    shelters:[{ type: mongoose.Schema.Types.ObjectId, ref: 'shelter' }],
    profileUrl:{
        type:String
    },
    organisationType:{
        type:String
    },
    expertise:{
        type:String
    },
    subject:{
        type:String
    }
    
},{
    timestamps:true
})

// adminSchema.virtual('organisationType').get(function () {
//     switch (this.organisationTypeId) {
//       case 1:
//         return 'NGO';
//       case 2:
//         return 'Rescue Agency';
//        case 3:
//         return '' 
//         default:
//         return 'unknown';
//     }
//   });
adminSchema.virtual('profileCompleted').get(function(){
  if(this.location.main.address.postalCode) {
    return 0;
  }else return 1;
})
adminSchema.statics.findByCredentials=async(email,password)=>{
    const user=await Admin.findOne({email})
    
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

adminSchema.methods.toJSON=function(){
    const user=this
    const userObject=user.toObject()
    delete userObject.password
    // delete userObject.tokens
    // userObject.avatar=undefined
    // delete userObject.avatar
    return userObject
}
adminSchema.methods.generateAuthToken=async function(){
  const user =this
  let token = jwt.sign({_id:user._id.toString()},process.env.JWT_SECRET,{expiresIn:60*60})
  return token
}
//arrow function dont support this keyword
adminSchema.pre('save',async function(next){
    const user=this
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }
    next()
})
//delete user tasks when user is removed
// adminSchema.pre('remove',async function(next){
//     const user=this
//     await Task.deleteMany({owner:user._id})
//     next()
// })
const Admin=mongoose.model('admin',adminSchema)

const newAdminData = {

    email: 'admin@example.com',
    password:'abhishek',
    organisationTypeId:1,
    // ... other admin fields ...
  
    // Insert one or more shelters into the shelters field
    shelters: [
      {
        type: 'Shelter Type 1',
        description: 'Shelter Description 1',
        address: 'Shelter Address 1',
        coord: [12.17, 1234.8],
        resources: [
          {
            name: 'Resource Name 1',
            qty: 10,
          },
          // Add more resources as needed
        ],
      },
      {
        type: 'Shelter Type 2',
        description: 'Shelter Description 2',
        address: 'Shelter Address 2',
        coord: [12.97, 87.32],
        resources: [
          {
            name: 'Resource Name 2',
            qty: 20,
          },
          // Add more resources as needed
        ],
      },
      // Add more shelters as needed
    ],
};
const data=new Admin({
  name:"abhihsek",
  email:"abhi@fa.com",
  password:"123445"
})

console.log(data)
module.exports={Admin,Shelter}
