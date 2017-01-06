var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(symptom, result) {
  $(".answerHere").empty();
  for(j=0; j < result.data.length; j++) {
    $(".answerHere").append('<div class="box-' + j + '"></div>')
    $(".answerHere div:last").append('<div class="picture">' + '<img src="' + result.data[j].profile.image_url + '">' + '</div>');
    $(".answerHere div:last").append('<div class="name">' + "Dr." + result.data[j].profile.first_name + " " + result.data[j].profile.last_name + " from " + result.data[j].practices[0].name + " could help with your " + symptom + "!" + '</div>');
    $(".answerHere div:last").append(" Contact: ")
    // if (result.data[j].practices[0].phones !== undefined) {
      for(i=0; i < result.data[j].practices[0].phones.length; i++) {
        $('.answerHere div:last').append(result.data[j].practices[0].phones[i].type + ":" + result.data[j].practices[0].phones[i].number + " ");
      }
    // $(".answerHere").append("</div>")
    // }
  }
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('.symptomForm').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#symptom').val();
    $('#symptom').val();
    currentDoctorObject.getDoctors(medicalIssue, displayDoctor);
  });
});
