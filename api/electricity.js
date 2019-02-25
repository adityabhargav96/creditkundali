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

router.post('/index25', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var consumer_id = req.body.electcustomerid;
    var service_provider = req.body.electservice;

    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
      consumer_id: req.body.electcustomerid,
      service_provider: req.body.electservice
    }

    const response = await axios.post('https://testapi.karza.in/v2/elec', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ELECTRICITY BILL AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ELECTRICITY BILL AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
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
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ELECTRICITY BILL AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ELECTRICITY BILL AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ELECTRICITY BILL AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)


      System.findOne({company_branch:req.user._id},function(err,system){
        system.Electricity_Bill_count = system.Electricity_Bill_count + 1;
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
            yesterday.Electricity_Bill_count = day.Electricity_Bill_count;
            yesterday.save(function(err,yesterday){
              if (err) {
                  return next(err);
              }
            })
          day.date = wah;
          day.Electricity_Bill_count = day.Electricity_Bill_count + 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              console.log(day)
            });
          })
        }

    });

      var consumer_name = [];
      var consumer_num = [];
      var address = [];
      var bill_no = [];
      var bill_amount = [];
      var amount_payable = [];
      var total_amount = [];
      var bill_issue_date = [];
      var bill_due_date = [];
      var bill_date = [];
      var mobile_number = [];
      var email_address = [];
      // //
      consumer_name.push(response.data.result.consumer_name)
      consumer_num.push(response.data.result.consumer_number)
      address.push(response.data.result.address)
      bill_no.push(response.data.result.bill_no)
      bill_amount.push(response.data.result.bill_amount)
      amount_payable.push(response.data.result.amount_payable)
      total_amount.push(response.data.result.total_amount);
      bill_issue_date.push(response.data.result.bill_issue_date)
      bill_due_date.push(response.data.result.bill_due_date)
      bill_date.push(response.data.result.bill_date)
      mobile_number.push(response.data.result.mobile_number)
      email_address.push(response.data.result.email_address)
      // //
      localStorage.consumer_id = consumer_id;
      localStorage.service_provider = service_provider;
      localStorage.consumer_name = consumer_name;
      localStorage.consumer_num = consumer_num;
      localStorage.address = address;
      localStorage.bill_no = bill_no;
      localStorage.bill_amount = bill_amount;
      localStorage.amount_payable = amount_payable;
      localStorage.total_amount = total_amount;
      localStorage.bill_issue_date = bill_issue_date;
      localStorage.bill_due_date = bill_due_date;
      localStorage.bill_date = bill_date;
      localStorage.mobile_number = mobile_number;
      localStorage.email_address = email_address;
        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM25');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ELECTRICITY BILL AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
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


// router.post('/index25', function (req, res) {
// var userId = req.user._id;
// var consumer_id = req.body.electcustomerid;
// console.log(consumer_id)
// var service_provider = req.body.electservice;
// console.log(service_provider)
//
// var options = { method: 'POST',
//   url: 'https://testapi.karza.in/v2/elec',
//   headers: { 'content-type': 'application/json', 'x-karza-key': 'g3jbu5ats9C2B1KvQnwk' },
//   body:
//    {"consent":"Y","consumer_id":(req.body.electcustomerid),"service_provider":(req.body.electservice)},
//   json: true };
//
// request(options, function (error, response, body) {
//   console.log(body);
//   if (error) {
//     console.log(error);
// res.send({message:'Something is wrong'})
//   }else if(body['status-code'] == 102){
//     console.log('102 status code');
//         console.log(body);
//         res.send({message:'Wrong Input'})
//   }else if(body['status-code'] == 103){
//     console.log('103 status code');
//         console.log(body);
//         res.send({message:'Status 103'})
//   }else if(body.status == 400){
//     console.log('500 status code');
//     res.send({message:'Internal Server Error'})
//   }else if(body.status == 402){
//     console.log('503 status code');
//     res.send({message:'Service Unavailable'})
//   }else if(body.status == 504){
//     console.log('504 status code');
//     res.send({message:'Status 504'})
//   }else if(body.status == 500){
//     console.log('500 status code');
//     res.send({message:'Internal Server Error'})
//   }else if(body.status == 503){
//     console.log('503 status code');
//     res.send({message:'Service Unavailable'})
//   }else{
//     console.log(body)

//   if (error) throw new Error(error);
//  User.findOne({ '_id': userId }, function (err, user) {
//       if (err) {
//         return new Error(err);
//       }
//       var electricity = new Electricity();
//       electricity.cartowner = userId;
//       electricity.cartownerEmail = user.email;
//       electricity.input_consumer_id = consumer_id;
//       electricity.input_service_provider = service_provider;
//       electricity.consumer_name = consumer_name;
//       electricity.consumer_num = consumer_num;
//       electricity.address = address;
//       electricity.bill_no =bill_no;
//       electricity.bill_amount=bill_amount;
//       electricity.amount_payable=amount_payable;
//       electricity.total_amount=total_amount;
//       electricity.bill_issue_date=bill_issue_date;
//       electricity.bill_due_date=bill_due_date;
//       electricity.bill_date=bill_date;
//       electricity.mobile_number=mobile_number;
//       electricity.email_address=email_address;
//       electricity.save(function (err) {
//         if (err) return next(err);
//         req.flash('success', 'Successfully stored data');
//   res.status(200).send('HI');
//       });
//     })
//   }
//   });
// });
//
//
//
//
// module.exports = router;
