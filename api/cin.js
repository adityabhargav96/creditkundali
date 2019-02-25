const axios = require('axios');
const lodash = require('lodash');
const httpStatus = require('http-status');
const router = require('express').Router();
const Cart = require('../models/cart');
const User = require('../models/user');
const Day = require('../models/day');
const System = require('../models/system');
const Yesterday = require('../models/yesterday');
const APIError = require('./../core/APIError');
var localStorage = require('node-localstorage');



router.post('/index12', async (req, res, next) => {
  try {
          var userId = req.user._id;
          var company = req.body.companyname;



          const config = {
            headers: {
              'cache-control': 'no-cache',
              'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
              'content-type': 'application/json'
            }
          };

          const data = {
            consent: 'Y',
            company_name: req.body.companyname
          }

          const response = await axios.post('https://testapi.karza.in/v2/cinlookup', data, config);

          switch (response.data['status-code']) {
            case "102":
              throw APIError.Error102();
              break;
            case "103":
              throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
              break;
            case "400":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY CIN' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error400();
              break;
            case "401":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY CIN' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error401();
              break;
            case "402":
              throw APIError.Error402();
              break;
            case "500":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY CIN' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.InternalServerError();
              break;
            case "503":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY CIN' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error503();
              break;
            case "504":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY CIN' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error504();
              break;
            case "101":
            System.findOne({company_branch:req.user._id},function(err,system){
              system.Cin_count = system.Cin_count + 1;
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
                  yesterday.Cin_count = day.Cin_count;
                  yesterday.save(function(err,yesterday){
                    if (err) {
                        return next(err);
                    }
                  })
                day.date = wah;
                day.Cin_count = day.Cin_count + 1;
                day.save(function (err, day) {
                    if (err) {
                        return next(err);
                    }
                    console.log(day)
                  });
                })
              }

          });

            var cin = [];
            for(var j=0; j<response.data.result.length;j++){
            cin.push(response.data.result[j]);
            }
            console.log(cin)
            localStorage.company = company;
            localStorage.cin = cin;
            // console.log(localStorage.result)
              const user = await User.findOne({
                _id: userId
              });

              const newC = await Cart.removeFormItem(user._id, 'FORM12');
              res.status(httpStatus.OK).json({})
              break;
            default:
              throw APIError.InternalServerError();
              break;
          }
          } catch (err) {
          if (lodash.isUndefined(err.status)) {
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY CIN' } }}, { safe: true, multi:true }, function(err, obj) {
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





module.exports = router;
