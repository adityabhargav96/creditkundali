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



router.post('/index4', async (req, res, next) => {
  try {
          var userId = req.user._id;
          var epicno = req.body.epic;



          const config = {
            headers: {
              'cache-control': 'no-cache',
              'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
              'content-type': 'application/json'
            }
          };

          const data = {
            consent: 'Y',
            epic_no: req.body.epic
          }
          console.log(data)

          const response = await axios.post('https://testapi.karza.in/v2/voter', data, config);

          switch (response.data['status-code']) {
            case "102":
              throw APIError.Error102();
              break;
            case "103":
              throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
              break;
            case "400":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VOTER IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error400();
              break;
            case "401":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VOTER IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error401();
              break;
            case "402":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VOTER IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error402();
              break;
            case "500":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VOTER IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.InternalServerError();
              break;
            case "503":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VOTER IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error503();
              break;
            case "504":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VOTER IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error504();
              break;
            case "101":
            console.log(response.data)
            System.findOne({company_branch:req.user._id},function(err,system){
              system.voter_count = system.voter_count + 1;
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
                  yesterday.voter_count = day.voter_count;
                  yesterday.save(function(err,yesterday){
                    if (err) {
                        return next(err);
                    }
                  })
                day.date = wah;
                day.voter_count = day.voter_count + 1;
                day.save(function (err, day) {
                    if (err) {
                        return next(err);
                    }
                    console.log(day)
                  });
                })
              }
          });
            var ps_lat_long = [];
            var rln_name_v1 = [];
            var rln_name_v2 = [];
            var rln_name_v3 = [];
            var part_no = [];
            var rln_type = [];
            var section_no = [];
            var id = [];
            var epic_no = [];
            var rln_name = [];
            var district = [];
            var last_update = [];
            var state = [];
            var ac_no = [];
            var house_no = [];
            var ps_name = [];
            var pc_name = [];
            var slno_inpart = [];
            var name = [];
            var part_name = [];
            var dob = [];
            var gender = [];
            var age = [];
            var ac_name = [];
            var name_v1 = [];
            var st_code = [];
            var name_v3 = [];
            var name_v2 = [];




            ps_lat_long.push(response.data.result.ps_lat_long);
            rln_name_v1.push(response.data.result.rln_name_v1);
            rln_name_v2.push(response.data.result.rln_name_v2);
            rln_name_v3.push(response.data.result.rln_name_v3);
            part_no.push(response.data.result.part_no);
            rln_type.push(response.data.result.rln_type);
            section_no.push(response.data.result.section_no);
            id.push(response.data.result.id);
            epic_no.push(response.data.result.epic_no);
            rln_name.push(response.data.result.rln_name);
            district.push(response.data.result.district);
            last_update.push(response.data.result.last_update);
            state.push(response.data.result.state);
            ac_no.push(response.data.result.ac_no);
            house_no.push(response.data.result.house_no);
            ps_name.push(response.data.result.ps_name);
            pc_name.push(response.data.result.pc_name);
            slno_inpart.push(response.data.result.slno_inpart);
            name.push(response.data.result.name);
            part_name.push(response.data.result.part_name);
            dob.push(response.data.result.dob);
            gender.push(response.data.result.gender);
            age.push(response.data.result.age);
            ac_name.push(response.data.result.ac_name);
            name_v1.push(response.data.result.name_v1);
            st_code.push(response.data.result.st_code);
            name_v3.push(response.data.result.name_v3);
            name_v2.push(response.data.result.name_v2);



            localStorage.epicno = epicno;
              localStorage.ps_lat_long = ps_lat_long;
            localStorage.rln_name_v1 = rln_name_v1;
            localStorage.rln_name_v2 = rln_name_v2;
            localStorage.rln_name_v3 = rln_name_v3 ;
            localStorage.part_no = part_no;
            localStorage.rln_type = rln_type;
            localStorage.section_no =section_no;
            localStorage.id = id ;
            localStorage.epic_no =epic_no ;
            localStorage.rln_name = rln_name ;
            localStorage.district = district;
            localStorage.last_update = last_update;
            localStorage.state = state;
            localStorage.ac_no = ac_no;
            localStorage.house_no =house_no;
            localStorage.ps_name =ps_name;
            localStorage.pc_name = pc_name;
            localStorage.slno_inpart = slno_inpart;
            localStorage.name = name;
            localStorage.part_name = part_name;
            localStorage.dob = dob;
            localStorage.gender = gender;
            localStorage.age = age;
            localStorage.ac_name = ac_name;
            localStorage.name_v1 = name_v1;
            localStorage.st_code = st_code;
            localStorage.name_v3 =name_v3;
            localStorage.name_v2 = name_v2;




              const user = await User.findOne({
                _id: userId
              });

              const newC = await Cart.removeFormItem(user._id, 'FORM4');
              res.status(httpStatus.OK).json({})
              break;
            default:
              throw APIError.InternalServerError();
              break;
          }
          } catch (err) {
          if (lodash.isUndefined(err.status)) {
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'VOTER IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
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
