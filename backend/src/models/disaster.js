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
const newDisaster = new Disaster({
    name: 'Covid-19',
    date: new Date('2019'),
    location: {
    address:"delhi",
      latitude: 12.34,
      longitude: -56.78,
    },
    type: 'epidemic',
    severity: 'Very High',
    description: 'Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. Most people infected with the virus will experience mild to moderat',
  });
  console.log(newDisaster)
  // newDisaster.save()
module.exports = Disaster;
