const express = require("express");
const { submitPassportForm } = require("../controllers/passportController");
const router = express.Router();

router.post("/", submitPassportForm);

module.exports = router;
