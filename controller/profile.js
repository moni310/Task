const profile =require("../modles/profile")
const bookidgen=require("bookidgen")

const details =require("../modles/details")
const visaDetails =require("../modles/visa")


// Create user
const Profile = async (req, res) => {
    const {
    img,
    fullName,
    email,
    DOB,
    gender,
    fullAddress,
    contactNo} = req.body;
  
    try {
      if (!(
    fullName,
    email,
    DOB,
    gender,
    fullAddress,
    contactNo)) {
        res.json({ message: "All fields are required", status: false });
      } else {

        const Details = await profile.create({
            img,
            fullName,
            email,
            DOB,
            gender,
            fullAddress,
            contactNo,
            id: bookidgen("ID", 14522, 199585),
            
        });

  
        if (!Details) {
          res.json({ message: "Something went wrong", status: false });
        } else {
          res.json({
            message: "Employee details has addes successfully",
            data: Details,
            status: true,
          });
        }
      }
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };


// add job details
  const Jobdetails = async (req, res) => {
    const {
        sclectBranch,
        selectDepartement,
        jobTitle,
        payrollId,
        Tenure,
        jobType} = req.body;
  
    try {
      if (!(
        sclectBranch,
        selectDepartement,
        jobTitle,
        payrollId,
        Tenure,
        jobType)) {
        res.json({ message: "All fields are required", status: false });
      } else {

        const Details = await details.create({
        sclectBranch,
        selectDepartement,
        jobTitle,
        payrollId,
        Tenure,
        jobType
        });

  
        if (!Details) {
          res.json({ message: "Something went wrong", status: false });
        } else {
          res.json({
            message: "Job details has addes successfully",
            data: Details,
            status: true,
          });
        }
      }
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };


  // Visa

  const Visa = async (req, res) => {
    const {
        visaType,
        from,
        to,
        payrollGroup,
    } = req.body;
  
    try {
      if (!(
        visaType,
        from,
        to,
        payrollGroup)) {
        res.json({ message: "All fields are required", status: false });
      } else {

        const visaDetail = await visaDetails.create({
            visaType,
            from,
            to,
            payrollGroup,
        });

  
        if (!visaDetail) {
          res.json({ message: "Something went wrong", status: false });
        } else {
          res.json({
            message: "Job details has addes successfully",
            data: visaDetail,
            status: true,
          });
        }
      }
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };


  module.exports={Profile,Jobdetails,Visa}