var router = require('express').Router();
var User = require('../models/user');
var Form = require('../models/form');
var Product = require('../models/product');
var Cart = require('../models/cart');
var System = require('../models/system');
var Day = require('../models/day');
const Yesterday = require('../models/yesterday');
var passport = require('passport');
var passportConf = require('../config/passport');
var request = require('request');
var async = require('async');
var path = require('path');
var qs = require("querystring");
var http = require("http");
var randomstring = require("randomstring");
const httpStatus = require('http-status');
// var cred = require('../config/credentials')['production'];


// var cartLength = require('./middlewares/middlewares');

router.get('/login', function (req, res) {
  if (req.user) return res.redirect('/');

  res.render('accounts/login', { message: req.flash('loginMessage') });
});



router.post('/login',
passport.authenticate('local-login', {
  failureRedirect: '/login',
  failureFlash: true
}),(req,res,user) => {
  User.findOne({ email: req.body.email },(err,user)=>{
    console.log(user.role)
  if(user.role === 'master'){
    user.online = 'true';
    user.save(function(err){
      if (err) return next(err);
  });
    res.redirect('/master-admin-dashboard');
  }else if(user.role === 'Branch'){
    user.online = 'true';
    user.save(function(err){
      if (err) return next(err);
  });
    res.redirect('/form-page');
    // })
  }else{
    res.redirect('/super-master-admin-dashboard');
    console.log(user)
  }
});
});






router.get('/woah',function(req,res,next){
  res.render('accounts/woah');
});





router.get('/master-admin-signup', function (req, res, next) {
  res.render('accounts/master-admin-signup', {
    errors: req.flash('errors')
  });
});


router.post('/master-admin-signup', function (req, res, next) {
      var user = new User();

      user.Company_name = req.body.company;
      user.email = req.body.email;
      user.password = req.body.password1;
      user.role = req.body.role;


      User.findOne({ email: req.body.email }, function (err, existingUser) {

        if (existingUser) {
          req.flash('errors', 'Account with that email address already exists');
          return res.redirect('/master-admin-signup');
        } else {
          user.save(function (err, user) {
            if (err) return next(err);
            res.redirect('/super-master-admin-dashboard')
          });
        }
      });
    });


    router.get('/master-admin-client-signup', function (req, res, next) {
      res.render('accounts/master-admin-client-signup', {
        errors: req.flash('errors')
      });
    });


    router.post("/master-admin-client-signup", function (req, res, next) {
  async.waterfall([
    function (callback) {
      var user = new User();

      user.Branch_name = req.body.branch;
      user.email = req.body.email;
      user.password = req.body.password1;
      user.role = req.body.role;
      user.BranchOwner = req.user._id;

      User.findOne({
          email: req.body.email
        },
        function (err, existingUser) {

          if (existingUser) {
            req.flash(
              "errors",
              "Account with that email address already exists"
            );
            return res.redirect("/master-admin-client-signup");
          } else {
            user.save(function (err, user) {
              if (err) return next(err);
              callback(null, user);
          });
        }
      });
    },

    function (user) {
        var cart = new Cart();
        cart.owner = user._id;
        cart.save(function (err) {
        if (err) return next(err);
                    var system = new System();
                    system.company_headquarter = req.user._id;
                    system.company_branch = user._id;
                    system.save(function(err){
                    if (err) return next(err);
                                var day = new Day();
                                day.company_headquarter = req.user._id;
                                day.company_branch = user._id;
                                day.save(function(err){
                                if (err) return next(err);
                                          var yesterday = new Yesterday();
                                          yesterday.company_headquarter = req.user._id;
                                          yesterday.company_branch = user._id;
                                          yesterday.save(function(err){
                                          if (err) return next(err);
                                                    var form = new Form();
                                                    form.company_headquarter = req.user._id;
                                                    form.company_branch = user._id;
                                                    form.save(function(err){
                                                    if (err) return next(err);


          res.redirect("/master-admin-dashboard");
        })
        });
        });
        });
      })
      }
  ]);
});






router.get('/logout', function (req, res, next) {
  User.findOne({ email: req.user.email },(err,user)=>{
    console.log(user.role)
  if(user.role === 'master'){
    User.findOne({email:req.user.email},function(err,founds){
      founds.online = 'false'
      founds.save(function(err){
        if (err) return next(err);
    });
  })
  req.logout();
  res.redirect('/');
  }else if(user.role === 'Branch'){
    User.findOne({email:req.user.email},function(err,founds){
      founds.online = 'false'
      founds.save(function(err){
        if (err) return next(err);
    });
  })
  req.logout();
  res.redirect('/');
  }else{
    req.logout();
    res.redirect('/');
  }
  });

});




module.exports = router;
