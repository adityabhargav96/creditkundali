const axios = require('axios');
const lodash = require('lodash');
const httpStatus = require('http-status');
const router = require('express').Router();
const Cart = require('../models/cart');
const User = require('../models/user');
const System = require('../models/system');
const Day = require('../models/day');
const Yesterday = require('../models/yesterday');
const APIError = require('./../core/APIError');
var localStorage = require('node-localstorage');

router.post('/index6', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var passno = req.body.passport_number;
    console.log(passno)
    var passname = req.body.passportname;
    console.log(passname)
    var passportsurname = req.body.passportsurname;
    console.log(passportsurname)
    var bday = req.body.passbday;
    console.log(bday)
    var doe = req.body.passdoe;
    console.log(doe)
    var gender = req.body.passgender;
    console.log(gender)
    var passporttype = req.body.passtype;
    console.log(passporttype)
    var countrycode = req.body.countrycode;
    console.log(countrycode)

    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
      name:req.body.passportname,
      last_name:req.body.passportsurname,
      dob:req.body.passbday,
      doe:req.body.passdoe,
      gender:req.body.passgender,
      passport_no:req.body.passport_number,
      type:req.body.passtype,
      country:req.body.countrycode
    }

    const response = await axios.post('https://testapi.karza.in/v2/passport', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PASSPORT AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        break;
      case "401":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PASSPORT AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error401();
        break;
      case "402":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PASSPORT AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error402();
        break;
      case "500":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PASSPORT AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PASSPORT AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PASSPORT AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)
      System.findOne({company_branch:req.user._id},function(err,system){
        system.Passport_count = system.Passport_count + 1;
        system.save(function (err, cart) {
            if (err) {
                return next(err);
            }
          });
      })
      Day.findOne({company_branch:req.user._id},function(err,day){
        var n = new Date();
        y = n.getFullYear();
        m = n.getMonth() + 1;
        d = n.getDate();
        var wah = d + "/" + m + "/" + y ;
        console.log(wah)
        if(day.date === wah){
        day.date = wah;
        day.Udyog_Adhaar_count = day.Udyog_Adhaar_count + 1;
        day.save(function (err, day) {
            if (err) {
                return next(err);
            }
            // console.log(day)
          });
        }else{
          Yesterday.findOne({company_branch:req.user._id},function(err,yesterday){
            yesterday.Passport_count = day.Passport_count;
            yesterday.save(function(err,yesterday){
              if (err) {
                  return next(err);
              }
            })
          day.date = wah;
          day.Passport_count = day.Passport_count + 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              console.log(day)
            });
          })
        }

    });
      var string1 = [];
      var string2 = [];
      string1.push(response.data.result.string1);
      string2.push(response.data.result.string2);
      localStorage.passno = passno;
      localStorage.passname = passname;
      localStorage.passportsurname = passportsurname;
      localStorage.pass_bday = bday;
      localStorage.pass_doe = doe;
      localStorage.pass_gender = gender;
      localStorage.pass_passporttype = passporttype;
      localStorage.pass_countrycode = countrycode;
      localStorage.pass_string1 = string1;
      localStorage.pass_string2 = string2;
        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM6');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PASSPORT AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
      const apiError = new APIError(err.message, httpStatus.INTERNAL_SERVER_ERROR, false);
      return next(apiError);
    }
    return next(err);
  }
});

router.use((err, req, res, next) =>
  res.status(err.status).json({
    status: err.status,
    name: err.name === 'APIError' ? "API_ERROR" : "SERVER_ERROR",
    process: err.isPublic ? err.isPublic : false,
    message: err.message ? err.message : httpStatus[err.status],
  })
);

module.exports = router;



// router.post('/index6', function (req, res) {
//   var userId = req.user._id;
//   var passno = req.body.passport_number;
//   var passname = req.body.passportname;
//   var passportsurname = req.body.passportsurname;
//   var bday = req.body.passbday;
//   var doe = req.body.passdoe;
//   var gender = req.body.passgender;
//   var passporttype = req.body.passtype;
//   var countrycode = req.body.countrycode;
//
//
// var options = { method: 'POST',
//   url: 'https://testapi.karza.in/v2/passport',
//   headers: { 'content-type': 'application/json', 'x-karza-key': 'g3jbu5ats9C2B1KvQnwk' },
//   body:
//    {consent:"Y",name:(req.body.passportname),last_name:(req.body.passportsurname),dob:(req.body.passbday),doe:(req.body.passdoe),gender:(req.body.passgender),passport_no:(req.body.passport_number),type:(req.body.passtype),country:(req.body.countrycode)},
//   json: true };
//
// request(options, function (error, response, body) {
//
//   if (error) {
//     console.log(error);
// res.send({message:'Something is wrong'})
//   }else if(body['status-code'] == 102){
//     console.log('102 status code');
//         console.log(body);
//         res.send({message:'Wrong Input'})
//   }else if(body['status-code'] == 103){
//     console.log('103 status code');
//         console.log(body);
//         res.send({message:'Status 103'})
//   }else if(body.status == 504){
//     console.log('504 status code');
//     res.send({message:'Status 504'})
//   }else if(body.status == 500){
//     console.log('500 status code');
//     res.send({message:'Internal Server Error'})
//   }else if(body.status == 400){
//     console.log('500 status code');
//     res.send({message:'Internal Server Error'})
//   }else if(body.status == 402){
//     console.log('503 status code');
//     res.send({message:'Service Unavailable'})
//   }else if(body.status == 503){
//     console.log('503 status code');
//     res.send({message:'Service Unavailable'})
//   }else{
//     console.log(body)
//   var string1 = body.result.string1;
//   var string2 = body.result.string2;
//   if (error) throw new Error(error);
//   User.findOne({ '_id': userId }, function (err, user) {
//     if (err) {
//       return new Error(err);
//     }
//     var passport = new Passport();
//     passport.cartowner = userId;
//     passport.cartownerEmail = user.email;
//     passport.input_passport_no = passno;
//     passport.input_name = passname;
//     passport.input_last_name = passportsurname;
//     passport.input_dob = bday;
//     passport.input_doe = doe;
//     passport.input_gender = gender;
//     passport.input_type = passporttype;
//     passport.input_country = countrycode;
//     passport.string1 = string1;
//     passport.string2 = string1;
//     passport.save(function (err) {
//       if (err) return next(err);
//       req.flash('success', 'Successfully stored data');
//   res.status(200).send('HI');
//
// });
// });
// }
// });
// });
//
//
//
// module.exports = router;
