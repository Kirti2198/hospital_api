const Patient = require('../../../models/patient');
const Report = require('../../../models/report');

exports.register= async (req, res) => {

  const doctor =req.doctor._id;

 
    try {
      const { name, phone } = req.body;
      let patient;
      patient = await Patient.find({
        phone
      });

      if (patient.length > 0) {
        return res.status(200).json({
          success: true,
          body: patient[0]
        });
      }

      
      patient = await Patient.create({
        name,
        phone,
        doctor
      });
      // Return response
      return res.status(201).json({
        success: true,
        body: patient,
        msg:'Patient Registered Sucessfully!'
      });
    } catch (err) {
      // Error handling
      return res.status(401).json({
        success: false,
        msg:'Error Occoured!'
      });
    }
  };

  