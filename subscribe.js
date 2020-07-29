var content = $(".content");
var submit = $(".submit-btn");
var facts = $("div");

submit.on("click", surpriseMessage);


function surpriseMessage() {
  event.preventDefault ();
  var name = $('.name').val();
  var lastName = $('.lastName').val();
  var email = $('.email').val();
  console.log('calling surprise message')
  content.append(`<p> Sorry <strong>${name} ${lastName}</strong>. As of right now, the subscribe feature is not functioning. We are working towards fixing the issues so that you can have access to an online newsletter that highlights inspiring GenZ Girls. Sorry for the incovenience. </p>`);
}

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'megvboda@gmail.com',
    pass: 'boda1672'
  }
});

var mailOptions = {
  from: 'nsboda@gmail.com',
  to: 'megvboda@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
