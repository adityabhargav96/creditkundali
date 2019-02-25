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

router.post('/index29', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var esic_id = req.body.esic;

    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
      esic_id: req.body.esic
    }

    const response = await axios.post('https://testapi.karza.in/v2/esic', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ESICID AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
        Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ESICID AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error401();
        break;
      case "402":
        Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ESICID AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error402();
        break;
      case "500":
        Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ESICID AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
        Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ESICID AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
        Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ESICID AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)

      System.findOne({company_branch:req.user._id},function(err,system){
        system.Esicid_count = system.Esicid_count + 1;
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
            yesterday.Esicid_count = day.Esicid_count;
            yesterday.save(function(err,yesterday){
              if (err) {
                  return next(err);
              }
            })
          day.date = wah;
          day.Esicid_count = day.Esicid_count + 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              console.log(day)
            });
          })
        }

    });



       var UHID = [];
       var dob_esicid = [];
       var AdhaarStatus = [];
       var DispensaryName = [];
       var CurrentDateOfAppointment = [];
       var Nominee_Address = [];
       var PresentAddress = [];
       var DisabilityType = [];
       var AdhaarNO_esicid = [];
       var PhoneNO_esicid = [];
       var MaritialStatus = [];
       var Name_esicid = [];
       var Gender_esicid = [];
       var Contribution_Details = [];
       var Nominee_AdhaarNO_esicid = [];
       var Father_or_Husband = [];
       var RegistrationDate = [];
       var PermanentAddress = [];
       var Nominee_Name_esicid = [];
       var InsuranceNO_esicid = [];
       var FirstDateOfAppointment = [];
       var Relation_with_IP = [];
       UHID.push(response.data.result.UHID);
       dob_esicid.push(response.data.result.DOB);
       AdhaarStatus.push(response.data.result.AdhaarStatus);
       DispensaryName.push(response.data.result.DispensaryName);
       CurrentDateOfAppointment.push(response.data.result.CurrentDateOfAppointment);
       Nominee_Address.push(response.data.result.Nominee_Address);
       PresentAddress.push(response.data.result.PresentAddress);
       DisabilityType.push(response.data.result.DisabilityType);
       AdhaarNO_esicid.push(response.data.result.AdhaarNO);
       PhoneNO_esicid.push(response.data.result.PhoneNO);
       MaritialStatus.push(response.data.result.MaritialStatus);
       Name_esicid.push(response.data.result.Name);
       Gender_esicid.push(response.data.result.Gender);
       for(var j=0; j<response.data.result.Contribution_Details.length;j++){
       Contribution_Details.push(response.data.result.Contribution_Details[j]);
       }
       Nominee_AdhaarNO_esicid.push(response.data.result.Nominee_AdhaarNO);
       Father_or_Husband.push(response.data.result.Father_or_Husband);
       RegistrationDate.push(response.data.result.RegistrationDate);
       PermanentAddress.push(response.data.result.PermanentAddress);
       Nominee_Name_esicid.push(response.data.result.Nominee_Name);
       InsuranceNO_esicid.push(response.data.result.InsuranceNO);
       FirstDateOfAppointment.push(response.data.result.FirstDateOfAppointment);
       Relation_with_IP.push(response.data.result.Relation_with_IP);




        localStorage.esic_id = esic_id;
        localStorage.UHID = UHID;
        localStorage.dob_esicid = dob_esicid;
        localStorage.AdhaarStatus = AdhaarStatus;
        localStorage.DispensaryName = DispensaryName;
        localStorage.CurrentDateOfAppointment = CurrentDateOfAppointment;
        localStorage.Nominee_Address = Nominee_Address;
        localStorage.PresentAddress = PresentAddress;
        localStorage.DisabilityType = DisabilityType;
        localStorage.AdhaarNO_esicid = AdhaarNO_esicid;
        localStorage.PhoneNO_esicid = PhoneNO_esicid;
        localStorage.MaritialStatus = MaritialStatus;
        localStorage.Name_esicid = Name_esicid;
        localStorage.Gender_esicid = Gender_esicid;
        localStorage.Contribution_Details = Contribution_Details;
        localStorage.Nominee_AdhaarNO_esicid = Nominee_AdhaarNO_esicid;
        localStorage.Father_or_Husband = Father_or_Husband;
        localStorage.RegistrationDate = RegistrationDate;
        localStorage.PermanentAddress = PermanentAddress;
        localStorage.Nominee_Name_esicid = Nominee_Name_esicid;
        localStorage.InsuranceNO_esicid = InsuranceNO_esicid;
        localStorage.FirstDateOfAppointment = FirstDateOfAppointment;
        localStorage.Relation_with_IP = Relation_with_IP;
        console.log(Father_or_Husband)
        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM29');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
        Cart.update({owner:userId},{ "$pull": { "items": { "title": 'ESICID AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
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
