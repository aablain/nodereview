var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(symptom, result) {
  for(j=0; j < result.data.length; j++) {
    $(".answerHere").append("Dr." + result.data[j].profile.first_name + " " + result.data[j].profile.last_name + " from " + result.data[j].practices[0].name + " could help with your " + symptom + "!");
    $(".answerHere").append(" You can reach her at ")
    // if (result.data[j].practices[0].phones !== undefined) {
      for(i=0; i < result.data[j].practices[0].phones.length; i++) {
        $('.answerHere').append(result.data[j].practices[0].phones[i].type + ":" + result.data[j].practices[0].phones[i].number + " ");
      }
    // }
    $(".answerHere").prepend('<img src="' + result.data[j].profile.image_url + '">');
  }
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
