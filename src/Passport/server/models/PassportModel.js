const mongoose = require("mongoose");

const passportSchema = new mongoose.Schema({
  contactNo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  email: { type: String, required: true },
  education: { type: String },
  profession: { type: String },
  placeOfBirth: { type: String },
  areaPoliceStation: { type: String },
  parentInfo: {
    motherName: { type: String },
    fatherName: { type: String },
    spouseName: { type: String },
  },
  documents: {
    aadhar: { type: String },
    pan: { type: String },
  },
  formType: { type: String, required: true }, // 'fresh' or 'reissue'
});

const Passport = mongoose.model("Passport", passportSchema);
module.exports = Passport;
