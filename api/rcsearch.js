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


router.post('/index42', async (req, res, next) => {
  try {
          var userId = req.user._id;
          var rgnNo = req.body.engine;
          var chassis = req.body.chassis;
          var state = req.body.rcsearchstate;



          const config = {
            headers: {
              'cache-control': 'no-cache',
              'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
              'content-type': 'application/json'
            }
          };

          const data = {
            consent: 'Y',
            engine_no:(req.body.engine),
            chassis_no:(req.body.chassis),
            state:(req.body.rcsearchstate)
          }
          console.log(data)

          const response = await axios.post('https://testapi.karza.in/v2/rcsearch', data, config);

          switch (response.data['status-code']) {
            case "102":
              throw APIError.Error102();
              break;
            case "103":
              throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
              break;
            case "400":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC SEARCH' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error400();
              break;
            case "401":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC SEARCH' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error401();
              break;
            case "402":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC SEARCH' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error402();
              break;
            case "500":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC SEARCH' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.InternalServerError();
              break;
            case "503":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC SEARCH' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error503();
              break;
            case "504":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC SEARCH' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error504();
              break;
            case "101":
            console.log(response.data)
            System.findOne({company_branch:req.user._id},function(err,system){
              system.Vehicle_RC_Search_count = system.Vehicle_RC_Search_count + 1;
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
                  yesterday.Vehicle_RC_Search_count = day.Vehicle_RC_Search_count;
                  yesterday.save(function(err,yesterday){
                    if (err) {
                        return next(err);
                    }
                  })
                day.date = wah;
                day.Vehicle_RC_Search_count = day.Vehicle_RC_Search_count + 1;
                day.save(function (err, day) {
                    if (err) {
                        return next(err);
                    }
                    console.log(day)
                  });
                })
              }

          });

          rc_regn_no = [];
          rc_owner_name = [];
          rc_eng_no = [];
          rc_chasi_no = [];
          rc_maker_desc = [];
          rc_maker_model = [];
          rc_regn_dt = [];
          rc_vh_class_desc = [];
         rc_color = [];
          rc_manu_month_yr = [];




           rc_regn_no.push(response.data.result.rc_regn_no);
          rc_owner_name.push(response.data.result.rc_owner_name);
          rc_eng_no.push(response.data.result.rc_eng_no);
          rc_chasi_no.push(response.data.result.rc_chasi_no);
          rc_maker_desc.push(response.data.result.rc_maker_desc);
          rc_maker_model.push(response.data.result.rc_maker_model);
          rc_regn_dt.push(response.data.result.rc_regn_dt);
          rc_vh_class_desc.push(response.data.result.rc_vh_class_desc);
         rc_color.push(response.data.result.rc_color);
          rc_manu_month_yr.push(response.data.result.rc_manu_month_yr);



           localStorage.rgnNo = rgnNo;
           localStorage.chassis =  chassis;
           localStorage.state = state;
            localStorage.rgnNo = rgnNo;
           localStorage.chassis = chassis;
            localStorage.state = state;
            localStorage.rc_regn_no = rc_regn_no;
          localStorage.rc_owner_name = rc_owner_name;
          localStorage.rc_eng_no = rc_eng_no;
          localStorage.rc_chasi_no = rc_chasi_no;
          localStorage.rc_maker_desc = rc_maker_desc;
          localStorage.rc_maker_model = rc_maker_model;
          localStorage.rc_regn_dt = rc_regn_dt;
          localStorage.rc_vh_class_desc = rc_vh_class_desc;
         localStorage.rc_color = rc_color;
          localStorage.rc_manu_month_yr = rc_manu_month_yr;


              const user = await User.findOne({
                _id: userId
              });

              const newC = await Cart.removeFormItem(user._id, 'FORM42');
              res.status(httpStatus.OK).json({})
              break;
            default:
              throw APIError.InternalServerError();
              break;
          }
          } catch (err) {
          if (lodash.isUndefined(err.status)) {
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC SEARCH' } }}, { safe: true, multi:true }, function(err, obj) {
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
