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


router.post('/index24', async (req, res, next) => {
  try {
          var userId = req.user._id;
          var consumer_id = req.body.pngconsumerid;
          var bp_no = req.body.bpnum;
          var service_provider = req.body.pngservice;



          const config = {
            headers: {
              'cache-control': 'no-cache',
              'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
              'content-type': 'application/json'
            }
          };

          const data = {
            consent: 'Y',
            consumer_id:req.body.pngconsumerid,
            bp_no:req.body.bpnum,
            service_provider:req.body.pngservice
          }
          console.log(data)

          const response = await axios.post('https://testapi.karza.in/v2/png', data, config);

          switch (response.data['status-code']) {
            case "102":
              throw APIError.Error102();
              break;
            case "103":
              throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
              break;
            case "400":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PNG AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error400();
              break;
            case "401":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PNG AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error401();
              break;
            case "402":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PNG AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error402();
              break;
            case "500":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PNG AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.InternalServerError();
              break;
            case "503":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PNG AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error503();
              break;
            case "504":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PNG AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error504();
              break;
            case "101":
            console.log(response.data)
            System.findOne({company_branch:req.user._id},function(err,system){
              system.Png_Auth_count = system.Png_Auth_count + 1;
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
                  yesterday.Png_Auth_count = day.Png_Auth_count;
                  yesterday.save(function(err,yesterday){
                    if (err) {
                        return next(err);
                    }
                  })
                day.date = wah;
                day.Png_Auth_count = day.Png_Auth_count + 1;
                day.save(function (err, day) {
                    if (err) {
                        return next(err);
                    }
                    console.log(day)
                  });
                })
              }

          });


            Bill_No = [];
            Due_Date = [];
            Bill_Amount = [];
            mobile = [];
            Customer_Address = [];
            Bill_Date = [];
            Email = [];
            Customer_Name = [];



            Bill_No.push(response.data.result.Bill_No);
            Due_Date.push(response.data.result.Due_Date);
            Bill_Amount.push(response.data.result.Bill_Amount);
            mobile.push(response.data.result.mobile);
            Customer_Address.push(response.data.result.Customer_Address);
            Bill_Date.push(response.data.result.Bill_Date);
            Email.push(response.data.result.Email);
            Customer_Name.push(response.data.result.Customer_Name);
console.log(Bill_No)
          localStorage.consumer_id = consumer_id;
          localStorage.bp_no = bp_no;
          localStorage.service_provider = service_provider;
          localStorage.Bill_No = Bill_No;
          console.log(localStorage.Bill_No)
          localStorage.Due_Date = Due_Date;
          localStorage.Bill_Amount = Bill_Amount;
          localStorage.mobile = mobile;
          localStorage.Customer_Address = Customer_Address;
          localStorage.Bill_Date = Bill_Date;
          localStorage.Email = Email;
          localStorage.Customer_Name = Customer_Name;




              const user = await User.findOne({
                _id: userId
              });

              const newC = await Cart.removeFormItem(user._id, 'FORM24');
              res.status(httpStatus.OK).json({})
              break;
            default:
              throw APIError.InternalServerError();
              break;
          }
          } catch (err) {
          if (lodash.isUndefined(err.status)) {
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'PNG AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
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
