const Patient = require('../../../models/patient');
const Doctor = require('../../../models/doctor');
const Report = require('../../../models/report');

module.exports.create_report= async function(req,res){
  
  const doctor =req.doctor._id;
  console.log("Doctor Saab:"+ doctor);
 try{
     const{status,date} = req.body;
     let report;
     report = await Report.find({
     date
    });
    
    report  = await Report.create({
      doctor,
      status,
      date 
    });
    console.log("Report:"+report)

    return res.status(201).json({
      success: true,
      body: report,
      msg:'Report Created Sucessfully!'
    });
 }
 catch (err) {
  // Error handling
  return res.status(401).json({
    success: false,
    msg:'Error Occoured!'
  });
}
}