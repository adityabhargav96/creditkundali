const axios = require('axios');
const lodash = require('lodash');
const httpStatus = require('http-status');
const router = require('express').Router();
const Cart = require('../models/cart');
const User = require('../models/user');
const System = require('../models/system');
const Day = require('../models/day');
const APIError = require('./../core/APIError');
var localStorage = require('node-localstorage');


router.post('/index23', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var mcinum = req.body.mcinum;
    var year_of_reg = req.body.year_of_reg;
    var mcimedical = req.body.mcimedical;

    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
      registration_no:req.body.mcinum,
      year_of_reg:req.body.year_of_reg,
      medical_council:req.body.mcimedical
    }

    const response = await axios.post('https://testapi.karza.in/v2/mci', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
      Cart.update({owner:userId},{ "$pull": { "items": { "title": 'MCI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'MCI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error401();
        break;
      case "402":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'MCI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error402();
        break;
      case "500":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'MCI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'MCI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'MCI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)



      System.findOne({company_branch:req.user._id},function(err,system){
        system.Mci_Membership_count = system.Mci_Membership_count + 1;
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
            yesterday.Mci_Membership_count = day.Mci_Membership_count;
            yesterday.save(function(err,yesterday){
              if (err) {
                  return next(err);
              }
            })
          day.date = wah;
          day.Mci_Membership_count = day.Mci_Membership_count + 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              console.log(day)
            });
          })
        }

    });

  var emailId = [];
  var eligbleToVote =[];
  var doctorEducationId = [];
  var doctRegistrationNo = [];
  var registrationDatePrevious = [];
  var photo = [];
  var parentName = [];
  var universityId_view = [];
  var regDate = [];
  var birthDate = [];
  var restoredStatus = [];
  var birthDate =[];
  var universityId =[];
  var college =[];
  var yearOfPassing = [];
  var addressLine1 = [];
  var salutation =[];
  var economicStatus =[];
  var monthOfPass = [];
  var otherSubject = [];
  var city = [];
  var restoredOn = [];
  var uprnNo =[];
  var middleName = [];
  var registrationNoPrevious = [];
  var trasanctionStatus = [];
  var monthandyearOfPass = [];
  var state = [];
  var yearInfo = [];
  var role = [];
  var removedOn = [];
  var catagory = [];
  var addressLine2 =[];
  var registrationNo = [];
  var officeAddress =[];
  var smcNamePrevious = [];
  var registrationDate = [];
  var addlqualuniv3 = [];
  var addlqualuniv2 = [];
  var addlqualuniv1 = [];
  var passoutCollege = [];
  var birthDateStr = [];
  var birthPlace = [];
  var addlqualyear3 = [];
  var addlqualyear1 = [];
  var smcIds = [];
  var doctorId = [];
  var stateMedicalCouncil = [];
  var removedStatus = [];
  var remarks = [];
  var nationality = [];
  var checkExistingUser = [];
  var pincode = [];
  var officeaddress = [];
  var uprnNoPrevious = [];
  var phoneNo = [];
  var gender = [];
  var firstName = [];
  var stateId = [];
  var isNewDoctor = [];
  var doctorDegree = [];
  var university = [];
  var addlqualyear2 = [];
  var smcName =[];
  var smcId = [];
  var adharNo = [];
  var addlqual3 = [];
  var addlqual2 =[];
  var addlqual1 = [];
  var lastName =[];
  var catagory_view = [];
  var country = [];
  var bloodGroup = [];
  var country = [];
  var homeAddress = [];
  var collegeId = [];
  var address = [];
  var regnNo =[];

  emailId.push(response.data.result.emailId);
  eligbleToVote.push(response.data.result.eligbleToVote);
  doctorEducationId.push(response.data.result.doctorEducationId);
  doctRegistrationNo.push(response.data.result.doctRegistrationNo);
  registrationDatePrevious.push(response.data.result.registrationDatePrevious);
  photo.push(response.data.result.photo);
  parentName.push(response.data.result.parentName);
  universityId_view.push(response.data.result.universityId_view);
  regDate.push(response.data.result.regDate);
  birthDate.push(response.data.result.birthDate);
  restoredStatus.push(response.data.result.restoredStatus);
  universityId.push(response.data.result.universityId);
  college.push(response.data.result.college);
  yearOfPassing.push(response.data.result.yearOfPassing);
  addressLine1.push(response.data.result.addressLine1);
  salutation.push(response.data.result.salutation);
  economicStatus.push(response.data.result.economicStatus);
  monthOfPass.push(response.data.result.monthOfPass);
  otherSubject.push(response.data.result.otherSubject);
  city.push(response.data.result.city);
  restoredOn.push(response.data.result.restoredOn);
  uprnNo.push(response.data.result.uprnNo);
  middleName.push(response.data.result.middleName);
  registrationNoPrevious.push(response.data.result.registrationNoPrevious);
  trasanctionStatus.push(response.data.result.trasanctionStatus);
  monthandyearOfPass.push(response.data.result.monthandyearOfPass);
  state.push(response.data.result.state);
  yearInfo.push(response.data.result.yearInfo);
  role.push(response.data.result.role);
  removedOn.push(response.data.result.removedOn);
  catagory.push(response.data.result.catagory);
  addressLine2.push(response.data.result.addressLine2);
  registrationNo.push(response.data.result.registrationNo);
  officeAddress.push(response.data.result.officeAddress);
  smcNamePrevious.push(response.data.result.smcNamePrevious);
  registrationDate.push(response.data.result.registrationDate);
  addlqualuniv3.push(response.data.result.addlqualuniv3);
  addlqualuniv2.push(response.data.result.addlqualuniv2);
  addlqualuniv1.push(response.data.result.addlqualuniv1);
  passoutCollege.push(response.data.result.passoutCollege);
  birthDateStr.push(response.data.result.birthDateStr);
  birthPlace.push(response.data.result.birthPlace);
  addlqualyear3.push(response.data.result.addlqualyear3);
  addlqualyear1.push(response.data.result.addlqualyear1);
  smcIds.push(response.data.result.smcIds);
  doctorId.push(response.data.result.doctorId);
  stateMedicalCouncil.push(response.data.result.stateMedicalCouncil);
  removedStatus.push(response.data.result.removedStatus);
  remarks.push(response.data.result.remarks);
  nationality.push(response.data.result.nationality);
  checkExistingUser.push(response.data.result.checkExistingUser);
  pincode.push(response.data.result.pincode);
  officeaddress.push(response.data.result.officeaddress);
  uprnNoPrevious.push(response.data.result.uprnNoPrevious);
  phoneNo.push(response.data.result.phoneNo);
  gender.push(response.data.result.gender);
  firstName.push(response.data.result.firstName);
  stateId.push(response.data.result.stateId);
  isNewDoctor.push(response.data.result.isNewDoctor);
  doctorDegree.push(response.data.result.doctorDegree);
  university.push(response.data.result.university);
  addlqualyear2.push(response.data.result.addlqualyear2);
  smcName.push(response.data.result.smcName);
  smcId.push(response.data.result.smcId);
  adharNo.push(response.data.result.adharNo);
  addlqual3.push(response.data.result.addlqual3);
  addlqual2.push(response.data.result.addlqual2);
  addlqual1.push(response.data.result.addlqual1);
  lastName.push(response.data.result.lastName);
  catagory_view.push(response.data.result.catagory_view);
  country.push(response.data.result.country);
  bloodGroup.push(response.data.result.bloodGroup);
  country.push(response.data.result.country);
  homeAddress.push(response.data.result.homeAddress);
  collegeId.push(response.data.result.collegeId);
  address.push(response.data.result.address);
  regnNo.push(response.data.result.regnNo);



  localStorage.emailId =emailId;
  localStorage.eligbleToVote =eligbleToVote;
  localStorage.doctorEducationId = doctorEducationId;
  localStorage.doctRegistrationNo = doctRegistrationNo;
  localStorage.registrationDatePrevious =registrationDatePrevious;
  localStorage.photo = photo;
  localStorage.parentName = parentName;
  localStorage.universityId_view = universityId_view;
  localStorage.regDate = regDate;
  localStorage.birthDate =birthDate;
  localStorage.restoredStatus =restoredStatus;
  localStorage.birthDate =birthDate;
  localStorage.universityId =universityId;
  localStorage.college =college;
  localStorage.yearOfPassing = yearOfPassing;
  localStorage.addressLine1 = addressLine1;
  localStorage.salutation =salutation;
  localStorage.economicStatus =economicStatus;
  localStorage.monthOfPass =monthOfPass;
  localStorage.otherSubject = otherSubject;
  localStorage.city = city;
  localStorage.restoredOn = restoredOn;
  localStorage.uprnNo =uprnNo;
  localStorage.middleName =middleName;
  localStorage.registrationNoPrevious = registrationNoPrevious;
  localStorage.trasanctionStatus =trasanctionStatus;
  localStorage.monthandyearOfPass =monthandyearOfPass;
  localStorage.state =state;
  localStorage.yearInfo =yearInfo;
  localStorage.role =role;
  localStorage.removedOn = removedOn;
  localStorage.catagory =catagory;
  localStorage.addressLine2 =addressLine2;
  localStorage.registrationNo = registrationNo;
  localStorage.officeAddress =officeAddress;
  localStorage.smcNamePrevious =smcNamePrevious;
  localStorage.registrationDate = registrationDate;
  localStorage.addlqualuniv3 = addlqualuniv3;
  localStorage.addlqualuniv2 = addlqualuniv2;
  localStorage.addlqualuniv1 = addlqualuniv1;
  localStorage.passoutCollege =passoutCollege;
  localStorage.birthDateStr = birthDateStr;
  localStorage.birthPlace =birthPlace;
  localStorage.addlqualyear3 = addlqualyear3;
  localStorage.addlqualyear1 =addlqualyear1;
  localStorage.smcIds =smcIds;
  localStorage.doctorId =doctorId;
  localStorage.stateMedicalCouncil =stateMedicalCouncil;
  localStorage.removedStatus =removedStatus;
  localStorage.remarks =remarks;
  localStorage.nationality = nationality;
  localStorage.checkExistingUser = checkExistingUser;
  localStorage.pincode = pincode;
  localStorage.officeaddress =officeaddress;
  localStorage.uprnNoPrevious =uprnNoPrevious;
  localStorage.phoneNo =phoneNo;
  localStorage.gender =gender;
  localStorage.firstName =firstName;
  localStorage.stateId = stateId;
  localStorage.isNewDoctor =isNewDoctor;
  localStorage.doctorDegree = doctorDegree;
  localStorage.university = university;
  localStorage.addlqualyear2 = addlqualyear2;
  localStorage.smcName =smcName;
  localStorage.smcId =smcId;
  localStorage.adharNo =adharNo;
  localStorage.addlqual3 =addlqual3;
  localStorage.addlqual2 =addlqual2;
  localStorage.addlqual1 = addlqual1;
  localStorage.lastName =lastName;
  localStorage.catagory_view = catagory_view;
  localStorage.country =country;
  localStorage.bloodGroup =bloodGroup;
  localStorage.country =country;
  localStorage.homeAddress =homeAddress;
  localStorage.collegeId =collegeId;
  localStorage.address =address;
  localStorage.regnNo =regnNo;






        const user = await User.findOne({
          _id: userId
        });

        const newC = await Cart.removeFormItem(user._id, 'FORM23');
        res.status(httpStatus.OK).json({})
        break;
      default:
        throw APIError.InternalServerError();
        break;
    }
  } catch (err) {
    if (lodash.isUndefined(err.status)) {
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'MCI MEMBERSHIP' } }}, { safe: true, multi:true }, function(err, obj) {
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
