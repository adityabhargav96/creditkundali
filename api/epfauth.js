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

router.post('/index28', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var uan = req.body.epuanf;
    var mobile = req.body.epfmobile;

    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
      uan: req.body.epuanf,
      mobile : req.body.epfmobile
    }

    const response = await axios.post('https://testapi.karza.in/v2/epf-get-otp', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'EPF LAN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'EPF LAN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error401();
        break;
      case "402":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'EPF LAN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error402();
        break;
      case "500":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'EPF LAN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'EPF LAN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'EPF LAN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)

      // console.log(response.data.result.name)
      // System.findOne({company_branch:req.user._id},function(err,system){
      //   system.pan_count = system.pan_count + 1;
      //   system.save(function (err, cart) {
      //       if (err) {
      //           return next(err);
      //       }
      //     });
      // })
//       var meta_params = [];
//       var disposable = [];
//       var webmail = [];
//       var result = [];
//       var accept_all = [];
//       var smtp_check = [];
//       var regexp = [];
//       var mx_records = [];
//       var emailyo = [];
//
//
//       for(var i=0; i< response.data.result.meta.params.length; i++){
//       meta_params.push(response.data.result.meta.params[i]);
//       }
//
//       disposable.push(response.data.result.data.disposable)
//       webmail.push(response.data.result.data.webmail)
//       result.push(response.data.result.data.result)
//       accept_all.push(response.data.result.data.accept_all)
//       smtp_check.push(response.data.result.data.smtp_check)
//       regexp.push(response.data.result.data.regexp)
//       mx_records.push(response.data.result.data.mx_records);
//       emailyo.push(response.data.result.data.email)
//
//
//       localStorage.authemail = authemail;
//       localStorage.meta_params = meta_params;
//       localStorage.disposable = disposable;
//       localStorage.webmail = webmail;
//       localStorage.result = result;
//       localStorage.accept_all = accept_all;
//       localStorage.smtp_check = smtp_check;
//       localStorage.regexp = regexp;
//       localStorage.mx_records = mx_records;
//       localStorage.emailyo = emailyo;
        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM28');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'EPF LAN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
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
//
//
//
//
// router.post('/index28', function (req, res) {
//   var userId = req.user._id;
//   var uan = req.body.epfuan;
//   var mobile = req.body.epfmobile;
//
//
//
// var options = { method: 'POST',
//   url: 'https://testapi.karza.in/v2/epf-get-otp',
//   headers: { 'content-type': 'application/json', 'x-karza-key': 'g3jbu5ats9C2B1KvQnwk' },
//   body:
//    {"consent":"Y","uan":req.body.epfuan,"mobile_no":req.body.epfmobile},
//   json: true };
//
// request(options, function (error, response, body) {
//   console.log(body);
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
//   }else if(body.status == 400){
//     console.log('500 status code');
//     res.send({message:'Internal Server Error'})
//   }else if(body.status == 402){
//     console.log('503 status code');
//     res.send({message:'Service Unavailable'})
//   }else if(body.status == 504){
//     console.log('504 status code');
//     res.send({message:'Status 504'})
//   }else if(body.status == 500){
//     console.log('500 status code');
//     res.send({message:'Internal Server Error'})
//   }else if(body.status == 503){
//     console.log('503 status code');
//     res.send({message:'Service Unavailable'})
//   }else{
//   User.findOne({ '_id': userId }, function (err, user) {
//     if (err) {
//       return new Error(err);
//     }
//     var epfauth = new Epfauth();
//     epfauth.cartowner = userId;
//     epfauth.cartownerEmail = user.email;
//     epfauth.input_uan = uan;
//     epfauth.input_mobile_no = mobile;
//     epfauth.save(function (err) {
//       if (err) return next(err);
//       req.flash('success', 'Successfully stored data');
//   // console.log(body);
//       // return res.redirect('/indexotp');
// res.send(200,'HI');
//   // console.log(body);
// });
// });
// }
// });
// });
//
//
//
// module.exports = router;
