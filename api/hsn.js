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

router.post('/index38', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var hsn1 = req.body.hsn;

    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
       hsCode:req.body.hsn

    }

    const response = await axios.post('https://testapi.karza.in/v2/dgft', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'HSN CODE CHECK' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'HSN CODE CHECK' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error401();
        break;
      case "402":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'HSN CODE CHECK' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error402();
        break;
      case "500":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'HSN CODE CHECK' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'HSN CODE CHECK' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'HSN CODE CHECK' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data.result.chapterNotes)


      System.findOne({company_branch:req.user._id},function(err,system){
        system.Hsn_Code_Check_count = system.Hsn_Code_Check_count + 1;
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
            yesterday.Hsn_Code_Check_count = day.Hsn_Code_Check_count;
            yesterday.save(function(err,yesterday){
              if (err) {
                  return next(err);
              }
            })
          day.date = wah;
          day.Hsn_Code_Check_count = day.Hsn_Code_Check_count + 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              console.log(day)
            });
          })
        }

    });


       var chapterNotes = [];
       var policyLink  = [];
       var headingDesc  = [];
       var sectionDesc  = [];
       var itemDesc2 = [];
       var itemDesc1  = [];
       var chapterNo  = [];
       var policy  = [];
       var chapterDesc = [];
			 var policyConditions = [];
			 var sectionNo = [];

			 //
			 //
       chapterNotes.push(response.data.result.chapterNotes);
       policyLink.push(response.data.result.policyLink);
       headingDesc.push(response.data.result.headingDesc);
       sectionDesc.push(response.data.result.sectionDesc);
       itemDesc2.push(response.data.result.itemDesc2);
       itemDesc1.push(response.data.result.itemDesc1);
       chapterNo.push(response.data.result.chapterNo);
       policy.push(response.data.result.policy);
       chapterDesc.push(response.data.result.chapterDesc);
			 policyConditions.push(response.data.result.policyConditions);
			 sectionNo.push(response.data.result.sectionNo);
			 console.log(policyLink)
			 //
			 //
        localStorage.hsn1 = hsn1;
        localStorage.chapterNotes = chapterNotes;
        localStorage.policyLink = policyLink;
        localStorage.headingDesc = headingDesc;
        localStorage.sectionDesc = sectionDesc;
        localStorage.itemDesc2 = itemDesc2;
        localStorage.itemDesc1 = itemDesc1;
        localStorage.chapterNo = chapterNo;
        localStorage.policy = policy;
        localStorage.chapterDesc = chapterDesc;
        localStorage.policyConditions = policyConditions;
				localStorage.sectionNo = sectionNo;

        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM38');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'HSN CODE CHECK' } }}, { safe: true, multi:true }, function(err, obj) {
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
