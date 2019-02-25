var router = require('express').Router();
var User = require('../models/user');
var Form = require('../models/form');
var Product = require('../models/product');
var Cart = require('../models/cart');
var System = require('../models/system');
var localStorage = require('node-localstorage');
const httpStatus = require('http-status');






router.get('/views',function(req,res,next){
  if(!req.user){
    res.redirect('accounts/ies');
  } else{

  Cart
      .findOne({
          owner: req.user._id
      })
      .populate('items.item')
      .exec(function (err, foundCart) {
          if (err) {
              return next(err);
          }
        // console.log(foundCart.items[1].title)


            var first_name = localStorage.first_name;
            var last_name = localStorage.last_name;


          // Pan card
                var pan_name = (localStorage.pan_name);
                var pan_no = (localStorage.pan_no);

          // Bank account verification
                var ifsc = (localStorage.ifsc);
                var account = (localStorage.account);
                var bankTxnStatus = (localStorage.bankTxnStatus);
                var accountNumber = (localStorage.accountNumber);
                var IFSCCode = (localStorage.IFSCCode);
                var accountName = (localStorage.accountName);
                var bankResponse = (localStorage.bankResponse);

          // CA
                var canum = (localStorage.canum);
                var AssociateYear = (localStorage.AssociateYear);
                var COPStatus = (localStorage.COPStatus);
                var name = (localStorage.name);
                var gender = (localStorage.gender);
                var FellowYear = (localStorage.FellowYear);
                var Qualification = (localStorage.Qualification);
                var address = (localStorage.address);


          // cin
                var company = (localStorage.company);
                var cin = (localStorage.cin);
                // console.log(cin)



          // companysearch
                var compname = (localStorage.company);
                var mock = (localStorage.mock);
                // console.log(mock)


          // Driver
                var dl_no =  (localStorage.dl_no) ;
                var dobin =  (localStorage.dobin) ;
                var driver_issuedate = (localStorage.issuedate);
                var driverName = (localStorage.Name);
                var driver_dob_out = (localStorage.dob_out);
                var driver_blood_group = (localStorage.blood_group);
                var driver_father = (localStorage.father);
                var driver_address = (localStorage.address);
                var driver_cov = (localStorage.cov);
                var driver_validity = (localStorage.validity);
                var validiti_driver = (localStorage.validiti);



          //electricity
          var electricity_consumer_id = (localStorage.consumer_id);
          var electricity_service_provider = (localStorage.service_provider);
          var electricity_consumer_name = (localStorage.consumer_name);
          var electricity_consumer_num = (localStorage.consumer_num);
          var electricity_address = (localStorage.address);
          var electricity_bill_no = (localStorage.bill_no);
          var electricity_bill_amount = (localStorage.bill_amount);
          var electricity_amount_payable = (localStorage.amount_payable);
          var electricity_total_amount = (localStorage.total_amount);
          var electricity_bill_issue_date = (localStorage.bill_issue_date);
          var electricity_bill_due_date = (localStorage.bill_due_date);
          var electricity_bill_date = (localStorage.bill_date);
          var electricity_mobile_number = (localStorage.mobile_number);
          var electricity_email_address = (localStorage.email_address);




          //email auth
          var authemial = (localStorage.authemail);
          var meta_params = (localStorage.meta_params);
          var disposable = (localStorage.disposable);
          var webmail = (localStorage.webmail);
          var result = (localStorage.result);
          var accept_all = (localStorage.accept_all);
          var smtp_check = (localStorage.smtp_check);
          var regexp = (localStorage.regexp);
          var mx_records = (localStorage.mx_records);
          var emailyo = (localStorage.emailyo);




          //epf uan
          var uanemp = (localStorage.mobile);
          var employee = (localStorage.employee);



          //emploer LOOKUP
          var uan = (localStorage.uan);
          var lookup = (localStorage.mem);




          //esicid auth
          var esicid_id = (localStorage.esic_id);
          var UHID = (localStorage.UHID);
          var dob_esicid = (localStorage.dob_esicid);
          var AdhaarStatus = (localStorage.AdhaarStatus);
          var DispensaryName = (localStorage.DispensaryName);
          var CurrentDateOfAppointment = (localStorage.CurrentDateOfAppointment);
          var Nominee_Address = (localStorage.Nominee_Address);
          var PresentAddress = (localStorage.PresentAddress);
          var DisabilityType = (localStorage.DisabilityType);
          var AdhaarNO_esicid = (localStorage.AdhaarNO_esicid);
          var PhoneNO_esicid = (localStorage.PhoneNO_esicid);
          var MaritialStatus = (localStorage.Name_esicid);
          var Name_esicid = (localStorage.Name_esicid);
          var Gender_esicid = (localStorage.Gender_esicid);
          var Contribution_Details = (localStorage.Contribution_Details);
          var Nominee_AdhaarNO_esicid = (localStorage.Nominee_AdhaarNO_esicid);
          var Father_or_Husband = (localStorage.Father_or_Husband);
          var RegistrationDate = (localStorage.RegistrationDate);
          var PermanentAddress = (localStorage.PermanentAddress);
          var Nominee_Name_esicid = (localStorage.Nominee_Name_esicid);
          var InsuranceNO_esicid = (localStorage.InsuranceNO_esicid);
          var FirstDateOfAppointment = (localStorage.FirstDateOfAppointment);
          var Relation_with_IP = (localStorage.Relation_with_IP);
          // console.log(Relation_with_IP)



          //fda license
          var fda_esic_id = (localStorage.fda_esic_id);
          var fda_state = (localStorage.fda_state);
          var fda_store_name = (localStorage.fda_store_name);
          var fda_contact_number = (localStorage.fda_contact_number);
          var fda_address = (localStorage.fda_address);
          var fda_name = (localStorage.fda_name);
          var fda_license_detail = (localStorage.fda_license_detail);


          //from 16 auth
          var status_result = (localStorage.status_result);
          var tan_form16 = (localStorage.tan_form16);
          var pan_form16 = (localStorage.pan_form16);
          var cert_no_form16 = (localStorage.cert_no_form16);
          var amount_form16 = (localStorage.amount_form16);
          var fiscal_year_form16 = (localStorage.fiscal_year_form16);



          //form 16 quarterly
          var q_1 = (localStorage.q_1);
          var q_2  = (localStorage.q_2);
          var q_3  = (localStorage.q_3);
          var q_4  = (localStorage.q_4);
          var tanq_1 = localStorage.tanq_1;
          var panq_1 = localStorage.panq_1;
          var fqfiscalq_1 = localStorage.fqfiscalq_1;


          //fssai
          var fssai_reg=localStorage.reg;
          var fssai_status=localStorage.status;
          var fssai_lictype=localStorage.lictype;
          var fssai_licno=localStorage.licno;
          var fssai_firmname=localStorage.firmname;
          var fssai_address=localStorage.address;




          //gst auth
          var gst_gsti=localStorage.gsti;
            var gst_mbr=localStorage.mbr;
            var gst_canflag=localStorage.canflag;
            var gst_pradr_em=localStorage.pradr_em;
            var gst_pradr_adr=localStorage.pradr_adr;
            var gst_pradr_addr=localStorage.pradr_addr;
            var gst_pradr_mb=localStorage.pradr_mb;
            var gst_pradr_ntr=localStorage.pradr_ntr;
            var gst_pradr_lastupdateddate=localStorage.pradr_lastupdateddate;
            var gst_tradenam=localStorage.tradenam;
            var gst_contacted=localStorage.contacted;
            var gst_gstin=localStorage.gstin;
            var gst_nba=localStorage.nba;
            var gst_stjcd=localStorage.stjcd;
            var gst_stj=localStorage.stj;
            var gst_ppr=localStorage.ppr;
            var gst_dty=localStorage.dty;
            var gst_cmprt=localStorage.cmprt;
            var gst_lstupdt=localStorage.lstupdt;
            var gst_ctb=localStorage.ctb;
            var gst_sts=localStorage.sts;
            var gst_cxdt=localStorage.cxdt;
            var gst_adadr=localStorage.adadr;
            var gst_lgnm=localStorage.lgnm;
            var gst_ctjcd=localStorage.ctjcd;
            var gst_ctj=localStorage.ctj;
            var gst_rgdt=localStorage.rgdt;






          //gst IDENTIFICATION
          var gsti = (localStorage.gsti_gst);
          var gsti_state = (localStorage.gsti_state);
          var gst_emailId = (localStorage.gst_emailId);
          var applicationStatus  = (localStorage.applicationStatus);
          var mobNum  = (localStorage.mobNum);
          var gst_pan  = (localStorage.gst_pan);
          var gstinRefId = (localStorage.gstinRefId);
          var regType  = (localStorage.regType);
          var gstinId  = (localStorage.gstinId);
          var registrationName  = (localStorage.registrationName);
          var tinNumber = (localStorage.tinNumber);


          //hsn1
          var hsn1 = (localStorage.hsn1);
          var chapterNotes = (localStorage.chapterNotes);
          var policyLink  = (localStorage.policyLink);
          var headingDesc  = (localStorage.headingDesc);
          var sectionDesc  = (localStorage.sectionDesc);
          var itemDesc2 = (localStorage.itemDesc2);
          var itemDesc1  = (localStorage.itemDesc1);
          var chapterNo  = (localStorage.chapterNo);
          var hsn_policy  = (localStorage.policy);
          var chapterDesc = (localStorage.chapterDesc);
   			 var policyConditions = (localStorage.policyConditions);
   			 var sectionNo = (localStorage.sectionNo);
         // console.log(hsn1)


         //icsi
         var icsi = (localStorage.icsi);
         var icsino = (localStorage.icsino);
         var cpnumber = (localStorage.cpnumber);






         //icwai FIRM
         var icwaiNo = localStorage.icwaiNo;
         var approvalDate = (localStorage.approvalDate);
         var FirmType = (localStorage.FirmType);
         var FirmName = (localStorage.FirmName);
         var icwaifirm_Pin = (localStorage.icwaifirm_Pin);
         var icwaifirm_City = (localStorage.icwaifirm_City);
         var reConDate = (localStorage.reConDate);
         var icwaifirm_Region = (localStorage.icwaifirm_Region);
         var icwaifirm_ldt = (localStorage.icwaifirm_ldt);
         var icwaifirm_MemberDetails = (localStorage.icwaifirm_MemberDetails);
         var icwaifirm_deedDt = (localStorage.icwaifirm_deedDt);
         var icwaifirm_State = (localStorage.icwaifirm_State);
         var icwaifirm_Contact = (localStorage.icwaifirm_Contact);
         var icwaifirm_mobile = (localStorage.icwaifirm_mobile);
         var icwaifirm_Address = (localStorage.icwaifirm_Address);
         var icwaifirm_Dist = (localStorage.icwaifirm_Dist);
         var icwaifirm_email = (localStorage.icwaifirm_email);




         //icwai mem
         var icwaino = localStorage.icwaino;
         var icwai_mem_MemshipDt = (localStorage.icwai_mem_MemshipDt);
         var icwai_mem_Chapter = (localStorage.icwai_mem_Chapter);
         var icwai_mem_Retired = (localStorage.icwai_mem_Retired);
         var icwai_mem_dob = (localStorage.icwai_mem_dob);
         var icwai_mem_Mname = (localStorage.icwai_mem_Mname);
         var icwai_mem_ProtFirmName = (localStorage.icwai_mem_ProtFirmName);
         var icwai_mem_ValidUpDt = (localStorage.icwai_mem_ValidUpDt);
         var icwai_mem_MemCategory = (localStorage.icwai_mem_MemCategory);
         var icwai_mem_Fname = (localStorage.icwai_mem_Fname);
         var icwai_mem_gender = (localStorage.icwai_mem_gender);
         var icwai_mem_SrName = (localStorage.icwai_mem_SrName);
         var icwai_mem_EffectiveDt = (localStorage.icwai_mem_EffectiveDt);
         var icwai_mem_MemRegion = (localStorage.icwai_mem_MemRegion);
         var icwai_mem_CrtEmployer = (localStorage.icwai_mem_CrtEmployer);
         var icwai_mem_FirmEftDt = (localStorage.icwai_mem_FirmEftDt);
         var icwai_mem_CancellationDt = (localStorage.icwai_mem_CancellationDt);



         //iec auth
         var iecauth_iec=localStorage.iec;
         var iecauth_name=localStorage.name;
         var iecauth_del_status=localStorage.del_status;
         var iecauth_iecode=localStorage.iecode;
         var iecauth_address=localStorage.address;
         var iecauth_nob=localStorage.nob;
         var iecauth_iecstatus=localStorage.iecstatus;
         var iecauth_pan=localStorage.pan;






         //iec DETAILED
         var iecd_file_number=localStorage.file_number;
        var iecd_bin_pan_extension=localStorage.bin_pan_extension;
        var iedc_ie_code=localStorage.ie_code;
        var iecd_iec_status=localStorage.iec_status;
        var iecd_nob=localStorage.nob;
        var iecd_regdetails=localStorage.regdetails;
        var iecd_nature_of_concern=localStorage.nature_of_concern;
        var iecd_del_status=localStorage.del_status;
        var iecd_directors=localStorage.directors;
        var iecd_party_name_and_address=localStorage.party_name_and_address;
        var iecd_pan=localStorage.pan;
        var iecd_pan_issued_by=localStorage.pan_issued_by;
        var iecd_date_of_establishment=localStorage.date_of_establishment;
        var iecd_address=localStorage.address;
        var iecd_iec_allotment_date=localStorage.iec_allotment_date;
        var iecd_branches=localStorage.branches;
        var iecd_name=localStorage.name;
        var iecd_e_mail=localStorage.e_mail;
        var iecd_file_date=localStorage.file_date;
        var iecd_phone_no=localStorage.phone_no;
        var iecd_exporter_type=localStorage.exporter_type;
        var iecd_pan_issue_date=localStorage.pan_issue_date;
        var iecd_bank_details_bank_name=localStorage.bank_details_bank_name;
        var iecd_bank_details_account_type=localStorage.bank_details_account_type;
        var iecd_bank_details_account_number=localStorage.bank_details_account_number;
        var iecd_rmcm=localStorage.rcmc_details;





         //ifsc
         var ifsc_ifsc1 = (localStorage.ifsc_ifsc1);
         var ifsc_city = (localStorage.ifsc_city);
         var ifsc_district = (localStorage.ifsc_district);
         var ifsc_ifsc = (localStorage.ifsc_ifsc);
         var ifsc_micr = (localStorage.ifsc_micr);
         var ifsc_state = (localStorage.ifsc_state);
         var ifsc_contact = (localStorage.ifsc_contact);
         var ifsc_branch = (localStorage.ifsc_branch);
         var ifsc_address = (localStorage.ifsc_address);
         var ifsc_bank = (localStorage.ifsc_bank);




         //itr auth
         var itr_status=localStorage.itr_status;
        var itr_validity=localStorage.itr_validity;
        var itr_pan=localStorage.itr_pan;
        var itr_ack=localStorage.itr_ack;



        //mca
        var mca_result=localStorage.result;
        var mca_cin=localStorage.cin;



        //mci membership
        var mci_mcinum = localStorage.mcinum;
      var mci_year_of_reg = localStorage.year_of_reg;
      var mci_mcimedical = localStorage.mcimedical;
      var mci_emailId=localStorage.emailId;
      var mci_eligbleToVote=localStorage.eligbleToVote;
      var mci_doctorEducationId=localStorage.doctorEducationId;
      var mci_doctRegistrationNo=localStorage.doctRegistrationNo;
      var mci_registrationDatePrevious=localStorage.registrationDatePrevious;
      var mci_photo=localStorage.photo;
      var mci_parentName=localStorage.parentName;
      var mci_universityId_view=localStorage.universityId_view;
      var mci_regDate=localStorage.regDate;
      var mci_birthDate=localStorage.birthDate;
      var mci_restoredStatus=localStorage.restoredStatus;
      var mci_birthDate=localStorage.birthDate;
      var mci_universityId=localStorage.universityId;
      var mci_college=localStorage.college;
      var mci_yearOfPassing=localStorage.yearOfPassing;
      var mci_addressLine1=localStorage.addressLine1;
      var mci_salutation=localStorage.salutation;
      var mci_economicStatus=localStorage.economicStatus;
      var mci_monthOfPass=localStorage.monthOfPass;
      var mci_otherSubject=localStorage.otherSubject;
      var mci_city=localStorage.city;
      var mci_restoredOn=localStorage.restoredOn;
      var mci_uprnNo=localStorage.uprnNo;
      var mci_middleName=localStorage.middleName;
      var mci_registrationNoPrevious=localStorage.registrationNoPrevious;
      var mci_trasanctionStatus=localStorage.trasanctionStatus;
      var mci_monthandyearOfPass=localStorage.monthandyearOfPass;
      var mci_state=localStorage.state;
      var mci_yearInfo=localStorage.yearInfo;
      var mci_role=localStorage.role;
      var mci_removedOn=localStorage.removedOn;
      var mci_catagory=localStorage.catagory;
      var mci_addressLine2=localStorage.addressLine2;
      var mci_registrationNo=localStorage.registrationNo;
      var mci_officeAddress=localStorage.officeAddress;
      var mci_smcNamePrevious=localStorage.smcNamePrevious;
      var mci_registrationDate=localStorage.registrationDate;
      var mci_addlqualuniv3=localStorage.addlqualuniv3;
      var mci_addlqualuniv2=localStorage.addlqualuniv2;
      var mci_addlqualuniv1=localStorage.addlqualuniv1;
      var mci_passoutCollege=localStorage.passoutCollege;
      var mci_birthDateStr=localStorage.birthDateStr;
      var mci_birthPlace=localStorage.birthPlace;
      var mci_addlqualyear3=localStorage.addlqualyear3;
      var mci_addlqualyear1=localStorage.addlqualyear1;
      var mci_smcIds=localStorage.smcIds;
      var mci_doctorId=localStorage.doctorId;
      var mci_stateMedicalCouncil=localStorage.stateMedicalCouncil;
      var mci_removedStatus=localStorage.removedStatus;
      var mci_remarks=localStorage.remarks;
      var mci_nationality=localStorage.nationality;
      var mci_checkExistingUser=localStorage.checkExistingUser;
      var mci_pincode=localStorage.pincode;
      var mci_officeaddress=localStorage.officeaddress;
      var mci_uprnNoPrevious=localStorage.uprnNoPrevious;
      var mci_phoneNo=localStorage.phoneNo;
      var mci_gender=localStorage.gender;
      var mci_firstName=localStorage.firstName;
      var mci_stateId=localStorage.stateId;
      var mci_isNewDoctor=localStorage.isNewDoctor;
      var mci_doctorDegree=localStorage.doctorDegree;
      var mci_university=localStorage.university;
      var mci_addlqualyear2=localStorage.addlqualyear2;
      var mci_smcName=localStorage.smcName;
      var mci_smcId=localStorage.smcId;
      var mci_adharNo=localStorage.adharNo;
      var mci_addlqual3=localStorage.addlqual3;
      var mci_addlqual2=localStorage.addlqual2;
      var mci_addlqual1=localStorage.addlqual1;
      var mci_lastName=localStorage.lastName;
      var mci_catagory_view=localStorage.catagory_view;
      var mci_country=localStorage.country;
      var mci_bloodGroup=localStorage.bloodGroup;
      var mci_country=localStorage.country;
      var mci_homeAddress=localStorage.homeAddress;
      var mci_collegeId=localStorage.collegeId;
      var mci_address=localStorage.address;
      var mci_regnNo=localStorage.regnNo;










        //NAME SIMILARITY
        var namematch_name1 = (localStorage.name1);
          var namematch_name2 = (localStorage.name2);
          var namematch_type = localStorage.name_type;
          var namematch_result = (localStorage.result);



          //png
                     var png_consumer_id = (localStorage.consumer_id);
                    var png_bp_no = (localStorage.bp_no);
                    var png_service_provider = (localStorage.service_provider);
                    var png_Bill_No = (localStorage.Bill_No);
                    console.log(png_Bill_No)
                    var png_Due_Date = (localStorage.Due_Date);
                    var png_Bill_Amount = (localStorage.Bill_Amount);
                    var png_mobile = (localStorage.mobile);
                    var png_Customer_Address = (localStorage.Customer_Address);
                    var png_Bill_Date = (localStorage.Bill_Date);
                    var png_Email = (localStorage.Email);
                    var png_Customer_Name = (localStorage.Customer_Name);






         //llpin
         var cinno_llpin = localStorage.cinno_llpin;
         var Whether_Listed_or_not_llpin = (localStorage.Whether_Listed_or_not_llpin);
         var Company_Category_llpin = (localStorage.Company_Category_llpin);
         var Registered_Address_llpin = (localStorage.Registered_Address_llpin);
         var ROC_Code_llpin = (localStorage.ROC_Code_llpin);
         var Company_SubCategory_llpin = (localStorage.Company_SubCategory_llpin);
         var Email_Id_llpin = localStorage.Email_Id_llpin;
         var Suspended_at_stock_exchange_llpin = (localStorage.Suspended_at_stock_exchange_llpin);
         var Date_of_Balance_Sheet_llpin = (localStorage.Date_of_Balance_Sheet_llpin);
         var cin_llpin = (localStorage.cin_llpin);
         var alternative_address_llpin = (localStorage.alternative_address_llpin);
         var Date_of_last_AGM_llpin = (localStorage.Date_of_last_AGM_llpin);
         var Class_of_Company_llpin = (localStorage.Class_of_Company_llpin);
         var Company_Name_llpin = (localStorage.Company_Name_llpin);
         var Number_of_Members_llpin = (localStorage.Number_of_Members_llpin);
         var Registration_Number_llpin = localStorage.Registration_Number_llpin;
         var Date_of_Incorporation_llpin = localStorage.Date_of_Incorporation_llpin;
         var Paid_up_Capital_llpin = localStorage.Paid_up_Capital_llpin;
         var Authorised_Capital_llpin = localStorage.Authorised_Capital_llpin;





         //nrega
         var nrega_jobId = localStorage.nrega_jobId;
         var familyId1_nrega = (localStorage.familyId1_nrega);
         var address_nrega = (localStorage.address_nrega);
         var nameOfFatherOrHusband_nrega = (localStorage.nameOfFatherOrHusband_nrega);
         var voterId_nrega = (localStorage.voterId_nrega);
         var village_nrega = (localStorage.village_nrega);
         var bplFamilyId_nrega = (localStorage.bplFamilyId_nrega);
         var incomeDetail_nrega = (localStorage.incomeDetail_nrega);
         var familyId_nrega = (localStorage.familyId_nrega);
         var category_nrega = (localStorage.category_nrega);
         var applicantDetail_nrega = (localStorage.applicantDetail_nrega);
         var district_nrega = (localStorage.district_nrega);
         var nameOfHead_nrega = (localStorage.nameOfHead_nrega);
         var photoImageUrl_nrega = (localStorage.photoImageUrl_nrega);
         var bplFamily_nrega = (localStorage.bplFamily_nrega);
         var jobcardno_nrega = (localStorage.jobcardno_nrega);
         var dateOfRegistration_nrega = (localStorage.dateOfRegistration_nrega);
         var panchayat_nrega = (localStorage.panchayat_nrega);
         var block_nrega = (localStorage.block_nrega);




         //tanauth
       var tanNo = (localStorage.tanNo);
       var tanAuthname = (localStorage.name);





         //passport
         var passport_passno = (localStorage.passno);
         var pass_passname = (localStorage.passname);
         var passport_surname = (localStorage.passportsurname);
         var pass_bday = (localStorage.pass_bday);
         var pass_doe = (localStorage.pass_doe);
         var pass_gender = (localStorage.pass_gender);
         var pass_passporttype = (localStorage.pass_passporttype);
         var pass_countrycode = (localStorage.pass_countrycode);
         var pass_string1 = (localStorage.pass_string1);
         var pass_string2 = (localStorage.pass_string2);




         var rcauth_regNo = (localStorage.regNo);

            var rcauth_body_type_desc= (localStorage.rc_body_type_desc);
            // console.log(rc_body_type_desc)
           var rcauth_chasi_no=(localStorage.rc_chasi_no);
           var rcauth_color=(localStorage.rc_color);
           var rcauth_cubic_cap=(localStorage.rc_cubic_cap);
           var rcauth_eng_no=(localStorage.rc_eng_no);
           var rcauth_f_name=(localStorage.rc_f_name);
           var rcauth_financer=(localStorage.rc_financer);
           var rcauth_fit_upto=(localStorage.rc_fit_upto);
           var rcauth_fuel_desc=(localStorage.rc_fuel_desc);
           var rcauth_gvw=(localStorage.rc_gvw);
           var rcauth_insurance_comp=(localStorage.rc_insurance_comp);
           var rcauth_insurance_policy_no=(localStorage.rc_insurance_policy_no);
           var rcauth_insurance_upto=(localStorage.rc_insurance_upto);
           var rcauth_maker_desc=(localStorage.rc_maker_desc);
           var rcauth_maker_model=(localStorage.rc_maker_model);
           var rcauth_manu_month_yr=(localStorage.rc_manu_month_yr);
           var rcauth_mobile_no=(localStorage.rc_mobile_no);
           var rcauth_no_cyl=(localStorage.rc_no_cyl);
           var rcauth_norms_desc=(localStorage.rc_norms_desc);
           var rcauth_owner_name=(localStorage.rc_owner_name);
           var rcauth_owner_sr=(localStorage.rc_owner_sr);
           var rcauth_permanent_address=(localStorage.rc_permanent_address);
           var rcauth_present_address=(localStorage.rc_present_address);
           var rcauth_registered_at=(localStorage.rc_registered_at);
           var rcauth_regn_dt=(localStorage.rc_regn_dt);
           var rcauth_regn_no=(localStorage.rc_regn_no);
           var rcauth_seat_cap=(localStorage.rc_seat_cap);
           var rcauth_sleeper_cap=(localStorage.rc_sleeper_cap);
           var rcauth_stand_cap=(localStorage.rc_stand_cap);
           var rcauth_status_as_on=(localStorage.rc_status_as_on);
           var rcauth_tax_upto=(localStorage.rc_tax_upto);
           var rcauth_unld_wt=(localStorage.rc_unld_wt);
           var rcauth_vch_catg=(localStorage.rc_vch_catg);
           var rcauth_vh_class_desc=(localStorage.rc_vh_class_desc);
           var rcauth_wheelbase=(localStorage.rc_vh_class_desc);




           //rcsearch
               var rc_rgnNo =  (localStorage.rgnNo);
               var chassis =  (localStorage.chassis);
               var rc_state =  (localStorage.state);
               var rc_regn_no = (localStorage.rc_regn_no);
         var rc_owner_name = (localStorage.rc_owner_name);
         var rc_eng_no = (localStorage.rc_eng_no);
        var  rc_chasi_no = (localStorage.rc_chasi_no);
        var  rc_maker_desc = (localStorage.rc_maker_desc);
         var rc_maker_model = (localStorage.rc_maker_model);
         var rc_regn_dt = (localStorage.rc_regn_dt);
         var rc_vh_class_desc = (localStorage.rc_vh_class_desc);
        var rc_color = (localStorage.rc_color);
        var  rc_manu_month_yr = (localStorage.rc_manu_month_yr);







        var inputdomain = (localStorage.inputdomain);
          var update_date = (localStorage.update_date);
            var domain =  (localStorage.domain);
            var admin_city = (localStorage.admin_city) ;
            var admin_fax =  (localStorage.admin_fax);
            var admin_name =  (localStorage.admin_name);
            var admin_country = (localStorage.admin_country) ;
            var admin_stateprovince = (localStorage.admin_stateprovince)  ;
            var admin_phone = (localStorage.admin_phone)  ;
            var admin_street =  (localStorage.admin_street);
            var admin_organization = (localStorage.admin_organization) ;
            var admin_postal = (localStorage.admin_postal)  ;
            var admin_email =  (localStorage.admin_email);
            var expiration_date =  (localStorage.expiration_date);
            var creation_date = (localStorage.creation_date) ;
            var registrar_phone =  (localStorage.registrar_phone) ;
            var registrar_email =   (localStorage.registrar_email) ;
            var registrar_id =   (localStorage.registrar_id);
            var registry_phone =   (localStorage.registry_phone);
            var registry_email =  (localStorage.registry_email);
            var registry_id =  (localStorage.registry_id);
            var registry_expiry = (localStorage.registry_expiry) ;
            var  tech_city =  (localStorage.tech_city);
            var  tech_fax =  (localStorage.tech_fax);
            var  tech_name =  (localStorage.tech_name);
            var  tech_country =  (localStorage.tech_country);
            var  tech_stateprovince = (localStorage.tech_stateprovince) ;
            var  tech_phone =  (localStorage.tech_phone);
            var  tech_street =  (localStorage.tech_street);
            var  tech_organization = (localStorage.tech_organization) ;
            var tech_postal = (localStorage.tech_postal) ;
            var tech_email =  (localStorage.tech_email) ;
            var nameserver_name =  (localStorage.nameserver_name);
            var  registrant_city = (localStorage.registrant_city) ;
            var  registrant_fax =  (localStorage.registrant_fax) ;
            var  registrant_name = (localStorage.registrant_name) ;
            var  registrant_country = (localStorage.registrant_country)  ;
            var  registrant_stateprovince =(localStorage.registrant_stateprovince)  ;
            var  registrant_phone = (localStorage.registrant_phone) ;
            var  registrant_street =  (localStorage.registrant_street);
            var  registrant_organization = (localStorage.registrant_organization) ;
            var  registrant_postal = (localStorage.registrant_postal) ;
            var  registrant_email = (localStorage.registrant_email)  ;




            //Voter id
            var epicno = (localStorage.epicno);
            // console.log(epicno)
            var ps_lat_long =  (localStorage.ps_lat_long);
            var rln_name_v1 =  (localStorage.rln_name_v1);
            var rln_name_v2 =  (localStorage.rln_name_v2);
            var rln_name_v3 =  (localStorage.rln_name_v3);
            var part_no =  (localStorage.part_no);
            var rln_type =  (localStorage.rln_type);
            var section_no =  (localStorage.section_no);
            var voter_id =  (localStorage.id);
            var epic_no =  (localStorage.epic_no);
            var rln_name =  (localStorage.rln_name);
            var voter_district =  (localStorage.district);
            var last_update =  (localStorage.last_update);
            var voter_state =  (localStorage.state);
            var voter_ac_no =  (localStorage.ac_no);
            var house_no =  (localStorage.house_no);
            var ps_name =  (localStorage.ps_name);
            var pc_name =  (localStorage.pc_name);
            var slno_inpart =  (localStorage.slno_inpart);
            var voter_name =  (localStorage.name);
            var part_name =  (localStorage.part_name);
            var voter_dob =  (localStorage.dob);
            var voter_gender = (localStorage.gender) ;
            var voter_age =  (localStorage.age);
            var voter_ac_name =  (localStorage.ac_name);
            var name_v1 =  (localStorage.name_v1);
            var st_code = (localStorage.st_code) ;
            var name_v3 =  (localStorage.name_v3);
            var name_v2 = (localStorage.name_v2) ;



            //udyog adhaar
            var udyoug_uanno = (localStorage.uanno) ;
            var udyog_adhaarno = (localStorage.adhaarno) ;
           var udyog_pin = (localStorage.pin) ;
          var udyog_DateOFCommencement = (localStorage.DateOFCommencement) ;
          var udyog_aadhar = (localStorage.aadhar) ;
          var udyog_district = (localStorage.district) ;
          var udyog_DistrictIndustryCentre = (localStorage.DistrictIndustryCentre) ;
          var udyog_NameofEnterPrise = (localStorage.NameofEnterPrise) ;
          var udyog_NumberofEmp = (localStorage.NumberofEmp) ;
          var udyog_state = (localStorage.state) ;
          var udyog_OwnerName = (localStorage.OwnerName) ;
          var udyog_MajorActivity = (localStorage.MajorActivity) ;
          var udyog_email = (localStorage.email) ;
          var udyog_pan = (localStorage.pan) ;
          var udyog_ifsc = (localStorage.ifsc) ;
          var udyog_EntType = (localStorage.EntType) ;
          var udyog_address = (localStorage.address) ;
          var udyog_social_category = (localStorage.social_category) ;
          var udyog_AccountNumber = (localStorage.AccountNumber) ;
          var udyog_type_of_org = (localStorage.type_of_org) ;
          var udyog_gender = (localStorage.gender) ;
          var udyog_mobile = (localStorage.mobile) ;
          var udyog_Investment = (localStorage.Investment) ;
          var udyog_NIC_Digit_Code = (localStorage.NIC_Digit_Code) ;




          //telephone
          var tel_no = (localStorage.tel_no) ;
          var tel_category = (localStorage.category) ;
          var TelephoneNo = (localStorage.TelephoneNo) ;
          var tel_name = (localStorage.name) ;
          var tel_Installation_Type = (localStorage.Installation_Type) ;
          var tel_address = (localStorage.address) ;




          //tan detailed
          var tano = (localStorage.tano);
         var ao_emailId = (localStorage.ao_emailId);
       var ao_aoType = (localStorage.ao_aoType);
       var ao_buildingName = (localStorage.ao_buildingName);
       var ao_areaCode = (localStorage.ao_areaCode);
       var ao_rangeCode = (localStorage.ao_rangeCode);
       var ao_aoDescription = (localStorage.ao_aoDescription);
       var ao_aoNumber = (localStorage.ao_aoNumber);
       var entity_categoryOfDeductor = (localStorage.entity_categoryOfDeductor);
       var entity_name = (localStorage.entity_name);
       var entity_emailId1 = (localStorage.entity_emailId1);
       var entity_emailId2 = (localStorage.entity_emailId2);
       var entity_address = (localStorage.entity_address);
       var entity_statusOfTan = (localStorage.entity_statusOfTan);
       var entity_tan = (localStorage.entity_tan);
       var entity_pan = (localStorage.entity_pan);


 //shop
                var shop_registration = (localStorage.registration);
                var shop_areacode = (localStorage.areacode);
                var shop_category = (localStorage.category);
                var shop_status = (localStorage.status);
                var shop_owner_name = (localStorage.owner_name);
                var shop_entity_name = (localStorage.entity_name);
                var shop_registration_date = (localStorage.registration_date);
                var shop_valid_to = (localStorage.valid_to);
                var shop_contact = (localStorage.contact);
                var shop_commence_date = (localStorage.commence_date);
                var shop_total_workers = (localStorage.total_workers);
                var shop_fathers_name_of_occupier = (localStorage.fathers_name_of_occupier);
                var shop_nature_of_business = (localStorage.nature_of_business);
                var shop_address = (localStorage.address);
                var shop_valid_from = (localStorage.valid_from);
                var shop_email = (localStorage.email);
                var shop_website_url = (localStorage.website_url);




      res.render('accounts/views',{foundCart:foundCart,
        first_name:first_name,
        last_name:last_name,


        pan_name:pan_name,
        pan_no:pan_no,


        ifsc:ifsc,
        account:account,
        bankTxnStatus:bankTxnStatus,
        accountNumber:accountNumber,
        IFSCCode:IFSCCode,
        accountName:accountName,
        bankResponse:bankResponse,



        canum:canum,
        AssociateYear:AssociateYear,
        COPStatus:COPStatus,
        name:name,
        gender:gender,
        FellowYear:FellowYear,
        Qualification:Qualification,
        address:address,



        company:company,
        cin:cin,



        compname:compname,
        mock:mock,


        dl_no:dl_no,
        dobin:dobin,
        driver_issuedate:driver_issuedate,
        driverName:driverName,
        driver_dob_out:driver_dob_out,
        driver_blood_group:driver_blood_group,
        driver_father:driver_father,
        driver_address:driver_address,
        driver_cov:driver_cov,
        driver_validity:driver_validity,
        validiti_driver:validiti_driver,



        electricity_consumer_id:electricity_consumer_id,
        electricity_service_provider:electricity_service_provider,
        electricity_consumer_name:electricity_consumer_name,
        electricity_consumer_num:electricity_consumer_num,
        electricity_address:electricity_address,
        electricity_bill_no:electricity_bill_no,
        electricity_bill_amount:electricity_bill_amount,
        electricity_amount_payable:electricity_amount_payable,
        electricity_total_amount:electricity_total_amount,
        electricity_bill_issue_date:electricity_bill_issue_date,
        electricity_bill_due_date:electricity_bill_due_date,
        electricity_bill_date:electricity_bill_date,
        electricity_mobile_number:electricity_mobile_number,
        electricity_email_address:electricity_email_address,



        authemial:authemial,
        meta_params:meta_params,
        disposable:disposable,
        webmail:webmail,
        result:result,
        accept_all:accept_all,
        smtp_check:smtp_check,
        regexp:regexp,
        mx_records:mx_records,
        emailyo:emailyo,


        uan:uan,
        lookup:lookup,


        uanemp:uanemp,
        employee:employee,


        esicid_id:esicid_id,
        UHID:UHID,
        dob_esicid:dob_esicid,
        AdhaarStatus:AdhaarStatus,
        DispensaryName:DispensaryName,
        CurrentDateOfAppointment:CurrentDateOfAppointment,
        Nominee_Address:Nominee_Address,
        PresentAddress:PresentAddress,
        DisabilityType:DisabilityType,
        AdhaarNO_esicid:AdhaarNO_esicid,
        PhoneNO_esicid:PhoneNO_esicid,
        MaritialStatus:MaritialStatus,
        Name_esicid:Name_esicid,
        Gender_esicid:Gender_esicid,
        Nominee_AdhaarNO_esicid:Nominee_AdhaarNO_esicid,
        Contribution_Details:Contribution_Details,
        Nominee_AdhaarNO_esicid:Nominee_AdhaarNO_esicid,
        Father_or_Husband:Father_or_Husband,
        RegistrationDate:RegistrationDate,
        PermanentAddress:PermanentAddress,
        Nominee_Name_esicid:Nominee_Name_esicid,
        InsuranceNO_esicid:InsuranceNO_esicid,
        FirstDateOfAppointment:FirstDateOfAppointment,
        Relation_with_IP:Relation_with_IP,



        fda_esic_id:fda_esic_id,
        fda_state:fda_state,
        fda_store_name:fda_store_name,
        fda_contact_number:fda_contact_number,
        fda_address:fda_address,
        fda_name:fda_name,
        fda_license_detail:fda_license_detail,





        status_result:status_result,
        tan_form16:tan_form16,
        pan_form16:pan_form16,
        cert_no_form16:cert_no_form16,
        fiscal_year_form16:fiscal_year_form16,
        amount_form16:amount_form16,




        q_1:q_1,
        q_2:q_2,
        q_3:q_3,
        q_4:q_4,
        tanq_1:tanq_1,
        panq_1:panq_1,
        fqfiscalq_1:fqfiscalq_1,


        fssai_reg:fssai_reg,
        fssai_status:fssai_status,
        fssai_lictype:fssai_lictype,
        fssai_licno:fssai_licno,
        fssai_firmname:fssai_firmname,
        fssai_address:fssai_address,



        gst_gsti:gst_gsti,
        gst_mbr:gst_mbr,
        gst_canflag:gst_canflag,
        gst_pradr_em:gst_pradr_em,
        gst_pradr_adr:gst_pradr_adr,
        gst_pradr_addr:gst_pradr_addr,
        gst_pradr_mb:gst_pradr_mb,
        gst_pradr_ntr:gst_pradr_ntr,
        gst_pradr_lastupdateddate:gst_pradr_lastupdateddate,
        gst_tradenam:gst_tradenam,
        gst_contacted:gst_contacted,
        gst_gstin:gst_gstin,
        gst_nba:gst_nba,
        gst_stjcd:gst_stjcd,
        gst_stj:gst_stj,
        gst_ppr:gst_ppr,
        gst_dty:gst_dty,
        gst_cmprt:gst_cmprt,
        gst_lstupdt:gst_lstupdt,
        gst_ctb:gst_ctb,
        gst_sts:gst_sts,
        gst_cxdt:gst_cxdt,
        gst_adadr:gst_adadr,
        gst_lgnm:gst_lgnm,
        gst_ctjcd:gst_ctjcd,
        gst_ctj:gst_ctj,
        gst_rgdt:gst_rgdt,




        gsti:gsti,
        gsti_state:gsti_state,
        gst_emailId:gst_emailId,
        applicationStatus:applicationStatus,
        mobNum:mobNum,
        gst_pan:gst_pan,
        gstinRefId:gstinRefId,
        regType:regType,
        gstinId:gstinId,
        registrationName:registrationName,
        tinNumber:tinNumber,





        hsn1:hsn1,
        chapterNotes:chapterNotes,
        policyLink:policyLink,
        headingDesc:headingDesc,
        sectionDesc:sectionDesc,
        itemDesc2:itemDesc2,
        itemDesc1:itemDesc1,
        chapterNo:chapterNo,
        hsn_policy:hsn_policy,
        chapterDesc:chapterDesc,
        policyConditions:policyConditions,
        sectionNo:sectionNo,





        iecauth_iec:iecauth_iec,
        iecauth_name:iecauth_name,
        iecauth_del_status:iecauth_del_status,
        iecauth_iecode:iecauth_iecode,
        iecauth_address:iecauth_address,
        iecauth_nob:iecauth_nob,
        iecauth_iecstatus:iecauth_iecstatus,
        iecauth_pan:iecauth_pan,


        iecd_file_number:iecd_file_number,
        iecd_bin_pan_extension:iecd_bin_pan_extension,
        iedc_ie_code:iedc_ie_code,
        iecd_iec_status:iecd_iec_status,
        iecd_nob:iecd_nob,
        iecd_regdetails:iecd_regdetails,
        iecd_nature_of_concern:iecd_nature_of_concern,
        iecd_del_status:iecd_del_status,
        iecd_directors:iecd_directors,
        iecd_party_name_and_address:iecd_party_name_and_address,
        iecd_pan:iecd_pan,
        iecd_pan_issued_by:iecd_pan_issued_by,
        iecd_date_of_establishment:iecd_date_of_establishment,
        iecd_address:iecd_address,
        iecd_iec_allotment_date:iecd_iec_allotment_date,
        iecd_branches:iecd_branches,
        iecd_name:iecd_name,
        iecd_e_mail:iecd_e_mail,
        iecd_file_date:iecd_file_date,
        iecd_phone_no:iecd_phone_no,
        iecd_exporter_type:iecd_exporter_type,
        iecd_pan_issue_date:iecd_pan_issue_date,
        iecd_bank_details_bank_name:iecd_bank_details_bank_name,
        iecd_bank_details_account_type:iecd_bank_details_account_type,
        iecd_bank_details_account_number:iecd_bank_details_account_number,
        iecd_rmcm:iecd_rmcm,





        icsi:icsi,
        icsino:icsino,
        cpnumber:cpnumber,


        icwaiNo:icwaiNo,
        approvalDate:approvalDate,
        FirmType:FirmType,
        FirmName:FirmName,
        icwaifirm_Pin:icwaifirm_Pin,
        icwaifirm_City:icwaifirm_City,
        reConDate:reConDate,
        icwaifirm_Region:icwaifirm_Region,
        icwaifirm_ldt:icwaifirm_ldt,
        icwaifirm_MemberDetails:icwaifirm_MemberDetails,
        icwaifirm_deedDt:icwaifirm_deedDt,
        icwaifirm_State:icwaifirm_State,
        icwaifirm_Contact:icwaifirm_Contact,
        icwaifirm_mobile:icwaifirm_mobile,
        icwaifirm_Address:icwaifirm_Address,
        icwaifirm_Dist:icwaifirm_Dist,
        icwaifirm_email:icwaifirm_email,




        icwaino : icwaino,
        icwai_mem_MemshipDt : icwai_mem_MemshipDt,
        icwai_mem_Chapter : icwai_mem_Chapter,
        icwai_mem_Retired : icwai_mem_Retired,
        icwai_mem_dob : icwai_mem_dob,
        icwai_mem_Mname : icwai_mem_Mname,
        icwai_mem_ProtFirmName : icwai_mem_ProtFirmName,
        icwai_mem_ValidUpDt : icwai_mem_ValidUpDt,
        icwai_mem_MemCategory : icwai_mem_MemCategory,
        icwai_mem_Fname : icwai_mem_Fname,
        icwai_mem_gender : icwai_mem_gender,
        icwai_mem_SrName : icwai_mem_SrName,
        icwai_mem_EffectiveDt : icwai_mem_EffectiveDt,
        icwai_mem_MemRegion : icwai_mem_MemRegion,
        icwai_mem_CrtEmployer : icwai_mem_CrtEmployer,
        icwai_mem_FirmEftDt : icwai_mem_FirmEftDt,
        icwai_mem_CancellationDt : icwai_mem_CancellationDt,




        ifsc_ifsc1: ifsc_ifsc1,
        ifsc_city : ifsc_city,
        ifsc_district : ifsc_district,
        ifsc_ifsc : ifsc_ifsc,
        ifsc_micr : ifsc_micr,
        ifsc_state : ifsc_state,
        ifsc_contact : ifsc_contact,
        ifsc_branch : ifsc_branch,
        ifsc_address : ifsc_address,
        ifsc_bank : ifsc_bank,


        itr_status:itr_status,
        itr_validity:itr_validity,
        itr_pan:itr_pan,
        itr_ack:itr_ack,



        mca_result:mca_result,
        mca_cin:mca_cin,





        udyoug_uanno : udyoug_uanno,
            udyog_adhaarno : udyog_adhaarno,
           udyog_pin : udyog_pin,
          udyog_DateOFCommencement : udyog_DateOFCommencement,
          udyog_aadhar : udyog_aadhar,
          udyog_district : udyog_district,
          udyog_DistrictIndustryCentre : udyog_DistrictIndustryCentre,
          udyog_NameofEnterPrise : udyog_NameofEnterPrise,
          udyog_NumberofEmp : udyog_NumberofEmp,
          udyog_state : udyog_state,
          udyog_OwnerName: udyog_OwnerName,
          udyog_MajorActivity : udyog_MajorActivity,
          udyog_email : udyog_email,
          udyog_pan : udyog_pan,
          udyog_ifsc : udyog_ifsc,
          udyog_EntType : udyog_EntType,
          udyog_address : udyog_address,
          udyog_social_category : udyog_social_category,
          udyog_AccountNumber : udyog_AccountNumber,
          udyog_type_of_org : udyog_type_of_org,
          udyog_gender : udyog_gender,
          udyog_mobile : udyog_mobile,
          udyog_Investment : udyog_Investment,
          udyog_NIC_Digit_Code : udyog_NIC_Digit_Code,





         cinno_llpin:cinno_llpin,
         Whether_Listed_or_not_llpin :Whether_Listed_or_not_llpin,
         Company_Category_llpin:Company_Category_llpin,
         Registered_Address_llpin: Registered_Address_llpin,
         ROC_Code_llpin:ROC_Code_llpin,
         Company_SubCategory_llpin:Company_SubCategory_llpin,
         Email_Id_llpin :Email_Id_llpin,
         Suspended_at_stock_exchange_llpin:Suspended_at_stock_exchange_llpin,
         Date_of_Balance_Sheet_llpin :Date_of_Balance_Sheet_llpin,
         cin_llpin:cin_llpin,
         alternative_address_llpin:alternative_address_llpin,
         Date_of_last_AGM_llpin:Date_of_last_AGM_llpin,
         Class_of_Company_llpin :Class_of_Company_llpin,
         Company_Name_llpin :Company_Name_llpin,
         Number_of_Members_llpin :Number_of_Members_llpin,
         Registration_Number_llpin :Registration_Number_llpin,
         Date_of_Incorporation_llpin:Date_of_Incorporation_llpin,
         Paid_up_Capital_llpin:Paid_up_Capital_llpin,
         Authorised_Capital_llpin:Authorised_Capital_llpin,



                  mci_emailId:mci_emailId,
                 mci_eligbleToVote:mci_eligbleToVote,
                 mci_doctorEducationId:mci_doctorEducationId,
                 mci_doctRegistrationNo:mci_doctRegistrationNo,
                 mci_registrationDatePrevious:mci_registrationDatePrevious ,
                 mci_photo:mci_photo,
                 mci_parentName: mci_parentName,
                 mci_universityId_view:mci_universityId_view,
                 mci_regDate:mci_regDate,
                 mci_birthDate:mci_birthDate,
                 mci_restoredStatus: mci_restoredStatus,
                 mci_birthDate:mci_birthDate,
                 mci_universityId:mci_universityId,
                 mci_college:mci_college,
                 mci_yearOfPassing:mci_yearOfPassing,
                 mci_addressLine1:mci_addressLine1,
                 mci_salutation:mci_salutation,
                 mci_economicStatus:mci_economicStatus,
                 mci_monthOfPass:mci_monthOfPass,
                 mci_otherSubject:mci_otherSubject,
                 mci_city:mci_city,
                 mci_restoredOn:mci_restoredOn,
                 mci_uprnNo:mci_uprnNo,
                 mci_middleName:mci_middleName,
                 mci_registrationNoPrevious:mci_registrationNoPrevious,
                 mci_trasanctionStatus  :mci_trasanctionStatus,
                 mci_monthandyearOfPass :mci_monthandyearOfPass,
                 mci_state:mci_state,
                 mci_yearInfo:mci_yearInfo,
                 mci_role : mci_role,
                 mci_removedOn  :mci_removedOn,
                  mci_catagory  :mci_catagory,
                  mci_addressLine2  :mci_addressLine2,
                  mci_registrationNo  :mci_registrationNo,
                  mci_officeAddress  :mci_officeAddress,
                  mci_smcNamePrevious  :mci_smcNamePrevious,
                  mci_registrationDate  :mci_registrationDate,
                  mci_addlqualuniv3  :mci_addlqualuniv3,
                  mci_addlqualuniv2  : mci_addlqualuniv2,
                  mci_addlqualuniv1  :mci_addlqualuniv1,
                  mci_passoutCollege  :mci_passoutCollege,
                  mci_birthDateStr  :mci_birthDateStr,
                  mci_birthPlace  :mci_birthPlace,
                  mci_addlqualyear3  :mci_addlqualyear3,
                  mci_addlqualyear1  :mci_addlqualyear1,
                  mci_smcIds  : mci_smcIds,
                  mci_doctorId  :mci_doctorId,
                  mci_stateMedicalCouncil  :mci_stateMedicalCouncil,
                  mci_removedStatus  : mci_removedStatus,
                  mci_remarks  : mci_remarks,
                  mci_nationality  :mci_nationality,
                  mci_checkExistingUser  :mci_checkExistingUser,
                  mci_pincode  :mci_pincode,
                  mci_officeaddress  :mci_officeaddress,
                  mci_uprnNoPrevious  :mci_uprnNoPrevious,
                  mci_phoneNo  :mci_phoneNo,
                  mci_gender  :mci_gender,
                  mci_firstName  :mci_firstName,
                  mci_stateId  :mci_stateId,
                  mci_isNewDoctor  :mci_isNewDoctor,
                  mci_doctorDegree  :mci_doctorDegree,
                  mci_university  :mci_university,
                  mci_addlqualyear2  :mci_addlqualyear2,
                  mci_smcName  :mci_smcName,
                  mci_smcId  :mci_smcId,
                  mci_adharNo  :mci_adharNo,
                  mci_addlqual3  :mci_addlqual3,
                  mci_addlqual2  :mci_addlqual2,
                  mci_addlqual1  :mci_addlqual1,
                  mci_lastName  :mci_lastName,
                  mci_catagory_view  :mci_catagory_view,
                  mci_country  :mci_country,
                  mci_bloodGroup  :mci_bloodGroup,
                  mci_homeAddress  :mci_homeAddress,
                  mci_collegeId  :mci_collegeId,
                  mci_address  :mci_address,
                  mci_regnNo  :mci_regnNo,
                   mci_mcinum:mci_mcinum,
                   mci_year_of_reg:mci_year_of_reg,
                   mci_mcimedical:mci_mcimedical,






                   namematch_name1 : namematch_name1,
                  namematch_name2 : namematch_name2,
                  namematch_type:namematch_type,
                  namematch_result : namematch_result,





                  rcauth_regNo : rcauth_regNo,
          rcauth_body_type_desc:rcauth_body_type_desc,
           rcauth_chasi_no:rcauth_chasi_no,
           rcauth_color:rcauth_color,
           rcauth_cubic_cap:rcauth_cubic_cap,
           rcauth_eng_no:rcauth_eng_no,
           rcauth_f_name:rcauth_f_name,
           rcauth_financer:rcauth_financer,
           rcauth_fit_upto:rcauth_fit_upto,
           rcauth_fuel_desc:rcauth_fuel_desc,
           rcauth_gvw:rcauth_gvw,
           rcauth_insurance_comp:rcauth_insurance_comp,
           rcauth_insurance_policy_no:rcauth_insurance_policy_no,
           rcauth_insurance_upto:rcauth_insurance_upto,
           rcauth_maker_desc:rcauth_maker_desc,
           rcauth_maker_model:rcauth_maker_model,
           rcauth_manu_month_yr:rcauth_manu_month_yr,
           rcauth_mobile_no:rcauth_mobile_no,
           rcauth_no_cyl:rcauth_no_cyl,
           rcauth_norms_desc:rcauth_norms_desc,
           rcauth_owner_name:rcauth_owner_name,
           rcauth_owner_sr:rcauth_owner_sr,
           rcauth_permanent_address:rcauth_permanent_address,
           rcauth_present_address:rcauth_present_address,
           rcauth_registered_at:rcauth_registered_at,
           rcauth_regn_dt:rcauth_regn_dt,
           rcauth_regn_no:rcauth_regn_no,
           rcauth_seat_cap:rcauth_seat_cap,
           rcauth_sleeper_cap:rcauth_sleeper_cap,
           rcauth_stand_cap:rcauth_stand_cap,
           rcauth_status_as_on:rcauth_status_as_on,
           rcauth_tax_upto:rcauth_tax_upto,
           rcauth_unld_wt:rcauth_unld_wt,
           rcauth_vch_catg:rcauth_vch_catg,
           rcauth_vh_class_desc:rcauth_vh_class_desc,
           rcauth_wheelbase:rcauth_wheelbase,





           rc_rgnNo : rc_rgnNo,
                 chassis : chassis,
                 rc_state : rc_state,
            rc_regn_no: rc_regn_no,
          rc_owner_name: rc_owner_name,
          rc_eng_no: rc_eng_no,
          rc_chasi_no: rc_chasi_no,
          rc_maker_desc: rc_maker_desc,
          rc_maker_model: rc_maker_model,
          rc_regn_dt: rc_regn_dt,
          rc_vh_class_desc: rc_vh_class_desc,
          rc_color: rc_color,
          rc_manu_month_yr: rc_manu_month_yr,


          tanNo : tanNo,
        tanAuthname : tanAuthname,






        shop_registration : shop_registration,
                         shop_areacode : shop_areacode,
                         shop_category : shop_category,
                         shop_status : shop_status ,
                         shop_owner_name : shop_owner_name,
                         shop_entity_name : shop_entity_name,
                         shop_registration_date : shop_registration_date,
                         shop_valid_to : shop_valid_to,
                         shop_contact : shop_contact,
                         shop_commence_date : shop_commence_date,
                         shop_total_workers : shop_total_workers,
                         shop_fathers_name_of_occupier : shop_fathers_name_of_occupier,
                         shop_nature_of_business : shop_nature_of_business,
                         shop_address : shop_address,
                         shop_valid_from : shop_valid_from,
                         shop_email : shop_email,
                         shop_website_url : shop_website_url,







                  png_consumer_id : png_consumer_id,
                            png_bp_no : png_bp_no,
                            png_service_provider : png_service_provider,
                            png_Bill_No : png_Bill_No,
                            png_Due_Date : png_Due_Date,
                            png_Bill_Amount : png_Bill_Amount,
                            png_mobile : png_mobile,
                            png_Customer_Address : png_Customer_Address,
                            png_Bill_Date : png_Bill_Date,
                            png_Email : png_Email,
                            png_Customer_Name : png_Customer_Name,





              inputdomain:inputdomain,
              update_date :  update_date,
              domain :  domain,
              admin_city :  admin_city,
              admin_fax :  admin_fax,
              admin_name :  admin_name,
              admin_country :  admin_country,
              admin_stateprovince :  admin_stateprovince,
              admin_phone :  admin_phone,
              admin_street :  admin_street,
              admin_organization :  admin_organization,
              admin_postal :  admin_postal,
              admin_email :  admin_email,
              expiration_date :  expiration_date,
              creation_date :  creation_date,
              nameserver_name:nameserver_name,
              registrar_phone :  registrar_phone,
              registrar_email :  registrar_email,
              registry_id :  registry_id,
              registry_expiry :  registry_expiry,
              tech_city :  tech_city,
              tech_fax :  tech_fax,
              tech_name :  tech_name,
              tech_country :  tech_country,
              tech_stateprovince :  tech_stateprovince,
              tech_phone :  tech_phone,
              tech_street :  tech_street,
              tech_organization :  tech_organization,
              tech_postal :  tech_postal,
              tech_email :  tech_email,
              registrant_city:registrant_city,
              registrant_fax:registrant_fax,
              registrant_name:registrant_name,
              registrant_country:registrant_country,
              registrant_stateprovince:registrant_stateprovince,
              registrant_phone:registrant_phone,
              registrant_street:registrant_street,
              registrant_organization:registrant_organization,
              registrant_postal:registrant_postal,
              registrant_email:registrant_email,





         nrega_jobId : nrega_jobId,
         familyId1_nrega : familyId1_nrega,
         address_nrega : address_nrega,
         nameOfFatherOrHusband_nrega : nameOfFatherOrHusband_nrega,
         voterId_nrega : voterId_nrega,
         village_nrega : village_nrega,
         bplFamilyId_nrega : bplFamilyId_nrega,
         incomeDetail_nrega : incomeDetail_nrega,
         familyId_nrega : familyId_nrega,
         category_nrega : category_nrega,
         applicantDetail_nrega : applicantDetail_nrega,
         district_nrega : district_nrega,
         nameOfHead_nrega : nameOfHead_nrega,
         photoImageUrl_nrega : photoImageUrl_nrega,
         bplFamily_nrega : bplFamily_nrega,
         jobcardno_nrega : jobcardno_nrega,
         dateOfRegistration_nrega : dateOfRegistration_nrega,
         panchayat_nrega : panchayat_nrega,
         block_nrega : block_nrega,



         epicno : epicno,
             ps_lat_long  : ps_lat_long,
             rln_name_v1  : rln_name_v1 ,
             rln_name_v2  : rln_name_v2,
             rln_name_v3  : rln_name_v3,
             part_no  :part_no,
             rln_type  :rln_type,
             section_no  : section_no,
             voter_id  : voter_id,
             epic_no  :  epic_no,
             rln_name  : rln_name,
             voter_district  :voter_district,
             last_update  :last_update,
             voter_state  :voter_state,
             voter_ac_no  : voter_ac_no,
             house_no  : house_no,
             ps_name  : ps_name,
             pc_name  : pc_name,
             slno_inpart  : slno_inpart,
             voter_name  : voter_name,
             part_name  : part_name,
             voter_dob  : voter_dob,
             voter_gender  : voter_gender,
             voter_age  : voter_age,
             voter_ac_name  : voter_ac_name,
             name_v1  : name_v1,
             st_code  : st_code,
             name_v3  : name_v3,
             name_v2  : name_v2,



          passport_passno :passport_passno,
          pass_passname : pass_passname,
          passport_surname : passport_surname,
          pass_bday : pass_bday,
          pass_doe : pass_doe,
          pass_gender : pass_gender,
          pass_passporttype :pass_passporttype,
          pass_countrycode : pass_countrycode,
          pass_string1 : pass_string1,
          pass_string2 : pass_string2

      });
                              });
                            }
                            });



module.exports = router;
