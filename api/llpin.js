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

router.post('/index13', async (req, res, next) => {
  try {
    var userId = req.user._id;
  var cinno = req.body.llpcin;


    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
        cin:req.body.llpcin
    }

    const response = await axios.post('https://testapi.karza.in/v2/mca', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY AND LLP IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY AND LLP IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error401();
        break;
      case "402":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY AND LLP IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error402();
        break;
      case "500":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY AND LLP IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY AND LLP IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY AND LLP IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)


      System.findOne({company_branch:req.user._id},function(err,system){
        system.Company_LLP_Identification_count = system.Company_LLP_Identification_count + 1;
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
            yesterday.Company_LLP_Identification_count = day.Company_LLP_Identification_count;
            yesterday.save(function(err,yesterday){
              if (err) {
                  return next(err);
              }
            })
          day.date = wah;
          day.Company_LLP_Identification_count = day.Company_LLP_Identification_count + 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              console.log(day)
            });
          })
        }

    });



       var Whether_Listed_or_not = [];
       var Company_Category = [];
       var Registered_Address = [];
       var ROC_Code = [];
       var Company_SubCategory = [];
       var Email_Id = [];
       var Suspended_at_stock_exchange = [];
       var Date_of_Balance_Sheet = [];
       var cin = [];
       var alternative_address = [];
       var Date_of_last_AGM = [];
       var Class_of_Company = [];
       var Company_Name = [];
       var Number_of_Members = [];
       var Registration_Number = [];
       var Date_of_Incorporation = [];
       var Paid_up_Capital = [];
       var Authorised_Capital = [];

         Whether_Listed_or_not.push(response.data.result.Whether_Listed_or_not);
         Company_Category.push(response.data.result.Company_Category);
         Registered_Address.push(response.data.result.Registered_Address);
         ROC_Code.push(response.data.result.ROC_Code);
         Company_SubCategory.push(response.data.result.Company_SubCategory);
         Email_Id.push(response.data.result.Email_Id);
         Suspended_at_stock_exchange.push(response.data.result.Suspended_at_stock_exchange);
         Date_of_Balance_Sheet.push(response.data.result.Date_of_Balance_Sheet);
         cin.push(response.data.result.cin);
         alternative_address.push(response.data.result.alternative_address);
         Date_of_last_AGM.push(response.data.result.Date_of_last_AGM);
         Class_of_Company.push(response.data.result.Class_of_Company);
         Company_Name.push(response.data.result.Company_Name);
         Number_of_Members.push(response.data.result.Number_of_Members);
         Registration_Number.push(response.data.result.Registration_Number);
         Date_of_Incorporation.push(response.data.result.Date_of_Incorporation);
         Paid_up_Capital.push(response.data.result['Paid_up_Capital(Rs)']);
         Authorised_Capital.push(response.data.result['Authorised_Capital(Rs)']);
    //
     //
     //
        localStorage.cinno_llpin = cinno;
        localStorage.Whether_Listed_or_not_llpin = Whether_Listed_or_not;
        localStorage.Company_Category_llpin = Company_Category;
        localStorage.Registered_Address_llpin = Registered_Address;
        localStorage.ROC_Code_llpin = ROC_Code;
        localStorage.Company_SubCategory_llpin = Company_SubCategory;
        localStorage.Email_Id_llpin = Email_Id;
        localStorage.Suspended_at_stock_exchange_llpin = Suspended_at_stock_exchange;
        localStorage.Date_of_Balance_Sheet_llpin = Date_of_Balance_Sheet;
        localStorage.cin_llpin = cin;
        localStorage.alternative_address_llpin = alternative_address;
        localStorage.Date_of_last_AGM_llpin = Date_of_last_AGM;
        localStorage.Class_of_Company_llpin = Class_of_Company;
        localStorage.Company_Name_llpin = Company_Name;
        localStorage.Number_of_Members_llpin = Number_of_Members;
        localStorage.Registration_Number_llpin = Registration_Number;
        localStorage.Date_of_Incorporation_llpin = Date_of_Incorporation;
        localStorage.Paid_up_Capital_llpin = Paid_up_Capital;
        localStorage.Authorised_Capital_llpin = Authorised_Capital;
     //
     //

        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM13');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'COMPANY AND LLP IDENTIFICATION' } }}, { safe: true, multi:true }, function(err, obj) {
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
