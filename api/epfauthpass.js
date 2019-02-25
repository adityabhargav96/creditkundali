var request = require('request');
var router = require('express').Router();
// var Epfauth = require('../models/api/epfauth');
var User = require('../models/user');

router.get('/indexotp',function(req,res,next){
  res.render('apiforms/indexotp');
});


router.post('/indexotp', function (req, res) {
  var userId = req.user._id;



var options = { method: 'POST',
  url: 'https://testapi.karza.in/v2/epf-get-passbook',
  headers: { 'content-type': 'application/json', 'x-karza-key': 'g3jbu5ats9C2B1KvQnwk' },
  body:
   {"consent":"Y","otp":req.body.otpindex},
  json: true };

request(options, function (error, response, body) {
  console.log(body);
  if (error) {
    console.log(error);
  res.send({message:'Something is wrong'})
  }else if(body['status-code'] == 102){
    console.log('102 status code');
        console.log(body);
        res.send({message:'Wrong Input'})
  }else if(body['status-code'] == 103){
    console.log('103 status code');
        console.log(body);
        res.send({message:'Status 103'})
  }else if(body.status == 400){
    console.log('500 status code');
    res.send({message:'Internal Server Error'})
  }else if(body.status == 402){
    console.log('503 status code');
    res.send({message:'Service Unavailable'})
  }else if(body.status == 504){
    console.log('504 status code');
    res.send({message:'Status 504'})
  }else if(body.status == 500){
    console.log('500 status code');
    res.send({message:'Internal Server Error'})
  }else if(body.status == 503){
    console.log('503 status code');
    res.send({message:'Service Unavailable'})
  }else{
  var est_details = body.result.est_details;
  var dob = body.result.employee_details.dob;
  var father_name = body.result.employee_details.father_name;
  var member_name = body.result.employee_details.member_name;
  // if (error) throw new Error(error);
  User.findOne({ '_id': userId }, function (err, user) {
    if (err) {
      return new Error(err);
    }
    var epfauth = new Epfauth();
    epfauth.cartowner = userId;
    epfauth.cartownerEmail = user.email;
    epfauth.est_details = est_details;
    epfauth.employee_details_dob = dob;
    epfauth.employee_details_father_name = father_name;
    epfauth.employee_details_member_name = member_name;
    epfauth.save(function (err) {
      if (err) return next(err);
      req.flash('success', 'Successfully stored data');
      // return res.redirect('/details');
res.send(200,'HI');
  // console.log(body);
});
});
}
});
});


module.exports = router;
