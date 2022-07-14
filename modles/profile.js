const mongoose = require("mongoose");

const Register = new mongoose.Schema({
    img:{type:String},
    fullName: { type: String },
    email: { type: String },
    DOB: { type: Date},
    gender: { type: String },
    fullAddress:{type:String},
    contactNo:{type:String}

});
module.exports = mongoose.model("User", Register);