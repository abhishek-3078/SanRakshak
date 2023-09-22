const mongoose = require('mongoose');

const disasterSchema = new mongoose.Schema({
  name: { type: String, required: true ,unique:true},
  date: { type: Date, required: true },
  location: {
    address:{type:String},
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  type: { type: String, required: true },
  severity: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Disaster = mongoose.model('Disaster', disasterSchema);
const newDisaster = new Disaster({
    name: 'Test Disaster',
    date: new Date(),
    location: {
    address:"delhi",
      latitude: 12.34,
      longitude: -56.78,
    },
    type: 'Test Type',
    severity: 'Test Severity',
    description: 'This is a test disaster entry.',
  });
  console.log(newDisaster)
//   newDisaster.save()
module.exports = Disaster;
