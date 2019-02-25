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




router.post('/index46', async (req, res, next) => {
  try {
          var userId = req.user._id;
          var tano = req.body.dettan;



          const config = {
            headers: {
              'cache-control': 'no-cache',
              'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
              'content-type': 'application/json'
            }
          };

          const data = {
            consent: 'Y',
            tan:req.body.dettan
          }


          const response = await axios.post('https://testapi.karza.in/v2/tandetailed', data, config);

          switch (response.data['status-code']) {
            case "102":
              throw APIError.Error102();
              break;
            case "103":
              throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
              break;
            case "400":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'TAN DETAILED' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error400();
              break;
            case "401":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'TAN DETAILED' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error401();
              break;
            case "402":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'TAN DETAILED' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error402();
              break;
            case "500":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'TAN DETAILED' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.InternalServerError();
              break;
            case "503":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'TAN DETAILED' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error503();
              break;
            case "504":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'TAN DETAILED' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error504();
              break;
            case "101":
            console.log(response.data)
            System.findOne({company_branch:req.user._id},function(err,system){
              system.Tan_Detailed_count = system.Tan_Detailed_count + 1;
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
                  yesterday.Tan_Detailed_count = day.Tan_Detailed_count;
                  yesterday.save(function(err,yesterday){
                    if (err) {
                        return next(err);
                    }
                  })
                day.date = wah;
                day.Tan_Detailed_count = day.Tan_Detailed_count + 1;
                day.save(function (err, day) {
                    if (err) {
                        return next(err);
                    }
                    console.log(day)
                  });
                })
              }
          });


        ao_emailId = [];
        ao_aoType = [];
        ao_buildingName = [];
        ao_areaCode = [];
        ao_rangeCode = [];
        ao_aoDescription = [];
        ao_aoNumber = [];
        entity_categoryOfDeductor = [];
        entity_name = [];
        entity_emailId1 = [];
        entity_emailId2 = [];
        entity_address = [];
        entity_statusOfTan = [];
        entity_tan = [];
        entity_pan = [];




           //  pin.push(response.data.result.pin);
           ao_emailId.push(response.data.result.ao.emailId);
           ao_aoType.push(response.data.result.ao.aoType);
           ao_buildingName.push(response.data.result.ao.buildingName);
           ao_areaCode.push(response.data.result.ao.areaCode);
           ao_rangeCode.push(response.data.result.ao.rangeCode);
           ao_aoDescription.push(response.data.result.ao.aoType);
           ao_aoNumber.push(response.data.result.ao.aoNumber);
           entity_categoryOfDeductor.push(response.data.result.entity.categoryOfDeductor);
           entity_name.push(response.data.result.entity.name);
           entity_emailId1.push(response.data.result.entity.emailId1);
           entity_emailId2.push(response.data.result.entity.emailId2);
           entity_address.push(response.data.result.entity.address);
           entity_statusOfTan.push(response.data.result.entity.statusOfTan);
           entity_tan.push(response.data.result.entity.tan);
           entity_pan.push(response.data.result.entity.pan);




           localStorage.tano = tano;
           localStorage.ao_emailId = ao_emailId;
           localStorage.ao_aoType = ao_aoType;
           localStorage.ao_buildingName = ao_buildingName;
            localStorage.ao_areaCode = ao_areaCode;
            localStorage.ao_rangeCode = ao_rangeCode;
            localStorage.ao_aoDescription = ao_aoDescription;
            localStorage.ao_aoNumber = ao_aoNumber;
            localStorage.entity_categoryOfDeductor = entity_categoryOfDeductor;
            localStorage.entity_name = entity_name;
            localStorage.entity_emailId1 = entity_emailId1;
            localStorage.entity_emailId2 = entity_emailId2;
            localStorage.entity_address = entity_address;
            localStorage.entity_statusOfTan = entity_statusOfTan;
            localStorage.entity_tan = entity_tan;
            localStorage.entity_pan =  entity_pan;



              const user = await User.findOne({
                _id: userId
              });

              const newC = await Cart.removeFormItem(user._id, 'FORM46');
              res.status(httpStatus.OK).json({})
              break;
            default:
              throw APIError.InternalServerError();
              break;
          }
          } catch (err) {
          if (lodash.isUndefined(err.status)) {
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
