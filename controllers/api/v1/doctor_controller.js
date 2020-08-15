const Doctor=require('../../../models/doctor');
const jwt=require('jsonwebtoken');

module.exports.register = async function(req,res) {
  try {

    const doctor=  await Doctor.create(req.body);
      
      return res.status(200).json({
          success: true,
          message:doctor
      });

  } catch (err) {
      return res.status(500).json({
          success: false,
          message:err.message
      });
  }
}

