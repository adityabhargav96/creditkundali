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


router.post('/index11', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var iec = req.body.detailiec;

    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
      iec:req.body.detailiec
    }

    const response = await axios.post('https://testapi.karza.in/v2/iecdetailed', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'IEC DETAILED PROFILE' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'IEC DETAILED PROFILE' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error401();
        break;
      case "402":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'IEC DETAILED PROFILE' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error402();
        break;
      case "500":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'IEC DETAILED PROFILE' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'IEC DETAILED PROFILE' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'IEC DETAILED PROFILE' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)



      System.findOne({company_branch:req.user._id},function(err,system){
        system.Import_Export_Code_Detailed_Profile_count = system.Import_Export_Code_Detailed_Profile_count + 1;
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
            yesterday.Import_Export_Code_Detailed_Profile_count = day.Import_Export_Code_Detailed_Profile_count;
            yesterday.save(function(err,yesterday){
              if (err) {
                  return next(err);
              }
            })
          day.date = wah;
          day.Import_Export_Code_Detailed_Profile_count = day.Import_Export_Code_Detailed_Profile_count + 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              console.log(day)
            });
          })
        }

    });



      var file_number=[];
      var bin_pan_extension=[];
      var ie_code=[];
      var iec_status=[];
      var nob=[];
      var regdetails=[];
      var nature_of_concern=[];
      var del_status=[];
      var directors=[];
      var party_name_and_address=[];
      var pan=[];
      var pan_issued_by=[];
      var date_of_establishment=[];
      var address=[];
      var iec_allotment_date=[];
      var branches=[];
      var name=[];
      var e_mail=[];
      var file_date=[];
      var phone_no=[];
      var exporter_type=[];
      var pan_issue_date=[];
      var bank_details_bank_name=[];
      var bank_details_account_type=[];
      var bank_details_account_number=[];
      var rcmc_details=[];




      file_number.push(response.data.result.file_number);
      bin_pan_extension.push(response.data.result.bin_pan_extension);
      ie_code.push(response.data.result.ie_code);
      iec_status.push(response.data.result.iec_status);
      nob.push(response.data.result.no_of_branches);

      for(var i=0; i<response.data.result.registration_details.length; i++){
        regdetails.push(response.data.result.registration_details[i]);
        }

      for(var i=0; i<response.data.result.directors.length; i++){
        directors.push(response.data.result.directors[i]);
        }

      for(var i=0; i<response.data.result.branches.length; i++){
        branches.push(response.data.result.branches[i]);
        }

      for(var i=0; i<response.data.result.rcmc_details.length; i++){
        rcmc_details.push(response.data.result.rcmc_details[i]);
        }




      nature_of_concern.push(response.data.result.nature_of_concern);
      del_status.push(response.data.result.del_status);
      party_name_and_address.push(response.data.result.party_name_and_address);
      pan.push(response.data.result.pan);
      pan_issued_by.push(response.data.result.pan_issued_by);
      date_of_establishment.push(response.data.result.date_of_establishment);


      address.push(response.data.result.address);
      iec_allotment_date.push(response.data.result.iec_allotment_date);
      name.push(response.data.result.name);
      e_mail.push(response.data.result.e_mail);
      file_date.push(response.data.result.file_date);
      phone_no.push(response.data.result.phone_no);

      exporter_type.push(response.data.result.exporter_type);
      pan_issue_date.push(response.data.result.pan_issue_date);

      bank_details_bank_name.push(response.data.result.bank_name);
      bank_details_account_type.push(response.data.result.account_type);
      bank_details_account_number.push(response.data.result.account_number);


      localStorage.file_number=file_number;
      localStorage.bin_pan_extension=bin_pan_extension;
      localStorage.ie_code=ie_code;
      localStorage.iec_status=iec_status;
      localStorage.nob=nob;
      localStorage.regdetails=regdetails;
      localStorage.nature_of_concern=nature_of_concern;
      localStorage.del_status=del_status;
      localStorage.directors=directors;
      localStorage.party_name_and_address=party_name_and_address;
      localStorage.pan=pan;
      localStorage.pan_issued_by=pan_issued_by;
      localStorage.date_of_establishment=date_of_establishment;
      localStorage.address=address;
      localStorage.iec_allotment_date=iec_allotment_date;
      localStorage.branches=branches;
      localStorage.name=name;
      localStorage.e_mail=e_mail;
      localStorage.file_date=file_date;
      localStorage.phone_no=phone_no;
      localStorage.exporter_type=exporter_type;
      localStorage.pan_issue_date=pan_issue_date;
      localStorage.bank_details_bank_name=bank_details_bank_name;
      localStorage.bank_details_account_type=bank_details_account_type;
      localStorage.bank_details_account_number=bank_details_account_number;
      localStorage.rcmc_details=rcmc_details;










        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM11');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'IEC DETAILED PROFILE' } }}, { safe: true, multi:true }, function(err, obj) {
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
