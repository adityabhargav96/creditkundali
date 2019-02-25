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

router.post('/index22', async (req, res, next) => {
  try {
    var userId = req.user._id;
  var icwaino = req.body.icwaimem;
  console.log(icwaino)


    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
        membership_no :req.body.icwaimem
    }
    console.log(data)

    const response = await axios.post('https://testapi.karza.in/v2/icwaim', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error401();
        break;
      case "402":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error402();
        break;
      case "500":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)


      System.findOne({company_branch:req.user._id},function(err,system){
        system.Icwai_membership_Auth_count = system.Icwai_membership_Auth_count + 1;
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
            yesterday.Icwai_membership_Auth_count = day.Icwai_membership_Auth_count;
            yesterday.save(function(err,yesterday){
              if (err) {
                  return next(err);
              }
            })
          day.date = wah;
          day.Icwai_membership_Auth_count = day.Icwai_membership_Auth_count + 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              console.log(day)
            });
          })
        }

    });




       var MemshipDt = [];
       var Chapter = [];
       var Retired = [];
       var dob = [];
       var Mname = [];
       var ProtFirmName = [];
       var ValidUpDt = [];
       var MemCategory = [];
       var Fname = [];
       var gender = [];
       var SrName = [];
       var EffectiveDt = [];
       var MemRegion = [];
       var CrtEmployer = [];
       var FirmEftDt = [];
       var CancellationDt = [];
     //


       MemshipDt.push(response.data.result.MemshipDt);
       Chapter.push(response.data.result.Chapter);
       Retired.push(response.data.result.Retired);
       dob.push(response.data.result.dob);
       Mname.push(response.data.result.Mname);
       ProtFirmName.push(response.data.result.ProtFirmName);
       ValidUpDt.push(response.data.result.ValidUpDt);
       MemCategory.push(response.data.result.MemCategory);
       Fname.push(response.data.result.Fname);
       gender.push(response.data.result.gender);
       SrName.push(response.data.result.SrName);
       EffectiveDt.push(response.data.result.EffectiveDt);
       MemRegion.push(response.data.result.MemRegion);
       CrtEmployer.push(response.data.result.CrtEmployer);
       FirmEftDt.push(response.data.result.FirmEftDt);
       CancellationDt.push(response.data.result.CancellationDt);
     //
     // //


        localStorage.icwaino = icwaino;
        localStorage.icwai_mem_MemshipDt = MemshipDt;
        localStorage.icwai_mem_Chapter = Chapter;
        localStorage.icwai_mem_Retired = Retired;
        localStorage.icwai_mem_dob = dob;
        localStorage.icwai_mem_Mname = Mname;
        localStorage.icwai_mem_ProtFirmName = ProtFirmName;
        localStorage.icwai_mem_ValidUpDt = ValidUpDt;
        localStorage.icwai_mem_MemCategory = MemCategory;
        localStorage.icwai_mem_Fname = Fname;
        localStorage.icwai_mem_gender = gender;
        localStorage.icwai_mem_SrName = SrName;
        localStorage.icwai_mem_EffectiveDt = EffectiveDt;
        localStorage.icwai_mem_MemRegion = MemRegion;
        localStorage.icwai_mem_CrtEmployer = CrtEmployer;
        localStorage.icwai_mem_FirmEftDt = FirmEftDt;
        localStorage.icwai_mem_CancellationDt = CancellationDt;
     //
     //
     // //

        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM22');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ICWAI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
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
