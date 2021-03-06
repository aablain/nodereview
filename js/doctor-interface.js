var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(symptom, result) {
  $(".answerHere").empty();
  for(j=0; j < result.data.length; j++) {
    $(".answerHere").append('<div class="box"></div>')
    $(".answerHere .box:last").append('<div class="picture">' + '<img src="' + result.data[j].profile.image_url + '">' + '</div>');
    $(".answerHere .box:last").append('<div class="name"></div>')
    $(".answerHere .box:last .name").append("Dr. " + result.data[j].profile.first_name + " " + result.data[j].profile.last_name + " from " + result.data[j].practices[0].name + " could help with your " + symptom + "!");
    $(".answerHere .box:last").append('<div class="contact"><h4>Contact:</h4></div>')
      for(i=0; i < result.data[j].practices[0].phones.length; i++) {
        $('.answerHere .box:last .contact').append('<div class="contactNumber"></div>')
        $('.answerHere .box:last .contact .contactNumber:last').append('<i>' + result.data[j].practices[0].phones[i].type + "</i>: <b>" + result.data[j].practices[0].phones[i].number + "</b> ");
      }
  }
  if (result.data.length === 0) {
    $('.answerHere').append('<img src="http://www.westcomotors.com.au/site/user-assets/images/no-results.png">')
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
