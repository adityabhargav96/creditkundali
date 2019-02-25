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






router.post('/index17', async (req, res, next) => {
  try {
          var userId = req.user._id;
          var registration = req.body.shopregistration;
          var areacode = req.body.shopareacode;



          const config = {
            headers: {
              'cache-control': 'no-cache',
              'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
              'content-type': 'application/json'
            }
          };

          const data = {
            consent: 'Y',
            reg_no:req.body.shopregistration,
            area_code:req.body.shopareacode
          }
          // console.log(data)

          const response = await axios.post('https://testapi.karza.in/v2/shop', data, config);

          switch (response.data['status-code']) {
            case "102":
              throw APIError.Error102();
              break;
            case "103":
              throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
              break;
            case "400":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'SHOP AND ESTABLISHMENT' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error400();
              break;
            case "401":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'SHOP AND ESTABLISHMENT' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error401();
              break;
            case "402":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'SHOP AND ESTABLISHMENT' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error402();
              break;
            case "500":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'SHOP AND ESTABLISHMENT' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.InternalServerError();
              break;
            case "503":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'SHOP AND ESTABLISHMENT' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error503();
              break;
            case "504":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'SHOP AND ESTABLISHMENT' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error504();
              break;
            case "101":
            console.log(response.data)
            System.findOne({company_branch:req.user._id},function(err,system){
              system.Shop_and_Establishment_count = system.Shop_and_Establishment_count + 1;
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
                  yesterday.Shop_and_Establishment_count = day.Shop_and_Establishment_count;
                  yesterday.save(function(err,yesterday){
                    if (err) {
                        return next(err);
                    }
                  })
                day.date = wah;
                day.Shop_and_Establishment_count = day.Shop_and_Establishment_count + 1;
                day.save(function (err, day) {
                    if (err) {
                        return next(err);
                    }
                    console.log(day)
                  });
                })
              }
          });
            category = [];
            status = [];
            owner_name = [];
            entity_name = [];
            registration_date = [];
            valid_to = [];
            contact = [];
            commence_date = [];
            total_workers = [];
            fathers_name_of_occupier = [];
            nature_of_business = [];
            address = [];
            valid_from = [];
            email = [];
            website_url = [];




            category.push(response.data.result.category);
            status.push(response.data.result.status);
            owner_name.push(response.data.result.owner_name);
            entity_name.push(response.data.result.entity_name);
            registration_date.push(response.data.result.registration_date);
            valid_to.push(response.data.result.valid_to);
            contact.push(response.data.result.contact);
            commence_date.push(response.data.result.commence_date);
            total_workers.push(response.data.result.total_workers);
            fathers_name_of_occupier.push(response.data.result.fathers_name_of_occupier);
            nature_of_business.push(response.data.result.nature_of_business);
            address.push(response.data.result.address);
            valid_from.push(response.data.result.valid_from);
            email.push(response.data.result.email);
            website_url.push(response.data.result.website_url);




                localStorage.registration = registration;
                localStorage.areacode = areacode;
                localStorage.category = category;
                localStorage.status = status;
                localStorage.owner_name = owner_name;
                localStorage.entity_name = entity_name;
                localStorage.registration_date = registration_date;
                localStorage.valid_to = valid_to;
                localStorage.contact = contact;
                localStorage.commence_date = commence_date;
                localStorage.total_workers = total_workers;
                localStorage.fathers_name_of_occupier = fathers_name_of_occupier;
                 localStorage.nature_of_business = nature_of_business;
                  localStorage.address = address;
                   localStorage.valid_from = valid_from;
                     localStorage.email = email;
                       localStorage.website_url = website_url;





              const user = await User.findOne({
                _id: userId
              });

              const newC = await Cart.removeFormItem(user._id, 'FORM17');
              res.status(httpStatus.OK).json({})
              break;
            default:
              throw APIError.InternalServerError();
              break;
          }
          } catch (err) {
          if (lodash.isUndefined(err.status)) {
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'SHOP AND ESTABLISHMENT' } }}, { safe: true, multi:true }, function(err, obj) {
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
