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

router.post('/index15', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var gsti = req.body.gsttin;
    console.log(gsti)
    var gsti_state = req.body.gststate;
    console.log(gsti_state)

    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
       input : req.body.gsttin,
       state : req.body.gststate

    }

    const response = await axios.post('https://testapi.karza.in/v2/gst', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error401();
        break;
      case "402":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error402();
        break;
      case "500":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)


      System.findOne({company_branch:req.user._id},function(err,system){
        system.Gst_Identification_count = system.Gst_Identification_count + 1;
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
            yesterday.Gst_Identification_count = day.Gst_Identification_count;
            yesterday.save(function(err,yesterday){
              if (err) {
                  return next(err);
              }
            })
          day.date = wah;
          day.Gst_Identification_count = day.Gst_Identification_count + 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              console.log(day)
            });
          })
        }

    });

       var emailId = [];
       var applicationStatus  = [];
       var mobNum  = [];
       var gst_pan  = [];
       var gstinRefId = [];
       var regType  = [];
       var gstinId  = [];
       var registrationName  = [];
       var tinNumber = [];


       emailId.push(response.data.result.emailId);
       applicationStatus.push(response.data.result.applicationStatus);
       mobNum.push(response.data.result.mobNum);
       gst_pan.push(response.data.result.gst_pan);
       gstinRefId.push(response.data.result.gstinRefId);
       regType.push(response.data.result.regType);
       gstinId.push(response.data.result.gstinId);
       registrationName.push(response.data.result.registrationName);
       tinNumber.push(response.data.result.tinNumber);



        localStorage.gsti_gst = gsti;
        localStorage.gsti_state = gsti_state;
        localStorage.gst_emailId = emailId;
        localStorage.applicationStatus = applicationStatus;
        localStorage.mobNum = mobNum;
        localStorage.gst_pan = gst_pan;
        localStorage.gstinRefId = gstinRefId;
        localStorage.regType = regType;
        localStorage.gstinId = gstinId;
        localStorage.registrationName = registrationName;
        localStorage.tinNumber = tinNumber;

        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM15');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
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
