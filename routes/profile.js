const express = require("express");
const router =express.Router()

const Users= require("../controller/profile")

router.post("/details", Users.Profile);
router.post("/job/details",Users.Jobdetails);
router.post("/visadetails",Users.Visa)

module.exports= router