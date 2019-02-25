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

router.post('/index45', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var icwaiNo = req.body.icwaifirm;


    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
        reg_no :req.body.icwaifirm
    }

    const response = await axios.post('https://testapi.karza.in/v2/icwaif', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI FIRM' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI FIRM' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error401();
        break;
      case "402":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI FIRM' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error402();
        break;
      case "500":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI FIRM' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI FIRM' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI FIRM' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)


      System.findOne({company_branch:req.user._id},function(err,system){
        system.Icwai_firm_count = system.Icwai_firm_count + 1;
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
            yesterday.Icwai_firm_count = day.Icwai_firm_count;
            yesterday.save(function(err,yesterday){
              if (err) {
                  return next(err);
              }
            })
          day.date = wah;
          day.Icwai_firm_count = day.Icwai_firm_count + 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              console.log(day)
            });
          })
        }

    });



       var approvalDate = [];
       var FirmType = [];
       var FirmName = [];
       var Pin = [];
       var City = [];
       var reConDate = [];
       var Region = [];
       var ldt = [];
       var MemberDetails = [];
       var deedDt = [];
       var State = [];
       var Contact = [];
       var mobile = [];
       var Address = [];
       var Dist = [];
       var email = [];


       approvalDate.push(response.data.result.approvalDate);
       FirmType.push(response.data.result.FirmType);
       FirmName.push(response.data.result.FirmName);
       Pin.push(response.data.result.Pin);
       City.push(response.data.result.City);
       reConDate.push(response.data.result.reConDate);
       Region.push(response.data.result.Region);
       ldt.push(response.data.result.ldt);
       for( var i=0; i<response.data.result.MemberDetails.length; i++ ){
       MemberDetails.push(response.data.result.MemberDetails[i]);
        }
       deedDt.push(response.data.result.deedDt);
       State.push(response.data.result.State);
       Contact.push(response.data.result.Contact);
       mobile.push(response.data.result.mobile);
       Address.push(response.data.result.Address);
       Dist.push(response.data.result.Dist);
       email.push(response.data.result.email);

     //
        localStorage.icwaiNo = icwaiNo;
        localStorage.approvalDate = approvalDate;
        localStorage.FirmType = FirmType;
        localStorage.FirmName = FirmName;
        localStorage.icwaifirm_Pin = Pin;
        localStorage.icwaifirm_City = City;
        localStorage.reConDate = reConDate;
        localStorage.icwaifirm_Region = Region;
        localStorage.icwaifirm_ldt = ldt;
        localStorage.icwaifirm_MemberDetails = MemberDetails;
        localStorage.icwaifirm_deedDt = deedDt;
        localStorage.icwaifirm_State = State;
        localStorage.icwaifirm_Contact = Contact;
        localStorage.icwaifirm_mobile = mobile;
        localStorage.icwaifirm_Address = Address;
        localStorage.icwaifirm_Dist = Dist;
        localStorage.icwaifirm_email = email;


     //

        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM45');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI FIRM' } }}, { safe: true, multi:true }, function(err, obj) {
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
