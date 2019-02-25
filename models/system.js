var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SystemSchema = new Schema({
  company_headquarter: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  company_branch:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  Pan_count: {
    type: Number,
    default: 0
  },
  Adhaar_count: {
    type: Number,
    default: 0
  },
  Driver_count: {
    type: Number,
    default: 0
  },
  voter_count: {
    type: Number,
    default: 0
  },
  Nrega_count: {
    type: Number,
    default: 0
  },
  Passport_count: {
    type: Number,
    default: 0
  },
  Tan_Auth_count: {
    type: Number,
    default: 0
  },
  Tan_Detailed_count: {
    type: Number,
    default: 0
  },
  MCA_Signatories_count: {
    type: Number,
    default: 0
  },
  Company_SearchByName_count: {
    type: Number,
    default: 0
  },

  Import_Export_Code_count: {
    type: Number,
    default: 0
  },
  Import_Export_Code_Detailed_Profile_count: {
    type: Number,
    default: 0
  },
  Cin_count: {
    type: Number,
    default: 0
  },
  Company_LLP_Identification_count: {
    type: Number,
    default: 0
  },
  Udyog_Adhaar_count: {
    type: Number,
    default: 0
  },
  Gst_Identification_count: {
    type: Number,
    default: 0
  },
  Gst_Authentication_count: {
    type: Number,
    default: 0
  },
  Shop_and_Establishment_count: {
    type: Number,
    default: 0
  },
  Fssai_license_count: {
    type: Number,
    default: 0
  },
  Fda_License_count: {
    type: Number,
    default: 0
  },
  Ca_Membership_Auth_count: {
    type: Number,
    default: 0
  },
  Icsi_membership_count: {
    type: Number,
    default: 0
  },
  Icwai_membership_Auth_count: {
    type: Number,
    default: 0
  },
  Icwai_firm_count: {
    type: Number,
    default: 0
  },
  Mci_Membership_count: {
    type: Number,
    default: 0
  },
  Png_Auth_count: {
    type: Number,
    default: 0
  },
  Electricity_Bill_count: {
    type: Number,
    default: 0
  },
  Telephone_count: {
    type: Number,
    default: 0
  },
  Lpg_Id_count: {
    type: Number,
    default: 0
  },
  Epf_Auth_count: {
    type: Number,
    default: 0
  },
  Epf_Uan_Lookup_count: {
    type: Number,
    default: 0
  },
  Employer_Lookup_count: {
    type: Number,
    default: 0
  },
  Esicid_count: {
    type: Number,
    default: 0
  },
  Form_16_Auth_count: {
    type: Number,
    default: 0
  },
  Form_16_quarterly_count: {
    type: Number,
    default: 0
  },
  Itr_Auth_count: {
    type: Number,
    default: 0
  },
  Email_Auth_count: {
    type: Number,
    default: 0
  },
  Name_Similarity_count: {
    type: Number,
    default: 0
  },
  Ifsc_Code_Check_count: {
    type: Number,
    default: 0
  },
  Bank_account_verification_count: {
    type: Number,
    default: 0
  },
  Hsn_Code_Check_count: {
    type: Number,
    default: 0
  },
  Web_Domain_Auth_count: {
    type: Number,
    default: 0
  },
  Vehicle_RC_Auth_count: {
    type: Number,
    default: 0
  },
  Vehicle_RC_Search_count: {
    type: Number,
    default: 0
  },

});


module.exports = mongoose.model('System', SystemSchema);
