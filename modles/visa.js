const mongoose = require("mongoose");

const Visa = new mongoose.Schema({
    visaType:{type:String},
    from: {
        type: Date,
      },
      to: {
        type: Date
      },
      payrollGroup:{type:String}
    

});
module.exports = mongoose.model("Visadel", Visa);