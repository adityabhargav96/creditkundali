var router = require('express').Router();
var User = require('../models/user');
var Form = require('../models/form');
var Product = require('../models/product');
var Cart = require('../models/cart');
var System = require('../models/system');
var Day = require('../models/day');
var Yesterday = require('../models/yesterday');
var passport = require('passport');
var passportConf = require('../config/passport');
var request = require('request');
var async = require('async');
var path = require('path');
var qs = require("querystring");
var http = require("http");
var randomstring = require("randomstring");
const httpStatus = require('http-status');
var schedule = require('node-schedule');




router.get('/master-admin-dashboard',function(req,res,next){
  if(!req.user){
    res.redirect('accounts/woah');
  } else{
  const viewData = {};
            viewData.message = req.flash('message');
            viewData.error = req.flash('error');
            User.find({BranchOwner:req.user._id},{
                _id: 1,
                email: 1,
                Branch_name:1
            },function(err,user){
              console.log(user)
              User.find({BranchOwner:req.user._id,online:'false'},{
                _id: 1,
              email: 1,
              Branch_name:1
            },function(err,oflinebranch){
              console.log(oflinebranch)
              User.find({BranchOwner:req.user._id,online:'true'},{
                _id: 1,
              email: 1,
              Branch_name:1
            },function(err,onlinebranch){
                Day.find({company_headquarter : req.user._id},function(err,day){
                  console.log(day.length);

                  var day_pan = 0;
                  var day_driver = 0;
                  var day_Adhaar = 0;
                  var day_voter = 0;
                  var day_Nrega = 0;
                  var day_Passport = 0;
                  var day_Tan = 0;
                  var day_Tan_Detailed = 0;
                  var day_MCA_Signatories = 0;
                  var day_Company_SearchByName = 0;
                  var day_Import_Export_Code = 0;
                  var day_Import_Export_Code_Detailed_Profile_count = 0;
                  var day_Cin = 0;
                  var day_Company_LLP = 0;
                  var day_Udyog = 0;
                  var day_Gst_Authentication_count = 0;
                  var day_Gst_Identification = 0;
                  var day_Shop_and_Establishment_count = 0;
                  var day_Fssai_license_count = 0;
                  var day_Fda_License_count = 0;
                  var day_Ca_Membership_Auth_count = 0;
                  var day_Icsi_membership_count = 0;
                  var day_Icwai_membership_Auth_count = 0;
                  var day_Mci_Membership_count = 0;
                  var day_Png_Auth_count = 0;
                  var day_Electricity_Bill_count = 0;
                  var day_Telephone_count = 0;
                  var day_Lpg_Id_count = 0;
                  var day_Epf_Auth_count = 0;
                  var day_Epf_Uan_Lookup_count = 0;
                  var day_Employer_Lookup_count = 0;
                  var day_Esicid_count = 0;
                  var day_Form_16_Auth_count = 0;
                  var day_Form_16_quarterly_count = 0;
                  var day_Itr_Auth_count = 0;
                  var day_Email_Auth_count = 0;
                  var day_Name_Similarity_count = 0;
                  var day_Ifsc_Code_Check_count = 0;
                  var day_Bank_account_verification_count = 0;
                  var day_Hsn_Code_Check_count = 0;
                  var day_Web_Domain_Auth_count = 0;
                  var day_Vehicle_RC_Auth_count = 0;
                  var day_Vehicle_RC_Search_count = 0;


                  for (var i=0; i< day.length; i++){
                  day_pan = day_pan + day[i].Pan_count;
                  day_driver = day_driver + day[i].Driver_count;
                  day_Adhaar = day_Adhaar + day[i].Adhaar_count;
                  day_voter = day_voter + day[i].voter_count;
                  day_Nrega = day_Nrega + day[i].Nrega_count;
                  day_Passport = day_Passport + day[i].Passport_count;
                  day_Tan = day_Tan + day[i].Tan_Auth_count;
                  day_Tan_Detailed = day_Tan_Detailed + day[i].Tan_Detailed_count;
                  day_MCA_Signatories = day_MCA_Signatories + day[i].MCA_Signatories_count;
                  day_Company_SearchByName = day_Company_SearchByName + day[i].Company_SearchByName_count;
                  day_Import_Export_Code = day_Import_Export_Code + day[i].Import_Export_Code_count;
                  day_Import_Export_Code_Detailed_Profile_count = day_Import_Export_Code_Detailed_Profile_count + day[i].Import_Export_Code_Detailed_Profile_count;
                  day_Cin = day_Cin + day[i].Cin_count;
                  day_Company_LLP = day_Company_LLP + day[i].Company_LLP_Identification_count;
                  day_Udyog = day_Udyog + day[i].Udyog_Adhaar_count;
                  day_Gst_Identification = day_Gst_Identification + day[i].Gst_Identification_count;
                  day_Gst_Authentication_count = day_Gst_Authentication_count + day[i].Gst_Authentication_count;
                  day_Shop_and_Establishment_count = day_Shop_and_Establishment_count + day[i].Shop_and_Establishment_count;
                  day_Fssai_license_count = day_Fssai_license_count + day[i].Fssai_license_count;
                  day_Fda_License_count = day_Fda_License_count + day[i].Fda_License_count;
                  day_Ca_Membership_Auth_count = day_Ca_Membership_Auth_count + day[i].Ca_Membership_Auth_count;
                  day_Icsi_membership_count = day_Icsi_membership_count + day[i].Icsi_membership_count;
                  Icwai_membership_Auth_count = day_Icwai_membership_Auth_count + day[i].Icwai_membership_Auth_count;
                  day_Mci_Membership_count = day_Mci_Membership_count + day[i].Mci_Membership_count;
                  day_Png_Auth_count = day_Png_Auth_count + day[i].Png_Auth_count;
                  day_Electricity_Bill_count = day_Electricity_Bill_count + day[i].Electricity_Bill_count;
                  day_Telephone_count = day_Telephone_count + day[i].Telephone_count;
                  day_Lpg_Id_count = day_Lpg_Id_count + day[i].Lpg_Id_count;
                  day_Epf_Auth_count = day_Epf_Auth_count + day[i].Epf_Auth_count;
                  day_Epf_Uan_Lookup_count = day_Epf_Uan_Lookup_count + day[i].Epf_Uan_Lookup_count;
                  day_Employer_Lookup_count = day_Employer_Lookup_count + day[i].Employer_Lookup_count;
                  day_Esicid_count = day_Esicid_count + day[i].Esicid_count;
                  day_Form_16_Auth_count = day_Form_16_Auth_count + day[i].Form_16_Auth_count;
                  day_Form_16_quarterly_count = day_Form_16_quarterly_count + day[i].Form_16_quarterly_count;
                  day_Itr_Auth_count = day_Itr_Auth_count + day[i].Itr_Auth_count;
                  day_Email_Auth_count = day_Email_Auth_count + day[i].Email_Auth_count;
                  day_Name_Similarity_count = day_Name_Similarity_count + day[i].Name_Similarity_count;
                  day_Ifsc_Code_Check_count = day_Ifsc_Code_Check_count + day[i].Ifsc_Code_Check_count;
                  day_Bank_account_verification_count = day_Bank_account_verification_count + day[i].Bank_account_verification_count;
                  day_Hsn_Code_Check_count = day_Hsn_Code_Check_count + day[i].Hsn_Code_Check_count;
                  day_Web_Domain_Auth_count = day_Web_Domain_Auth_count + day[i].Web_Domain_Auth_count;
                  day_Vehicle_RC_Auth_count = day_Vehicle_RC_Auth_count + day[i].Vehicle_RC_Auth_count;
                  day_Vehicle_RC_Search_count = day_Vehicle_RC_Search_count + day[i].Vehicle_RC_Search_count;
}
var days_count = day_pan + day_driver + day_Adhaar + day_voter + day_Nrega + day_Passport + day_Tan + day_Tan_Detailed + day_MCA_Signatories + day_Company_SearchByName + day_Import_Export_Code + day_Import_Export_Code_Detailed_Profile_count + day_Cin + day_Company_LLP + day_Udyog + day_Gst_Identification + day_Gst_Authentication_count + day_Shop_and_Establishment_count + day_Fssai_license_count + day_Fda_License_count + day_Ca_Membership_Auth_count + day_Icsi_membership_count + day_Icwai_membership_Auth_count + day_Mci_Membership_count + day_Png_Auth_count + day_Electricity_Bill_count + day_Telephone_count + day_Lpg_Id_count + day_Epf_Auth_count + day_Epf_Uan_Lookup_count + day_Employer_Lookup_count + day_Esicid_count + day_Form_16_Auth_count + day_Form_16_quarterly_count + day_Itr_Auth_count + day_Email_Auth_count + day_Name_Similarity_count + day_Ifsc_Code_Check_count + day_Bank_account_verification_count + day_Hsn_Code_Check_count + day_Web_Domain_Auth_count + day_Vehicle_RC_Auth_count + day_Vehicle_RC_Search_count ;
console.log(days_count)


        Yesterday.find({company_headquarter : req.user._id},function(err,yesterday){
          console.log(yesterday.length);

          var pan = 0;
          var driver = 0;
          var Adhaar = 0;
          var voter = 0;
          var Nrega = 0;
          var Passport = 0;
          var Tan = 0;
          var Tan_Detailed = 0;
          var MCA_Signatories = 0;
          var Company_SearchByName = 0;
          var Import_Export_Code = 0;
          var Import_Export_Code_Detailed_Profile_count = 0;
          var Cin = 0;
          var Company_LLP = 0;
          var Udyog = 0;
          var Gst_Authentication_count = 0;
          var Gst_Identification = 0;
          var Shop_and_Establishment_count = 0;
          var Fssai_license_count = 0;
          var Fda_License_count = 0;
          var Ca_Membership_Auth_count = 0;
          var Icsi_membership_count = 0;
          var Icwai_membership_Auth_count = 0;
          var Mci_Membership_count = 0;
          var Png_Auth_count = 0;
          var Electricity_Bill_count = 0;
          var Telephone_count = 0;
          var Lpg_Id_count = 0;
          var Epf_Auth_count = 0;
          var Epf_Uan_Lookup_count = 0;
          var Employer_Lookup_count = 0;
          var Esicid_count = 0;
          var Form_16_Auth_count = 0;
          var Form_16_quarterly_count = 0;
          var Itr_Auth_count = 0;
          var Email_Auth_count = 0;
          var Name_Similarity_count = 0;
          var Ifsc_Code_Check_count = 0;
          var Bank_account_verification_count = 0;
          var Hsn_Code_Check_count = 0;
          var Web_Domain_Auth_count = 0;
          var Vehicle_RC_Auth_count = 0;
          var Vehicle_RC_Search_count = 0;


          for (var i=0; i< yesterday.length; i++){
          pan = pan + yesterday[i].Pan_count;
          driver = driver + yesterday[i].Driver_count;
          Adhaar = Adhaar + yesterday[i].Adhaar_count;
          voter = voter + yesterday[i].voter_count;
          Nrega = Nrega + yesterday[i].Nrega_count;
          Passport = Passport + yesterday[i].Passport_count;
          Tan = Tan + yesterday[i].Tan_Auth_count;
          Tan_Detailed = Tan_Detailed + yesterday[i].Tan_Detailed_count;
          MCA_Signatories = MCA_Signatories + yesterday[i].MCA_Signatories_count;
          Company_SearchByName = Company_SearchByName + yesterday[i].Company_SearchByName_count;
          Import_Export_Code = Import_Export_Code + yesterday[i].Import_Export_Code_count;
          Import_Export_Code_Detailed_Profile_count = Import_Export_Code_Detailed_Profile_count + yesterday[i].Import_Export_Code_Detailed_Profile_count;
          Cin = Cin + yesterday[i].Cin_count;
          Company_LLP = Company_LLP + yesterday[i].Company_LLP_Identification_count;
          Udyog = Udyog + yesterday[i].Udyog_Adhaar_count;
          Gst_Identification = Gst_Identification + yesterday[i].Gst_Identification_count;
          Gst_Authentication_count = Gst_Authentication_count + yesterday[i].Gst_Authentication_count;
          Shop_and_Establishment_count = Shop_and_Establishment_count + yesterday[i].Shop_and_Establishment_count;
          Fssai_license_count = Fssai_license_count + yesterday[i].Fssai_license_count;
          Fda_License_count = Fda_License_count + yesterday[i].Fda_License_count;
          Ca_Membership_Auth_count = Ca_Membership_Auth_count + yesterday[i].Ca_Membership_Auth_count;
          Icsi_membership_count = Icsi_membership_count + yesterday[i].Icsi_membership_count;
          Icwai_membership_Auth_count = Icwai_membership_Auth_count + yesterday[i].Icwai_membership_Auth_count;
          Mci_Membership_count = Mci_Membership_count + yesterday[i].Mci_Membership_count;
          Png_Auth_count = Png_Auth_count + yesterday[i].Png_Auth_count;
          Electricity_Bill_count = Electricity_Bill_count + yesterday[i].Electricity_Bill_count;
          Telephone_count = Telephone_count + yesterday[i].Telephone_count;
          Lpg_Id_count = Lpg_Id_count + yesterday[i].Lpg_Id_count;
          Epf_Auth_count = Epf_Auth_count + yesterday[i].Epf_Auth_count;
          Epf_Uan_Lookup_count = Epf_Uan_Lookup_count + yesterday[i].Epf_Uan_Lookup_count;
          Employer_Lookup_count = Employer_Lookup_count + yesterday[i].Employer_Lookup_count;
          Esicid_count = Esicid_count + yesterday[i].Esicid_count;
          Form_16_Auth_count = Form_16_Auth_count + yesterday[i].Form_16_Auth_count;
          Form_16_quarterly_count = Form_16_quarterly_count + yesterday[i].Form_16_quarterly_count;
          Itr_Auth_count = Itr_Auth_count + yesterday[i].Itr_Auth_count;
          Email_Auth_count = Email_Auth_count + yesterday[i].Email_Auth_count;
          Name_Similarity_count = Name_Similarity_count + yesterday[i].Name_Similarity_count;
          Ifsc_Code_Check_count = Ifsc_Code_Check_count + yesterday[i].Ifsc_Code_Check_count;
          Bank_account_verification_count = Bank_account_verification_count + yesterday[i].Bank_account_verification_count;
          Hsn_Code_Check_count = Hsn_Code_Check_count + yesterday[i].Hsn_Code_Check_count;
          Web_Domain_Auth_count = Web_Domain_Auth_count + yesterday[i].Web_Domain_Auth_count;
          Vehicle_RC_Auth_count = Vehicle_RC_Auth_count + yesterday[i].Vehicle_RC_Auth_count;
          Vehicle_RC_Search_count = Vehicle_RC_Search_count + yesterday[i].Vehicle_RC_Search_count;
        }
        var yesterdays_count = pan + driver + Adhaar + voter + Nrega + Passport + Tan + Tan_Detailed + MCA_Signatories + Company_SearchByName + Import_Export_Code + Import_Export_Code_Detailed_Profile_count + Cin + Company_LLP + Udyog + Gst_Identification + Gst_Authentication_count + Shop_and_Establishment_count + Fssai_license_count + Fda_License_count + Ca_Membership_Auth_count + Icsi_membership_count + Icwai_membership_Auth_count + Mci_Membership_count + Png_Auth_count + Electricity_Bill_count + Telephone_count +Lpg_Id_count + Epf_Auth_count + Epf_Uan_Lookup_count + Employer_Lookup_count + Esicid_count + Form_16_Auth_count + Form_16_quarterly_count + Itr_Auth_count + Email_Auth_count + Name_Similarity_count + Ifsc_Code_Check_count + Bank_account_verification_count + Hsn_Code_Check_count + Web_Domain_Auth_count + Vehicle_RC_Auth_count + Vehicle_RC_Search_count ;
        console.log(yesterdays_count)


        Form.find({company_headquarter : req.user._id},function(err,formsfilled){



  res.render('pages/dashboard-company',{viewData,users:user,
                                        onlinebranch:onlinebranch,
                                        oflinebranch:oflinebranch,
                                        days_count:days_count,
                                        yesterdays_count:yesterdays_count,
                                        formsfilled:formsfilled
                                      })
                                      });
                                      });
});
});
  })
   });
 }
});





