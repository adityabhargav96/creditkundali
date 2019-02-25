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

router.post('/index27', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var lpg_id = req.body.lpgid;


    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
      lpg_id:req.body.lpgid
    }

    const response = await axios.post('https://testapi.karza.in/v2/lpg', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
        throw APIError.Error401();
        break;
      case "402":
        throw APIError.Error402();
        break;
      case "500":
        throw APIError.InternalServerError();
        break;
      case "503":
        throw APIError.Error503();
        break;
      case "504":
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)


      // System.findOne({company_branch:req.user._id},function(err,system){
      //   system.pan_count = system.pan_count + 1;
      //   system.save(function (err, cart) {
      //       if (err) {
      //           return next(err);
      //       }
      //     });
      // })



    //    var Whether_Listed_or_not = [];
    //    var Company_Category = [];
    //    var Registered_Address = [];
    //    var ROC_Code = [];
    //    var Company_SubCategory = [];
    //    var Email_Id = [];
    //    var Suspended_at_stock_exchange = [];
    //    var Date_of_Balance_Sheet = [];
    //    var cin = [];
    //    var alternative_address = [];
    //    var Date_of_last_AGM = [];
    //    var Class_of_Company = [];
    //    var Company_Name = [];
    //    var Number_of_Members = [];
    //    var Registration_Number = [];
    //    var Date_of_Incorporation = [];
    //    var Paid_up_Capital = [];
    //    var Authorised_Capital = [];
    //
    //      Whether_Listed_or_not.push(response.data.result.Whether_Listed_or_not);
    //      Company_Category.push(response.data.result.Company_Category);
    //      Registered_Address.push(response.data.result.Registered_Address);
    //      ROC_Code.push(response.data.result.ROC_Code);
    //      Company_SubCategory.push(response.data.result.Company_SubCategory);
    //      Email_Id.push(response.data.result.Email_Id);
    //      Suspended_at_stock_exchange.push(response.data.result.Suspended_at_stock_exchange);
    //      Date_of_Balance_Sheet.push(response.data.result.Date_of_Balance_Sheet);
    //      cin.push(response.data.result.cin);
    //      alternative_address.push(response.data.result.alternative_address);
    //      Date_of_last_AGM.push(response.data.result.Date_of_last_AGM);
    //      Class_of_Company.push(response.data.result.Class_of_Company);
    //      Company_Name.push(response.data.result.Company_Name);
    //      Number_of_Members.push(response.data.result.Number_of_Members);
    //      Registration_Number.push(response.data.result.Registration_Number);
    //      Date_of_Incorporation.push(response.data.result.Date_of_Incorporation);
    //      Paid_up_Capital.push(response.data.result['Paid_up_Capital(Rs)']);
    //      Authorised_Capital.push(response.data.result['Authorised_Capital(Rs)']);
    // //
    //  //
    //  //
    //     localStorage.cinno_llpin = cinno;
    //     localStorage.Whether_Listed_or_not_llpin = Whether_Listed_or_not;
    //     localStorage.Company_Category_llpin = Company_Category;
    //     localStorage.Registered_Address_llpin = Registered_Address;
    //     localStorage.ROC_Code_llpin = ROC_Code;
    //     localStorage.Company_SubCategory_llpin = Company_SubCategory;
    //     localStorage.Email_Id_llpin = Email_Id;
    //     localStorage.Suspended_at_stock_exchange_llpin = Suspended_at_stock_exchange;
    //     localStorage.Date_of_Balance_Sheet_llpin = Date_of_Balance_Sheet;
    //     localStorage.cin_llpin = cin;
    //     localStorage.alternative_address_llpin = alternative_address;
    //     localStorage.Date_of_last_AGM_llpin = Date_of_last_AGM;
    //     localStorage.Class_of_Company_llpin = Class_of_Company;
    //     localStorage.Company_Name_llpin = Company_Name;
    //     localStorage.Number_of_Members_llpin = Number_of_Members;
    //     localStorage.Registration_Number_llpin = Registration_Number;
    //     localStorage.Date_of_Incorporation_llpin = Date_of_Incorporation;
    //     localStorage.Paid_up_Capital_llpin = Paid_up_Capital;
    //     localStorage.Authorised_Capital_llpin = Authorised_Capital;
    //  //
    //  //

        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM27');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
      const apiError = new APIError(err.message, httpStatus.INTERNAL_SERVER_ERROR, true);
      return next(apiError);
    }
    return next(err);
  }
});

