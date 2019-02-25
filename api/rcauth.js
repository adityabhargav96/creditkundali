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


router.post('/index41', async (req, res, next) => {
  try {
          var userId = req.user._id;
          var regNo = req.body.rcauth;



          const config = {
            headers: {
              'cache-control': 'no-cache',
              'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
              'content-type': 'application/json'
            }
          };

          const data = {
            consent: 'Y',
            reg_no: req.body.rcauth
          }
          console.log(data)

          const response = await axios.post('https://testapi.karza.in/v2/rc', data, config);

          switch (response.data['status-code']) {
            case "102":
              throw APIError.Error102();
              break;
            case "103":
              throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
              break;
            case "400":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error400();
              break;
            case "401":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error401();
              break;
            case "402":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error402();
              break;
            case "500":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.InternalServerError();
              break;
            case "503":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error503();
              break;
            case "504":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error504();
              break;
            case "101":
            console.log(response.data)
            System.findOne({company_branch:req.user._id},function(err,system){
              system.Vehicle_RC_Auth_count = system.Vehicle_RC_Auth_count + 1;
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
                  yesterday.Vehicle_RC_Auth_count = day.Vehicle_RC_Auth_count;
                  yesterday.save(function(err,yesterday){
                    if (err) {
                        return next(err);
                    }
                  })
                day.date = wah;
                day.Vehicle_RC_Auth_count = day.Vehicle_RC_Auth_count + 1;
                day.save(function (err, day) {
                    if (err) {
                        return next(err);
                    }
                    console.log(day)
                  });
                })
              }

          });


           rc_body_type_desc= [];
           rc_chasi_no= [];
           rc_color= [];
           rc_cubic_cap= [];
           rc_eng_no= [];
           rc_f_name= [];
           rc_financer= [];
           rc_fit_upto= [];
           rc_fuel_desc= [];
           rc_gvw= [];
           rc_insurance_comp= [];
           rc_insurance_policy_no= [];
           rc_insurance_upto= [];
           rc_maker_desc= [];
           rc_maker_model= [];
           rc_manu_month_yr= [];
           rc_mobile_no= [];
           rc_no_cyl= [];
           rc_norms_desc= [];
           rc_owner_name= [];
           rc_owner_sr= [];
           rc_permanent_address= [];
           rc_present_address= [];
           rc_registered_at= [];
           rc_regn_dt= [];
           rc_regn_no= [];
           rc_seat_cap= [];
           rc_sleeper_cap= [];
           rc_stand_cap= [];
           rc_status_as_on= [];
           rc_tax_upto= [];
           rc_unld_wt= [];
           rc_vch_catg= [];
           rc_vh_class_desc= [];
           rc_wheelbase= [];




           rc_body_type_desc.push(response.data.result.rc_body_type_desc);
           rc_chasi_no.push(response.data.result.rc_chasi_no);
           rc_color.push(response.data.result.rc_color);
           rc_cubic_cap.push(response.data.result.rc_cubic_cap);
           rc_eng_no.push(response.data.result.rc_eng_no);
           rc_f_name.push(response.data.result.rc_f_name);
           rc_financer.push(response.data.result.rc_financer);
           rc_fit_upto.push(response.data.result.rc_fit_upto);
           rc_fuel_desc.push(response.data.result.rc_fuel_desc);
           rc_gvw.push(response.data.result.rc_gvw);
           rc_insurance_comp.push(response.data.result.rc_insurance_comp);
           rc_insurance_policy_no.push(response.data.result.rc_insurance_policy_no);
           rc_insurance_upto.push(response.data.result.rc_insurance_upto);
           rc_maker_desc.push(response.data.result.rc_maker_desc);
           rc_maker_model.push(response.data.result.rc_maker_model);
           rc_manu_month_yr.push(response.data.result.rc_manu_month_yr);
           rc_mobile_no.push(response.data.result.rc_mobile_no);
           rc_no_cyl.push(response.data.result.rc_no_cyl);
           rc_norms_desc.push(response.data.result.rc_norms_desc);
           rc_owner_name.push(response.data.result.rc_owner_name);
           rc_owner_sr.push(response.data.result.rc_owner_sr);
           rc_permanent_address.push(response.data.result.rc_permanent_address);
           rc_present_address.push(response.data.result.rc_present_address);
           rc_registered_at.push(response.data.result.rc_registered_at);
           rc_regn_dt.push(response.data.result.rc_regn_dt);
           rc_regn_no.push(response.data.result.rc_regn_no);
           rc_seat_cap.push(response.data.result.rc_seat_cap);
           rc_sleeper_cap.push(response.data.result.rc_sleeper_cap);
           rc_stand_cap.push(response.data.result.pin);
           rc_status_as_on.push(response.data.result.rc_status_as_on);
           rc_tax_upto.push(response.data.result.rc_tax_upto);
           rc_unld_wt.push(response.data.result.rc_unld_wt);
           rc_vch_catg.push(response.data.result.rc_vch_catg);
           rc_vh_class_desc.push(response.data.result.rc_vh_class_desc);
           rc_wheelbase.push(response.data.result.rc_wheelbase);


          localStorage.regNo = regNo;

            localStorage.rc_body_type_desc=rc_body_type_desc;
           localStorage.rc_chasi_no=rc_chasi_no;
           localStorage.rc_color=rc_color;
           localStorage.rc_cubic_cap=rc_cubic_cap;
           localStorage.rc_eng_no=rc_eng_no;
           localStorage.rc_f_name=rc_f_name;
           localStorage.rc_financer=rc_financer;
           localStorage.rc_fit_upto=rc_fit_upto;
           localStorage.rc_fuel_desc=rc_fuel_desc;
           localStorage.rc_gvw=rc_fuel_desc;
           localStorage.rc_insurance_comp=rc_insurance_comp;
           localStorage.rc_insurance_policy_no=rc_insurance_policy_no;
           localStorage.rc_insurance_upto=rc_insurance_upto;
           localStorage.rc_maker_desc=rc_maker_desc;
           localStorage.rc_maker_model=rc_maker_model;
           localStorage.rc_manu_month_yr=rc_manu_month_yr;
           localStorage.rc_mobile_no=rc_mobile_no;
           localStorage.rc_no_cyl=rc_no_cyl;
           localStorage.rc_norms_desc=rc_norms_desc;
           localStorage.rc_owner_name=rc_owner_name;
           localStorage.rc_owner_sr=rc_owner_sr;
           localStorage.rc_permanent_address=rc_permanent_address;
           localStorage.rc_present_address=rc_present_address;
           localStorage.rc_registered_at=rc_registered_at;
           localStorage.rc_regn_dt=rc_regn_dt;
           localStorage.rc_regn_no=rc_regn_no;
           localStorage.rc_seat_cap=rc_seat_cap;
           localStorage.rc_sleeper_cap=rc_sleeper_cap;
           localStorage.rc_stand_cap=rc_stand_cap;
           localStorage.rc_status_as_on=rc_status_as_on;
           localStorage.rc_tax_upto=rc_tax_upto;
           localStorage.rc_unld_wt=rc_unld_wt;
           localStorage.rc_vch_catg=rc_vch_catg;
           localStorage.rc_vh_class_desc=rc_vh_class_desc;
           localStorage.rc_wheelbase=rc_wheelbase;



              const user = await User.findOne({
                _id: userId
              });

              const newC = await Cart.removeFormItem(user._id, 'FORM41');
              res.status(httpStatus.OK).json({})
              break;
            default:
              throw APIError.InternalServerError();
              break;
          }
          } catch (err) {
          if (lodash.isUndefined(err.status)) {
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VEHICLE RC AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
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
