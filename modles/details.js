const mongoose = require("mongoose");

const details = new mongoose.Schema({
    sclectBranch:{type:String},
    selectDepartement: { type: String },
    jobTitle: { type: String },
    payrollId: { type:String},
    Tenure:{type:Date},
    jobType:{type:String}
    

});
module.exports = mongoose.model("Job details", details);