router.get('/admin/get-branch-daily-report',function(req,res,next){
  var userId = req.query._id;
  console.log(userId)
          Day.findOne({company_branch:userId},{
        _id: 0,
        company_headquarter: 0,
        company_branch:0,
        __v: 0
    },function(err,systems){
            console.log(systems)
    var details =          systems.Vehicle_RC_Search_count+
    systems.Vehicle_RC_Auth_count+
    systems.Web_Domain_Auth_count+
    systems.Hsn_Code_Check_count+
    systems.Bank_account_verification_count+systems.Ifsc_Code_Check_count+systems.Name_Similarity_count+systems.Email_Auth_count+systems.Itr_Auth_count+systems.Form_16_quarterly_count+systems.Form_16_Auth_count+systems.Esicid_count+systems.Employer_Lookup_count+systems.Epf_Uan_Lookup_count+systems.Epf_Auth_count+systems.Lpg_Id_count+systems.Telephone_count+systems.Electricity_Bill_count+systems.Png_Auth_count+systems.Mci_Membership_count+systems.Icwai_firm_count+systems.Icwai_membership_Auth_count+systems.Icsi_membership_count+systems.Ca_Membership_Auth_count+ systems.Fda_License_count+systems.Fssai_license_count+systems.Shop_and_Establishment_count+systems.Gst_Authentication_count+
    systems.Gst_Identification_count+
    systems.Udyog_Adhaar_count+
    systems.Company_LLP_Identification_count+systems.Cin_count+systems.Import_Export_Code_Detailed_Profile_count+systems.Import_Export_Code_count+systems.Company_SearchByName_count+systems.MCA_Signatories_count+systems.Tan_Detailed_count+systems.Tan_Auth_count+systems.Passport_count+systems.Nrega_count+systems.voter_count+systems.Driver_count+systems.Adhaar_count+systems.Pan_count;
console.log(details)
      Yesterday.findOne({company_branch:userId},{
    _id: 0,
    company_headquarter: 0,
    company_branch:0,
    __v: 0
},function(err,yesterdays){
  console.log(yesterdays)
var yesters = yesterdays.Vehicle_RC_Search_count+
  yesterdays.Vehicle_RC_Auth_count+
  yesterdays.Web_Domain_Auth_count+
  yesterdays.Hsn_Code_Check_count+
  yesterdays.Bank_account_verification_count+yesterdays.Ifsc_Code_Check_count+yesterdays.Name_Similarity_count+yesterdays.Email_Auth_count+yesterdays.Itr_Auth_count+yesterdays.Form_16_quarterly_count+yesterdays.Form_16_Auth_count+yesterdays.Esicid_count+yesterdays.Employer_Lookup_count+yesterdays.Epf_Uan_Lookup_count+yesterdays.Epf_Auth_count+yesterdays.Lpg_Id_count+yesterdays.Telephone_count+yesterdays.Electricity_Bill_count+yesterdays.Png_Auth_count+yesterdays.Mci_Membership_count+yesterdays.Icwai_firm_count+yesterdays.Icwai_membership_Auth_count+yesterdays.Icsi_membership_count+yesterdays.Ca_Membership_Auth_count+ yesterdays.Fda_License_count+yesterdays.Fssai_license_count+yesterdays.Shop_and_Establishment_count+yesterdays.Gst_Authentication_count+
  yesterdays.Gst_Identification_count+
  yesterdays.Udyog_Adhaar_count+
  yesterdays.Company_LLP_Identification_count+yesterdays.Cin_count+yesterdays.Import_Export_Code_Detailed_Profile_count+yesterdays.Import_Export_Code_count+yesterdays.Company_SearchByName_count+yesterdays.MCA_Signatories_count+yesterdays.Tan_Detailed_count+yesterdays.Tan_Auth_count+yesterdays.Passport_count+yesterdays.Nrega_count+yesterdays.voter_count+yesterdays.Driver_count+yesterdays.Adhaar_count+yesterdays.Pan_count;
            return res.status(httpStatus.OK).send({
                result: details,
                score:yesters
              });
            });
});
});





