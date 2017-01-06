var apiKey = require('./../.env').apiKey;

function Doctor() {

}


Doctor.prototype.getDoctors = function(medicalIssue, displayFunction) {
  debugger;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      console.log(result.data[0].practices[0].name);
      // displayFunction(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;