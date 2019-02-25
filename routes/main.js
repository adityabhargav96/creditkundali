var router = require('express').Router();
var Form = require('../models/form');
var User = require('../models/form');
var Cart = require('../models/cart');
var passport = require('passport');
var passportConf = require('../config/passport');
var localStorage = require('node-localstorage');



router.get('/',function(req,res){
  res.render('main/home');
});



router.get('/oops',function(req,res,next){
  res.render('accounts/oops');
});


router.get('/form-page', function (req, res, next) {
  if(!req.user){
    res.redirect('accounts/ies');
  } else{
    // log::info('hello world');
    // localStorage.clear();
    Cart.findOne({owner:req.user._id},function(err,carts){
      carts.items = [];
      carts.save(function (err, found) {
  res.render('accounts/form-page');
})
})
}
});



router.post('/form-page', function (req, res, next) {


  // var form = new Form();
  var first_name = req.body.first_name;
  var middle_name = req.body.middle_name;
  var last_name = req.body.last_name;
  var data_date = req.body.date;
  var gender_gender = req.body.gender;
  var country_countrys = req.body.country;

localStorage.first_name = first_name;
localStorage.last_name = last_name;

Form.find({company_branch:req.user._id},function(err,form) {
  form.count = form.count + 1;
  form.save(function(err,form){




    return res.redirect('/check');
  })

})
});



module.exports = router;
