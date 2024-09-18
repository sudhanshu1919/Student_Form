const Passport = require("../models/PassportModel");

const submitPassportForm = async (req, res) => {
  try {
    const newApplication = new Passport(req.body);
    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { submitPassportForm };