router.get('/admin/get-users-report',function(req,res,next){

  var userId = req.query._id;
  console.log(userId)
          System.findOne({company_branch:userId},{
        _id: 0,
        company_headquarter: 0,
        company_branch:0,
        __v: 0
    },function(err,systems){
            console.log(systems)

            return res.status(httpStatus.OK).send({
                result: systems
            });
});
});


router.get('/admin/get-companies-report',function(req,res,next){
  var userId = req.query._id;
  console.log(userId)
          System.find({company_headquarter : userId},{
            _id: 0,
            company_headquarter: 0,
            company_branch:0,
            __v: 0
          },function(err,system){
            console.log(system.length)
            var pan = 0;
            var driver = 0;
            var Adhaar = 0;
            var voter = 0;
            var Nrega = 0;
            var Passport = 0;
            var Tan = 0;
            var Tan_Detailed = 0;
            var MCA_Signatories = 0;
            var Company_SearchByName = 0;
            var Import_Export_Code = 0;
            var Import_Export_Code_Detailed_Profile_count = 0;
            var Cin = 0;
            var Company_LLP = 0;
            var Udyog = 0;
            var Gst_Authentication_count = 0;
            var Gst_Identification = 0;
            var Shop_and_Establishment_count = 0;
            var Fssai_license_count = 0;
            var Fda_License_count = 0;
            var Ca_Membership_Auth_count = 0;
            var Icsi_membership_count = 0;
            var Icwai_membership_Auth_count = 0;
            var Mci_Membership_count = 0;
            var Png_Auth_count = 0;
            var Electricity_Bill_count = 0;
            var Telephone_count = 0;
            var Lpg_Id_count = 0;
            var Epf_Auth_count = 0;
            var Epf_Uan_Lookup_count = 0;
            var Employer_Lookup_count = 0;
            var Esicid_count = 0;
            var Form_16_Auth_count = 0;
            var Form_16_quarterly_count = 0;
            var Itr_Auth_count = 0;
            var Email_Auth_count = 0;
            var Name_Similarity_count = 0;
            var Ifsc_Code_Check_count = 0;
            var Bank_account_verification_count = 0;
            var Hsn_Code_Check_count = 0;
            var Web_Domain_Auth_count = 0;
            var Vehicle_RC_Auth_count = 0;
            var Vehicle_RC_Search_count = 0;


            for (var i=0; i< system.length; i++){
            pan = pan + system[i].Pan_count;
            driver = driver + system[i].Driver_count;
            Adhaar = Adhaar + system[i].Adhaar_count;
            voter = voter + system[i].voter_count;
            Nrega = Nrega + system[i].Nrega_count;
            Passport = Passport + system[i].Passport_count;
            Tan = Tan + system[i].Tan_Auth_count;
            Tan_Detailed = Tan_Detailed + system[i].Tan_Detailed_count;
            MCA_Signatories = MCA_Signatories + system[i].MCA_Signatories_count;
            Company_SearchByName = Company_SearchByName + system[i].Company_SearchByName_count;
            Import_Export_Code = Import_Export_Code + system[i].Import_Export_Code_count;
            Import_Export_Code_Detailed_Profile_count = Import_Export_Code_Detailed_Profile_count + system[i].Import_Export_Code_Detailed_Profile_count;
            Cin = Cin + system[i].Cin_count;
            Company_LLP = Company_LLP + system[i].Company_LLP_Identification_count;
            Udyog = Udyog + system[i].Udyog_Adhaar_count;
            Gst_Identification = Gst_Identification + system[i].Gst_Identification_count;
            Gst_Authentication_count = Gst_Authentication_count + system[i].Gst_Authentication_count;
            Shop_and_Establishment_count = Shop_and_Establishment_count + system[i].Shop_and_Establishment_count;
            Fssai_license_count = Fssai_license_count + system[i].Fssai_license_count;
            Fda_License_count = Fda_License_count + system[i].Fda_License_count;
            Ca_Membership_Auth_count = Ca_Membership_Auth_count + system[i].Ca_Membership_Auth_count;
            Icsi_membership_count = Icsi_membership_count + system[i].Icsi_membership_count;
            Icwai_membership_Auth_count = Icwai_membership_Auth_count + system[i].Icwai_membership_Auth_count;
            Mci_Membership_count = Mci_Membership_count + system[i].Mci_Membership_count;
            Png_Auth_count = Png_Auth_count + system[i].Png_Auth_count;
            Electricity_Bill_count = Electricity_Bill_count + system[i].Electricity_Bill_count;
            Telephone_count = Telephone_count + system[i].Telephone_count;
            Lpg_Id_count = Lpg_Id_count + system[i].Lpg_Id_count;
            Epf_Auth_count = Epf_Auth_count + system[i].Epf_Auth_count;
            Epf_Uan_Lookup_count = Epf_Uan_Lookup_count + system[i].Epf_Uan_Lookup_count;
            Employer_Lookup_count = Employer_Lookup_count + system[i].Employer_Lookup_count;
            Esicid_count = Esicid_count + system[i].Esicid_count;
            Form_16_Auth_count = Form_16_Auth_count + system[i].Form_16_Auth_count;
            Form_16_quarterly_count = Form_16_quarterly_count + system[i].Form_16_quarterly_count;
            Itr_Auth_count = Itr_Auth_count + system[i].Itr_Auth_count;
            Email_Auth_count = Email_Auth_count + system[i].Email_Auth_count;
            Name_Similarity_count = Name_Similarity_count + system[i].Name_Similarity_count;
            Ifsc_Code_Check_count = Ifsc_Code_Check_count + system[i].Ifsc_Code_Check_count;
            Bank_account_verification_count = Bank_account_verification_count + system[i].Bank_account_verification_count;
            Hsn_Code_Check_count = Hsn_Code_Check_count + system[i].Hsn_Code_Check_count;
            Web_Domain_Auth_count = Web_Domain_Auth_count + system[i].Web_Domain_Auth_count;
            Vehicle_RC_Auth_count = Vehicle_RC_Auth_count + system[i].Vehicle_RC_Auth_count;
            Vehicle_RC_Search_count = Vehicle_RC_Search_count + system[i].Vehicle_RC_Search_count;

}
var system = {      Pan_count: pan,
                    Driver_count: driver,
                    Adhaar_count:Adhaar,
                    voter_count:voter,
                    Nrega_count:Nrega,
                    Passport_count:Passport,
                    Tan_Auth_count:Tan,
                    Tan_Detailed_count:Tan_Detailed,
                    MCA_Signatories_count:MCA_Signatories,
                    Company_SearchByName:Company_SearchByName,
                    Import_Export_Code_count:Import_Export_Code,
                    Import_Export_Code_Detailed_Profile_count:Import_Export_Code_Detailed_Profile_count,
                    Cin:Cin,
                    Company_LLP:Company_LLP,
                    Udyog:Udyog,
                    Gst_Identification:Gst_Identification,
                    Gst_Authentication_count:Gst_Authentication_count,
                    Shop_and_Establishment_count:Shop_and_Establishment_count,
                    Fssai_license_count:Fssai_license_count,
                    Fda_License_count:Fda_License_count,
                    Ca_Membership_Auth_count:Ca_Membership_Auth_count,
                    Icsi_membership_count:Icsi_membership_count,
                    Icwai_membership_Auth_count:Icwai_membership_Auth_count,
                    Mci_Membership_count:Mci_Membership_count,
                    Png_Auth_count:Png_Auth_count,
                    Electricity_Bill_count:Electricity_Bill_count,
                    Telephone_count:Telephone_count,
                    Lpg_Id_count:Lpg_Id_count,
                    Epf_Auth_count:Epf_Auth_count,
                    Epf_Uan_Lookup_count:Epf_Uan_Lookup_count,
                    Employer_Lookup_count:Employer_Lookup_count,
                    Esicid_count:Esicid_count,
                    Form_16_Auth_count:Form_16_Auth_count,
                    Form_16_quarterly_count:Form_16_quarterly_count,
                    Itr_Auth_count:Itr_Auth_count,
                    Email_Auth_count:Email_Auth_count,
                    Name_Similarity_count:Name_Similarity_count,
                    Ifsc_Code_Check_count:Ifsc_Code_Check_count,
                    Bank_account_verification_count:Bank_account_verification_count,
                    Hsn_Code_Check_count:Hsn_Code_Check_count,
                    Web_Domain_Auth_count:Web_Domain_Auth_count,
                    Vehicle_RC_Auth_count:Vehicle_RC_Auth_count,
                    Vehicle_RC_Search_count:Vehicle_RC_Search_count
                  }


            return res.status(httpStatus.OK).send({
                result: system
            });
});
});



router.get('/super-master-admin-dashboard',function(req,res,next){
  if(!req.user){
    res.redirect('accounts/woah');
  } else{
  const viewData = {};
  const user = {};
            viewData.message = req.flash('message');
            viewData.error = req.flash('error');
            User.find({role:'master'},function(err,user){
              console.log(user.length)
  res.render('pages/dashboard-super-master',{viewData,users:user})
})
}
});


module.exports = router;
