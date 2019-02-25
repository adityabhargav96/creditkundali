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

router.post('/index5', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var jobId = req.body.jobid;


    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
      jobcardid:req.body.jobid
    }

    const response = await axios.post('https://testapi.karza.in/v2/mnrega', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'NREGA' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'NREGA' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error401();
        break;
      case "402":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'NREGA' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error402();
        break;
      case "500":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'NREGA' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'NREGA' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'NREGA' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)


      System.findOne({company_branch:req.user._id},function(err,system){
        system.Nrega_count = system.Nrega_count + 1;
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
            yesterday.Nrega_count = day.Nrega_count;
            yesterday.save(function(err,yesterday){
              if (err) {
                  return next(err);
              }
            })
          day.date = wah;
          day.Nrega_count = day.Nrega_count + 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              console.log(day)
            });
          })
        }

    });


       var familyId1 = [];
       var address = [];
       var nameOfFatherOrHusband = [];
       var voterId = [];
       var village = [];
       var bplFamilyId = [];
       var incomeDetail = [];
       var familyId = [];
       var category = [];
       var applicantDetail = [];
       var district = [];
       var nameOfHead = [];
       var photoImageUrl = [];
       var bplFamily = [];
       var jobcardno = [];
       var dateOfRegistration = [];
       var panchayat = [];
       var block = [];
    //
         familyId1.push(response.data.result.familyId1);
         address.push(response.data.result.address);
         nameOfFatherOrHusband.push(response.data.result.nameOfFatherOrHusband);
         voterId.push(response.data.result.voterId);
         village.push(response.data.result.village);
         bplFamilyId.push(response.data.result.bplFamilyId);
         for(var j=0; j<response.data.result.incomeDetail.length;j++){
         incomeDetail.push(response.data.result.incomeDetail[j]);
       }
         familyId.push(response.data.result.familyId);
         category.push(response.data.result.category);
         for(var j=0; j<response.data.result.applicantDetail.length;j++){
         applicantDetail.push(response.data.result.applicantDetail[j]);
       }
         district.push(response.data.result.district);
         nameOfHead.push(response.data.result.nameOfHead);
         photoImageUrl.push(response.data.result.photoImageUrl);
         bplFamily.push(response.data.result.bplFamily);
         jobcardno.push(response.data.result.jobcardno);
         dateOfRegistration.push(response.data.result.dateOfRegistration);
         panchayat.push(response.data.result.panchayat);
         block.push(response.data.result.block);




        localStorage.nrega_jobId = jobId;
        localStorage.familyId1_nrega = familyId1;
        localStorage.address_nrega = address;
        localStorage.nameOfFatherOrHusband_nrega = nameOfFatherOrHusband;
        localStorage.voterId_nrega = voterId;
        localStorage.village_nrega = village;
        localStorage.bplFamilyId_nrega = bplFamilyId;
        localStorage.incomeDetail_nrega = incomeDetail;
        localStorage.familyId_nrega = familyId;
        localStorage.category_nrega = category;
        localStorage.applicantDetail_nrega = applicantDetail;
        localStorage.district_nrega = district;
        localStorage.nameOfHead_nrega = nameOfHead;
        localStorage.photoImageUrl_nrega = photoImageUrl;
        localStorage.bplFamily_nrega = bplFamily;
        localStorage.jobcardno_nrega = jobcardno;
        localStorage.dateOfRegistration_nrega = dateOfRegistration;
        localStorage.panchayat_nrega = panchayat;
        localStorage.block_nrega = block;


        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM5');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'NREGA' } }}, { safe: true, multi:true }, function(err, obj) {
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


// router.post('/index5', function (req, res) {
//   var userId = req.user._id;
//   var jobId = req.body.jobid;
//
// var options = { method: 'POST',
//   url: 'https://testapi.karza.in/v2/mnrega',
//   headers: { 'content-type': 'application/json', 'x-karza-key': 'g3jbu5ats9C2B1KvQnwk' },
//   body:
//    {consent:"Y",jobcardid:(req.body.jobid)},
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
//   console.log(body);
//   var familyId1 = body.result.familyId;
//   var address = body.result.address;
//   var nameOfFatherOrHusband = body.result.nameOfFatherOrHusband;
//   var voterId = body.result.voterId;
//   var village = body.result.village;
//   var bplFamilyId = body.result.bplFamilyId;
//   var income = body.result.incomeDetail;
//   var name = body.result.applicantDetail;
//   var nameOfHead = body.result.nameOfHead;
//   var jobcardno = body.result.jobcardno;
//   var dateOfRegistration = body.result.dateOfRegistration;
//   var panchayat = body.result.panchayat;
//   var block= body.result.block;
//   if (error) throw new Error(error);
//   User.findOne({ '_id': userId }, function (err, user) {
//     if (err) {
//       return new Error(err);
//     }
//     var nrega = new Nrega();
//     nrega.cartowner = userId;
//     nrega.cartownerEmail = user.email;
//     nrega.nrega_input_job_id = jobId;
//     nrega.nrega_familyId1 = familyId1;
//     nrega.nrega_address = address;
//     nrega.nrega_nameOfFatherOrHusband = nameOfFatherOrHusband;
//     nrega.nrega_voterId = voterId;
//     nrega.nrega_village = village;
//     nrega.nrega_bplFamilyId = bplFamilyId;
//     nrega.nrega_incomeDetail = income;
//     nrega.nrega_applicantDetail = name;
//     nrega.nrega_nameOfHead = nameOfHead;
//     nrega.nrega_jobcardno = jobcardno;
//     nrega.nrega_dateOfRegistration = dateOfRegistration;
//     nrega.nrega_panchayat = panchayat;
//     nrega.nrega_block = block;
//     nrega.save(function (err) {
//       if (err) return next(err);
//       req.flash('success', 'Successfully stored data');
//       console.log(body);
//   res.status(200).send('HI');
//
//       });
//     });
//   }
//   });
// });
//
//
// module.exports = router;
