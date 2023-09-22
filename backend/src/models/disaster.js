const mongoose = require('mongoose');
const {Shelter}=require('./admin')
const disasterSchema = new mongoose.Schema({
  name: { type: String, required: true ,unique:true},
  date: { type: Date, required: true },
  location: {
    address:{type:String},
    latitude: { type: Number},
    longitude: { type: Number },
  },
  type: { type: String },
  severity: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  shelters:{}
});

const Disaster = mongoose.model('Disaster', disasterSchema);
// const newDisaster = new Disaster(d);
//   console.log(newDisaster)
  // newDisaster.save()
module.exports = Disaster;
