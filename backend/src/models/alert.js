const mongoose = require('mongoose');
const alertSchema = new mongoose.Schema({
title: { type: String, required: true},
  type: { type: String },
  author:{type:String},
  severity: { type:Number, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  target:{type:String},
  instruction:{type:String}
});

const Alert = mongoose.model('Alert', alertSchema);
// const newDisaster = new Disaster(d);
//   console.log(newDisaster)
  // newDisaster.save()
module.exports = Alert;
