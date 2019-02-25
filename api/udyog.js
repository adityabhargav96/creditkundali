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


router.post('/index14', async (req, res, next) => {
  try {
          var userId = req.user._id;
          var uanno = req.body.udyoguan;
          var adhaarno = req.body.udyogadhaar;



          const config = {
            headers: {
              'cache-control': 'no-cache',
              'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
              'content-type': 'application/json'
            }
          };

          const data = {
            consent: 'Y',
            aadhar:req.body.udyogadhaar,
            uan:req.body.udyoguan
          }
          console.log(data)

          const response = await axios.post('https://testapi.karza.in/v2/uam', data, config);

          switch (response.data['status-code']) {
            case "102":
              throw APIError.Error102();
              break;
            case "103":
              throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
              break;
            case "400":
             Cart.update({owner:userId},{ "$pull": { "items": { "title": 'UDYOG ADHAAR' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error400();
              break;
            case "401":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'UDYOG ADHAAR' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error401();
              break;
            case "402":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'UDYOG ADHAAR' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error402();
              break;
            case "500":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'UDYOG ADHAAR' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.InternalServerError();
              break;
            case "503":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'UDYOG ADHAAR' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error503();
              break;
            case "504":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'UDYOG ADHAAR' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error504();
              break;
            case "101":
            console.log(response.data)
            System.findOne({company_branch:req.user._id},function(err,system){
              system.Udyog_Adhaar_count = system.Udyog_Adhaar_count + 1;
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
                  yesterday.Udyog_Adhaar_count = day.Udyog_Adhaar_count;
                  yesterday.save(function(err,yesterday){
                    if (err) {
                        return next(err);
                    }
                  })
                day.date = wah;
                day.Udyog_Adhaar_count = day.Udyog_Adhaar_count + 1;
                day.save(function (err, day) {
                    if (err) {
                        return next(err);
                    }
                    console.log(day)
                  });
                })
              }

          })

           pin = [];
           DateOFCommencement = [];
           aadhar = [];
           district = [];
           DistrictIndustryCentre = [];
           NameofEnterPrise = [];
           NumberofEmp = [];
           state = [];
           OwnerName = [];
           MajorActivity = [];
           email = [];
           pan = [];
           ifsc = [];
           EntType = [];
           address = [];
           social_category = [];
           AccountNumber = [];
           type_of_org = [];
           gender = [];
           mobile = [];
           Investment = [];
           NIC_Digit_Code = [];




            pin.push(response.data.result.pin);
           DateOFCommencement.push(response.data.result.DateOFCommencement);
           aadhar.push(response.data.result.aadhar);
           district.push(response.data.result.district);
           DistrictIndustryCentre.push(response.data.result.DistrictIndustryCentre);
           NameofEnterPrise.push(response.data.result.NameofEnterPrise);
           NumberofEmp.push(response.data.result.NumberofEmp);
           state.push(response.data.result.state);
           OwnerName.push(response.data.result.OwnerName);
           MajorActivity.push(response.data.result.MajorActivity);
           email.push(response.data.result.email);
           pan.push(response.data.result.pan);
           ifsc.push(response.data.result.ifsc);
           EntType.push(response.data.result.EntType);
           address.push(response.data.result.address);
           social_category.push(response.data.result.social_category);
           AccountNumber.push(response.data.result.AccountNumber);
           type_of_org.push(response.data.result.type_of_org);
           gender.push(response.data.result.gender);
           mobile.push(response.data.result.mobile);
           Investment.push(response.data.result.Investment);
           NIC_Digit_Code.push(response.data.result.NIC_Digit_Code);



            localStorage.uanno = uanno;
            localStorage.adhaarno = adhaarno;
            localStorage.pin = pin;
           localStorage.DateOFCommencement = DateOFCommencement;
           localStorage.aadhar = aadhar;
           localStorage.district = district;
           localStorage.DistrictIndustryCentre = DistrictIndustryCentre;
           localStorage.NameofEnterPrise= NameofEnterPrise;
           localStorage.NumberofEmp = NumberofEmp;
           localStorage.state = state;
           localStorage.OwnerName = OwnerName;
           localStorage.MajorActivity = MajorActivity;
           localStorage.email = email;
           localStorage.pan = pan;
           localStorage.ifsc = ifsc;
           localStorage.EntType = EntType;
           localStorage.address = address;
           localStorage.social_category = social_category;
           localStorage.AccountNumber = AccountNumber;
           localStorage.type_of_org = type_of_org;
           localStorage.gender = gender;
           localStorage.mobile = mobile;
           localStorage.Investment = Investment;
           localStorage.NIC_Digit_Code = NIC_Digit_Code;



              const user = await User.findOne({
                _id: userId
              });

              const newC = await Cart.removeFormItem(user._id, 'FORM14');
              res.status(httpStatus.OK).json({})
              break;
            default:
              throw APIError.InternalServerError();
              break;
          }
          } catch (err) {
          if (lodash.isUndefined(err.status)) {
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'UDYOG ADHAAR' } }}, { safe: true, multi:true }, function(err, obj) {
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
