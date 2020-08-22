# hospital_api
 
 Application to register the doctor and patient and make the reports for the patients by the logged in Doctor
 
 1. to install all the dependies npm i 
 2. to start the server can use "nodemon index.js" or change the script in package.json "start": "nodemon index.js" and then use "npm start"
 3. url -->
 a. for register a doctor  "http://localhost:5000/api/v1/doctors/register"
 this will be the request body(doxtorSchema)
  {
   "username" : "doctor's Name",
   "email" : "doctor's email",
   "password" "password"
  }
 b. for log in the doctor "http://localhost:5000/api/v1/doctors/login"
 {
  "email": "doctor's email"
  "password" : password
  }
  
c. for register a patient by logged in doctor http://localhost:3000/api/v1/patients/register
doctor will be authrized using jwt token which will be in header Bearer token
{
 "phone": "patient"s phone",
 "name":"patient's nme"
 }
 
d. for creating a report http://localhost:5000/api/v1/patients/:id/create_report
 id will be patient id
 {
    "status":"Negative"
}
/*************** status is enum can be 'Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit' ********************/
status: {
      type: String,
      required: true,
      enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
  }
  
 e. for getting reports of a patient http://localhost:5000/api/v1/patients/:id/all_reports
 id will be patient id
 
 f. for fetching the report by status http://localhost:5000/api/v1/reports/:status
 
 
 
 
