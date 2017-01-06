var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(symptom, result) {
  $(".answerHere").append("Dr." + result.data[0].profile.first_name + " " + result.data[0].profile.last_name + " from " + result.data[0].practices[0].name + " could help with your " + symptom + "!");
  $(".answerHere").append(" You can reach her at ")
  for(i=0; i < result.data[0].practices[0].phones.length; i++) {
    $('.answerHere').append(result.data[0].practices[0].phones[i].type + ":" + result.data[0].practices[0].phones[i].number + " ");
  }
  $(".answerHere").prepend('<img src="' + result.data[0].profile.image_url + '">');
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('.symptomForm').submit(function(event) {
    // debugger;
    event.preventDefault();
    var medicalIssue = $('#symptom').val();
    $('#symptom').val();
    currentDoctorObject.getDoctors(medicalIssue, displayDoctor);
  });
});
