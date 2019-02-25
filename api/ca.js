const axios = require('axios');
const lodash = require('lodash');
const httpStatus = require('http-status');
const router = require('express').Router();
const Cart = require('../models/cart');
const User = require('../models/user');
const System = require('../models/system');
const Day = require('../models/day');
const Yesterday = require('../models/yesterday');
const APIError = require('./../core/APIError');var request = require('request');
var localStorage = require('node-localstorage');



router.post('/index20', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var canum = req.body.canum;


      const config = {
        headers: {
          'cache-control': 'no-cache',
          'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
          'content-type': 'application/json'
        }
      };


      const data = {
        consent: 'Y',
        membership_no: req.body.canum,
      }

      const response = await axios.post('https://testapi.karza.in/v2/icai', data, config);

      switch (response.data['status-code']) {
        case "102":
          throw APIError.Error102();
          break;
        case "103":
          throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
          break;
        case "400":
        Cart.update({owner:userId},{ "$pull": { "items": { "title": 'CA MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
          throw APIError.Error400();
          break;
        case "401":
        Cart.update({owner:userId},{ "$pull": { "items": { "title": 'CA MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
          throw APIError.Error401();
          break;
        case "402":
        Cart.update({owner:userId},{ "$pull": { "items": { "title": 'CA MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
          throw APIError.Error402();
          break;
        case "500":
        Cart.update({owner:userId},{ "$pull": { "items": { "title": 'CA MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
          throw APIError.InternalServerError();
          break;
        case "503":
        Cart.update({owner:userId},{ "$pull": { "items": { "title": 'CA MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
          throw APIError.Error503();
          break;
        case "504":
        Cart.update({owner:userId},{ "$pull": { "items": { "title": 'CA MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
          throw APIError.Error504();
          break;
        case "101":
        System.findOne({company_branch:req.user._id},function(err,system){
          system.Ca_Membership_Auth_count = system.Ca_Membership_Auth_count + 1;
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
          day.Udyog_Adhaar_count = 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              // console.log(day)
            });
          }else{
            Yesterday.findOne({company_branch:req.user._id},function(err,yesterday){
              yesterday.Ca_Membership_Auth_count = day.Ca_Membership_Auth_count;
              yesterday.save(function(err,yesterday){
                if (err) {
                    return next(err);
                }
              })
            day.date = wah;
            day.Ca_Membership_Auth_count = day.Ca_Membership_Auth_count + 1;
            day.save(function (err, day) {
                if (err) {
                    return next(err);
                }
                console.log(day)
              });
            })
          }

      });
        var AssociateYear = [];
        var COPStatus = [];
        var name = [];
        var gender = [];
        var FellowYear = [];
        var Qualification = [];
        var address = [];
        AssociateYear.push(response.data.result.AssociateYear);
        COPStatus.push(response.data.result.COPStatus);
        name.push(response.data.result.name);
        gender.push(response.data.result.gender);
        FellowYear.push(response.data.result.FellowYear);
        Qualification.push(response.data.result.Qualification);
        address.push(response.data.result.address);
        localStorage.canum = canum;
        localStorage.AssociateYear = AssociateYear;
        localStorage.COPStatus = COPStatus;
        localStorage.name = name;
        localStorage.gender = gender;
        localStorage.FellowYear = FellowYear;
        localStorage.Qualification = Qualification;
        localStorage.address = address;
          const user = await User.findOne({
            _id: userId
          });

            const newC = await Cart.removeFormItem(user._id, 'FORM20');
            res.status(httpStatus.OK).json({})
            break;
            default:
            throw APIError.InternalServerError();
            break;
            }
            } catch (err) {
            if (lodash.isUndefined(err.status)) {
               Cart.update({owner:userId},{ "$pull": { "items": { "title": 'CA MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
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