router.use((err, req, res, next) =>
  res.status(err.status).json({
    status: err.status,
    name: err.name === 'APIError' ? "API_ERROR" : "SERVER_ERROR",
    process: err.isPublic ? err.isPublic : true,
    message: err.message ? err.message : httpStatus[err.status],
  })
);

module.exports = router;
// router.post('/index27', function (req, res) {
// var userId = req.user._id;
// var lpg_id = req.body.lpg_id;
//
// var options = { method: 'POST',
//   url: 'https://testapi.karza.in/v2/lpg',
//   headers: { 'content-type': 'application/json', 'x-karza-key': 'g3jbu5ats9C2B1KvQnwk' },
//   body:
//    {"consent":"Y","lpg_id":(req.body.lpgid)},
//   json: true };
//
// request(options, function (error, response, body) {
//   console.log(body);
//   if (error) {
//     console.log(error);
//   res.send({message:'Something is wrong'})
//   }else if(body['status-code'] == 102){
//     console.log('102 status code');
//         console.log(body);
//         res.send({message:'Wrong Input'})
//   }else if(body['status-code'] == 103){
//     console.log('103 status code');
//         console.log(body);
//         res.send({message:'Status 103'})
//   }else if(body.status == 504){
//     console.log('504 status code');
//     res.send({message:'Status 504'})
//   }else if(body.status == 400){
//     console.log('500 status code');
//     res.send({message:'Internal Server Error'})
//   }else if(body.status == 402){
//     console.log('503 status code');
//     res.send({message:'Service Unavailable'})
//   }else if(body.status == 500){
//     console.log('500 status code');
//     res.send({message:'Internal Server Error'})
//   }else if(body.status == 503){
//     console.log('503 status code');
//     res.send({message:'Service Unavailable'})
//   }else{
//     console.log(body)
// 	var Consumername = body.result.Consumername;
// 	var ConsumerAddress = body.result.ConsumerAddress;
// 	var ConsumerContact = body.result.ConsumerContact;
// 	var ConsumerEmail = body.result.ConsumerEmail;
// 	var AadhaarNo = body.result.AadhaarNo;
// 	var status = body.result.status;
// 	var DistributorCode= body.result.DistributorCode;
// 	var DistributorName = body.result.DistributorName;
// 	var DistributorAddress= body.result.DistributorAddress;
// 	var ConsumerNo = body.result.ConsumerNo;
// 	var BankAccountNo = body.result.BankAccountNo;
// 	var BankName = body.result.BankName;
// 	var IFSCCode = body.result.IFSCCode;
// 	var city = body.result.city;
// 	var pin = body.result.pin;
// 	var GivenUpSubsidy = body.result.GivenUpSubsidy;
// 	var SubsidizedRefillConsumed = body.result.SubsidizedRefillConsumed;
// 	var ApproximateSubsidyAvailed = body.result.ApproximateSubsidyAvailed;
// 	var LastBookingDate = body.result.LastBookingDate;
// 	var TotalRefillConsumed = body.result.TotalRefillConsumed;
// 	User.findOne({ '_id': userId }, function (err, user) {
//       if (err) {
//         return new Error(err);
//       }
//       var lpgid = new Lpgid();
//       lpgid.cartowner = userId;
//       lpgid.cartownerEmail = user.email;
//       lpgid. input_lpg_id =  lpg_id;
//       lpgid.Consumername = Consumername;
//       lpgid.ConsumerAddress = ConsumerAddress;
//       lpgid.ConsumerContact = ConsumerContact;
//       lpgid.ConsumerEmail = ConsumerEmail;
//       lpgid.AadhaarNo = AadhaarNo;
//       lpgid.status= status;
//       lpgid.DistributorCode = DistributorCode;
//       lpgid.DistributorName = DistributorName;
//       lpgid.DistributorAddress = DistributorAddress;
//       lpgid.ConsumerNo = ConsumerNo;
//       lpgid.BankAccountNo = BankAccountNo;
//       lpgid.BankName =BankName;
//       lpgid.IFSCCode = IFSCCode;
//       lpgid.city =city;
//       lpgid.pin = pin;
//       lpgid.GivenUpSubsidy = GivenUpSubsidy;
//       lpgid.SubsidizedRefillConsumed = SubsidizedRefillConsumed;
//       lpgid.ApproximateSubsidyAvailed = ApproximateSubsidyAvailed;
//       lpgid.LastBookingDate = LastBookingDate;
//       lpgid.TotalRefillConsumed =TotalRefillConsumed;
//
//       lpgid.save(function (err) {
//         if (err) return next(err);
//         req.flash('success', 'Successfully stored data');
//           res.status(200).send('HI');
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
