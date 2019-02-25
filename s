<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

		<link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
	<title>Dashboard</title>
	<style type="text/css">

		body{
			font-family: 'Poppins', sans-serif;
			background-color:#F5F5F5;
			/*background-image: url('1.jpg');
			background-repeat:no-repeat;
			backface-visibility:*/
		}
		table{
			padding-top:50px;
			table-layout: fixed;
			position: relative;
			margin-top:50px;
			width:100%;

		}
		td {
		  width:20% ;
		}
		table,th,td{
			border: 1px solid black;
			width:92%;
			margin-top: 50px;
			margin-left:4%;
		}
		th,td{
			padding-top:15px;
			padding-bottom:15px;
			padding-left:50px;
			color: #2874A6;

		}

			.col-sm-6{
				line-height:2;
				color:#2874A6;

			}
			hr{
				visibility: hidden;
			}
			.posh {
		font-size:17px;

	}
		</style>
</head>
<body>
	<h2 style="text-align: center;color: #154360;">
			<b>VERIFICATION REPORT</b>
		</h2>
	<thead>
	<div class="container-fluid" style="border:2px solid black;margin-top:20px;border-radius:20px;margin-left:50px;margin-right: 50px;">

		<div class="col-sm-6" style="font-size:20px;margin-top:60px;">
			<span><b>Customer Name</b> - <%= user.first_name %></span><br>
			<span><b>Client ID</b> - <%= user._id %></span><br>
			<span><b>Location</b> - <%= user.country %></span><br>
			<!-- <span><b>Address</b> - Address</span><br> -->
			<span><b>Customer type</b> - KYC Commercial</span><hr>
		</div>

		<!-- <div class="col-sm-4" style="text-align: center;">
			<h2><b>VERIFICATION REPORT</b></h2>
		</div> -->

		<div class="col-sm-6" style="font-size:20px;margin-top:60px;">
			<span><b>Client Name</b> - Cred Bank</span><br>
			<span><b>Date Of Report</b> - <sapn id="ddate"></span></span><br>
			<span><b>Report Made By</b> - Xerify</span><br>
			<span><b>Report Made for</b> - Verification Agency</span><br>
			<span style="font-size:30px;"><b>X&nbsp;E&nbsp;R&nbsp;I&nbsp;F&nbsp;Y</b></span>
		</div>

	</div>
</thead>
	<!-- <center><a href="/"><button class="btn btn-primary btn-lg" style="margin-bottom:20px"> Go To Home </button></a></center> -->
	<table cellpadding="2px" style="margin-top:50px;border:1px solid black;  ">
		<tr>
			<th>Title</th>
			<th>Input</th>
			<th>Output</th>
		</tr>
		<%for (var i=0; i< foundCart.items.length;i++){ %>
 			<%	if( foundCart.items[i].title  === "PAN CARD VERIFICATION") { %>
    <tr>
			<td><%= foundCart.items[i].title %></td>
			<td><b class="posh">Pan Card No :</b><%= pans.input_pan_no %></td>
			<td><b class="posh">PAN Holder Name:</b><%= pans.pan_name %></td>
		</tr>
		 <% } else if( foundCart.items[i].title  === "DRIVING LICENSE AUTHENTICATION") { %>
			 <tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">Dl Number : </b><%= drivers.input_dl_no %><br>
					<b class="posh">DOB : </b><%= drivers.input_dob %></td>
	 			<td><b class="posh">Card Holder Name :</b><%= drivers.driver_name %><br>
					<b class="posh">Issue Date :</b><%= drivers.driver_issue_date %><br>
					<b class="posh">DOB on Card :</b><%= drivers.driver_dob_out %><br>
					<b class="posh">Blood Group :</b><%= drivers.driver_blood_group %><br>
					<b class="posh">Father/Husband :</b><%= drivers.driver_father %><br>
					<b class="posh">Address :</b><%= drivers.driver_address %><br>
					<%for (var x=0; x< drivers.driver_cov_details.length;x++){ %>
				<b class="posh">Cov Details Issue Date:</b><%= drivers.driver_cov_details[x].issue_date %><br>
				<b class="posh">Cov Details :</b><%= drivers.driver_cov_details[x].cov %><br>
				<% } %>
					<b class="posh">Validity Non-Transport :</b><%= drivers.driver_validity.non_transport %><br>
					<b class="posh">Validity Transport :</b><%= drivers.driver_validity.transport %></td>
	 		</tr>
			<% } else if( foundCart.items[i].title  === "VOTER IDENTIFICATION") { %>
				<tr>
 	 			<td><b class="posh">Product :</b><%= foundCart.items[i].title %></td>
 	 			<td><b class="posh">Epic No :</b><%= voters.voter_input_epic_no %></td>
 	 			<td><b class="posh">Epic No :</b><%= voters.voter_output_epic_no %><br>
 					<b class="posh">Card Holder Name :</b><%= voters.voter_name %><br>
 					<b class="posh">rln name v1 :</b><%= voters.voter_rln_name_v1 %><br>
 					<b class="posh">rln name v2 :</b><%= voters.voter_rln_name_v2 %><br>
 					<b class="posh">rln name v3 :</b><%= voters.voter_rln_name_v3 %><br>
 					<b class="posh">name v1 :</b><%= voters.voter_name_v1 %><br>
 					<b class="posh">name v2 :</b><%= voters.voter_name_v2 %><br>
 					<b class="posh">name v3 :</b><%= voters.voter_name_v3 %><br>
 					<b class="posh">rln name :</b><%= voters.voter_rln_name %><br>
					<b class="posh">rln type :</b><%= voters.voter_rln_type %><br>
					<b class="posh">gender :</b><%= voters.voter_gender %><br>
					<b class="posh">age  :</b><%= voters.voter_age %><br>
					<b class="posh">DOB :</b><%= voters.voter_dob %><br>
					<b class="posh">House No :</b><%= voters.voter_house_no %><br>
					<b class="posh">Part Name :</b><%= voters.voter_part_name %><br>
					<b class="posh">Pc Name :</b><%= voters.voter_pc_name %><br>
					<b class="posh">Ac Name :</b><%= voters.voter_ac_name %><br>
					<b class="posh">District :</b><%= voters.voter_district %><br>
					<b class="posh">State :</b><%= voters.voter_state %><br>
					<b class="posh">St code :</b><%= voters.voter_st_code %><br>
					<b class="posh">Part No :</b><%= voters.voter_part_no %><br>
					<b class="posh">Ps lat long :</b><%= voters.voter_ps_lat_long %><br>
					<b class="posh">Ps Name :</b><%= voters.voter_ps_name %><br>
					<b class="posh">Section no :</b><%= voters.voter_section_no %><br>
					<b class="posh">Sl No inpart:</b><%= voters.voter_slno_inpart %><br>
					<b class="posh">Id :</b><%= voters.voter_id %><br>
					<b class="posh">Last updater :</b><%= voters.voter_last_update %></td>
 	 		</tr>
			<% } else if( foundCart.items[i].title  === "NREGA") { %>
 			 <tr>
 	 			<td><b class="posh">Product :</b><%= foundCart.items[i].title %></td>
 	 			<td><b class="posh">JOB Id: </b><%= nregas.nrega_input_job_id %></td>
 	 			<td>
 					<b class="posh">FamilyId1 :</b><%= nregas.nrega_familyId1 %><br>
 					<b class="posh">Address :</b><%= nregas.nrega_address %><br>
 					<b class="posh">NameOfFatherOrHusband :</b><%= nregas.nrega_nameOfFatherOrHusband %><br>
 					<b class="posh">VoterId :</b><%= nregas.nrega_voterId %><br>
 					<b class="posh">Village :</b><%= nregas.nrega_village %><br>
 					<b class="posh">BplFamilyId :</b><%= nregas.nrega_bplFamilyId %><br>
						<%for (var x=0; x< nregas.nrega_incomeDetail.length;x++){ %>
 					<b class="posh">Year :</b><%= nregas.nrega_incomeDetail[x].year %><br>
					<b class="posh">Income :</b><%= nregas.nrega_incomeDetail[x].income %><br>
					<% } %>
					<%for (var y=0; y< nregas.nrega_applicantDetail.length;y++){ %>
				<b class="posh">Name :</b><%= nregas.nrega_applicantDetail[y].name %><br>
				<b class="posh">Gender :</b><%= nregas.nrega_applicantDetail[y].gender %><br>
				<b class="posh">Bankor Post Office :</b><%= nregas.nrega_applicantDetail[y].bankorpostoffice %><br>
				<b class="posh">Age :</b><%= nregas.nrega_applicantDetail[y].age %><br>
				<b class="posh">Account No :</b><%= nregas.nrega_applicantDetail[y].accountNo %><br>
				<b class="posh">Adhaar No :</b><%= nregas.nrega_applicantDetail[y].adhaarNo %><br>
				<% } %>
 					<b class="posh">NameOfHead :</b><%= nregas.nrega_nameOfHead %><br>
					<b class="posh">Job Card No :</b><%= nregas.nrega_jobcardno %><br>
					<b class="posh">Date Of Registration :</b><%= nregas.nrega_dateOfRegistration %><br>
					<b class="posh">Panchayat :</b><%= nregas.nrega_panchayat %><br>
					<b class="posh">Block :</b><%= nregas.nrega_block %><br></td>
 	 		</tr>
			<% } else if( foundCart.items[i].title  === "PASSPORT AUTHENTICATION") { %>
 			 <tr>
 	 			<td><%= foundCart.items[i].title %></td>
 	 			<td><b class="posh">Passport No : </b><%= passports.input_passport_no %><br>
					<b class="posh">Your Name : </b><%= passports.input_name %><br>
					<b class="posh">Your Last Name : </b><%= passports.input_last_name %><br>
					<b class="posh">DOB : </b><%= passports.input_dob %><br>
					<b class="posh">DOE : </b><%= passports.input_doe %><br>
					<b class="posh">Gender : </b><%= passports.input_gender %><br>
					<b class="posh">Type : </b><%= passports.input_type %><br>
	 				<b class="posh">Country : </b><%= passports.input_country %><br></td>
 	 			<td>
 					<b class="posh">String 1 : </b><%= passports.string1 %><br>
 					<b class="posh">String 2 : </b><%= passports.string2 %><br></td>
 	 		</tr>
			<% } else if( foundCart.items[i].title  === "TAN AUTHENTICATION") { %>
 			 <tr>
 	 			<td><%= foundCart.items[i].title %></td>
 	 			<td><b class="posh">Tan No : </b><%= tans.input_tan_no %><br></td>
 	 			<td>
 					<b class="posh">Name : </b><%= tans.tan_name %><br></td>
 	 		</tr>
			<% } else if( foundCart.items[i].title  === "MCA SIGNATORIES") { %>
 			 <tr>
 	 			<td><%= foundCart.items[i].title %></td>
 	 			<td><b class="posh">Tan No : </b><%= mcas.input_cin_no %><br></td>
 	 			<td>
				<%for (var y=0; y< mcas.ouput_cin.length;y++){ %>
				<b class="posh">Date Of Appointment :</b><%= mcas.ouput_cin[y].date_of_appointment %><br>
				<b class="posh">Designation :</b><%= mcas.ouput_cin[y].designation %><br>
				<b class="posh">Dsc Expiry Date :</b><%= mcas.ouput_cin[y].dsc_expiry_date %><br>
				<b class="posh">Address :</b><%= mcas.ouput_cin[y].address %><br>
				<b class="posh">DIN/DPIN/PAN :</b><%= mcas.ouput_cin[y]['DIN/DPIN/PAN'] %><br>
				<b class="posh">Full name :</b><%= mcas.ouput_cin[y].full_name %><br>
				<b class="posh">wheather Dsc Registered :</b><%= mcas.ouput_cin[y].wheather_dsc_registered %><br>
				<% } %>
 	 		</tr>
			<% } else if( foundCart.items[i].title  === "COMPANY SEARCH BY NAME") { %>
 			 <tr>
 	 			<td><%= foundCart.items[i].title %></td>
 	 			<td><b class="posh">Company Name : </b><%= companysearchs.input_comp_name %><br></td>
 	 			<td>
					<%for (var y=0; y< companysearchs.result.length;y++){ %>
				<b class="posh">Score :</b><%= companysearchs.result[y].score %><br>
				<b class="posh">Cin :</b><%= companysearchs.result[y].cin %><br>
				<b class="posh">Company Name :</b><%= companysearchs.result[y].comapany_name %><br>
				<% } %>
 	 		</tr>
			<% } else if( foundCart.items[i].title  === "IMPORT EXPORT CODE") { %>
 			 <tr>
 	 			<td><%= foundCart.items[i].title %></td>
 	 			<td><b class="posh">IEC No : </b><%= iecauths.input_iec_no %><br></td>
 	 			<td>
 					<b class="posh">Name : </b><%= iecauths.Name %><br>
 					<b class="posh">Status : </b><%= iecauths.del_status %><br>
					<b class="posh">Address : </b><%= iecauths.Address %><br>
					<b class="posh">No_of_branches : </b><%= iecauths.No_of_branches %><br>
					<b class="posh">IECStatus : </b><%= iecauths.IECStatus %><br>
					<b class="posh">PAN : </b><%= iecauths.PAN %><br></td>
 	 		</tr>
			<% } else if( foundCart.items[i].title  === "IEC DETAILED PROFILE") { %>
			 <tr>
				<td><%= foundCart.items[i].title %></td>
				<td><b class="posh">IEC Detail NO : </b><%= iecdetaileds.input_iecdetail_no %></td>
				<td>
					<b class="posh">File Number :</b><%= iecdetaileds.iecdetailed_file_number %><br>
					<b class="posh">Bin Pan Extension :</b><%= iecdetaileds.iecdetailed_bin_pan_extension %><br>
					<b class="posh">Ie Code :</b><%= iecdetaileds.iecdetailed_ie_code %><br>
					<b class="posh">Iec Status :</b><%= iecdetaileds.iecdetailed_iec_status %><br>
					<b class="posh">No Of Branches :</b><%= iecdetaileds.iecdetailed_no_of_branches %><br>
					<%for (var x=0; x< iecdetaileds.iecdetailed_registration_details.length;x++){ %>
					<b class="posh">Reg Date :</b><%= iecdetaileds.iecdetailed_registration_details[x].reg_date %><br>
					<b class="posh">Reg No :</b><%= iecdetaileds.iecdetailed_registration_details[x].reg_no %><br>
					<b class="posh">Reg place :</b><%= iecdetaileds.iecdetailed_registration_details[x].reg_place %><br>
					<b class="posh">Reg Type :</b><%= iecdetaileds.iecdetailed_registration_details[x].reg_type %><br>
					<% } %>
					<b class="posh">Nature Of Concern :</b><%= iecdetaileds.iecdetailed_nature_of_concern %><br>
					<b class="posh">Del Status :</b><%= iecdetaileds.iecdetailed_del_status %><br>
					<%for (var y=0; y< iecdetaileds.iecdetailed_directors.length;y++){ %>
					<b class="posh">Contact No :</b><%= iecdetaileds.iecdetailed_directors[y].contact_no %><br>
					<b class="posh">Dir Name :</b><%= iecdetaileds.iecdetailed_directors[y].dir_name %><br>
					<b class="posh">Father Name :</b><%= iecdetaileds.iecdetailed_directors[y].father_name %><br>
					<b class="posh">Address :</b><%= iecdetaileds.iecdetailed_directors[y].address %><br>
					<% } %>
					<b class="posh">Party Name and Address :</b><%= iecdetaileds.iecdetailed_party_name_and_address %><br>
					<b class="posh">Pan :</b><%= iecdetaileds.iecdetailed_pan %><br>
					<b class="posh">Pan Issued By :</b><%= iecdetaileds.iecdetailed_pan_issued_by %><br>
					<b class="posh">Date of Establishment :</b><%= iecdetaileds.iecdetailed_date_of_establishment %><br>
					<b class="posh">Address :</b><%= iecdetaileds.iecdetailed_address %><br>
					<b class="posh">Allotment Date :</b><%= iecdetaileds.iecdetailed_iec_allotment_date %><br>
					<%for (var y=0; y< iecdetaileds.iecdetailed_branches.length;y++){ %>
					<b class="posh">Branch Code :</b><%= iecdetaileds.iecdetailed_branches[y].branch_code %><br>
					<b class="posh">Address :</b><%= iecdetaileds.iecdetailed_branches[y].address %><br>
					<% } %>
					<b class="posh">Name :</b><%= iecdetaileds.iecdetailed_name %><br>
					<b class="posh">E mail :</b><%= iecdetaileds.iecdetailed_e_mail %><br>
					<b class="posh">File Date :</b><%= iecdetaileds.iecdetailed_file_date %><br>
					<b class="posh">Phone No :</b><%= iecdetaileds.iecdetailed_phone_no %><br>
					<b class="posh">Exporter type :</b><%= iecdetaileds.iecdetailed_exporter_type %><br>
					<b class="posh">Pan Issue Date :</b><%= iecdetaileds.iecdetailed_pan_issue_date %><br>
					<b class="posh">Bank Name :</b><%= iecdetaileds.iecdetailed_bank_details.bank_name %><br>
					<b class="posh">Account Type :</b><%= iecdetaileds.iecdetailed_bank_details.account_type %><br>
					<b class="posh">Account Number :</b><%= iecdetaileds.iecdetailed_bank_details.account_number %><br>
					<%for (var y=0; y< iecdetaileds.iecdetailed_rcmc_details.length;y++){ %>
					<b class="posh">RCMC Type :</b><%= iecdetaileds.iecdetailed_rcmc_details[y].rcmc_type %><br>
					<b class="posh">RCMC No :</b><%= iecdetaileds.iecdetailed_rcmc_details[y].rcmc_no %><br>
					<b class="posh">RCMC Issued By :</b><%= iecdetaileds.iecdetailed_rcmc_details[y].rcmc_issued_by %><br>
					<b class="posh">RCMC Issue Date :</b><%= iecdetaileds.iecdetailed_rcmc_details[y].rcmc_issue_date %><br>
					<b class="posh">RCMC Exp Date :</b><%= iecdetaileds.iecdetailed_rcmc_details[y].rcmc_exp_date %><br>
					<% } %>
				</td>
			</tr>
				<% } else if( foundCart.items[i].title  === "COMPANY CIN") { %>
	 			 <tr>
	 	 			<td><%= foundCart.items[i].title %></td>
	 	 			<td><b class="posh">Company Name : </b><%= cins.company_name %><br></td>
	 	 			<td>
						<%for (var y=0; y< cins.result.length;y++){ %>
						<b class="posh">Company Name :</b><%= cins.result[y].companyName %><br>
						<b class="posh">CompanyID :</b><%= cins.result[y].companyID %><br>
						<% } %>
					</td>
				</tr>
				<% } else if( foundCart.items[i].title  === "COMPANY AND LLP IDENTIFICATION") { %>
					<tr>
	 	 			<td><%= foundCart.items[i].title %></td>
	 	 			<td><b class="posh">Cin No :</b><%= llpins.input_cin %></td>
	 	 			<td><b class="posh">Listed or Not :</b><%= llpins.Whether_Listed_or_not %><br>
	 					<b class="posh">Company Status :</b><%= llpins.Company_Status %><br>
	 					<b class="posh">ROC Code :</b><%= llpins.ROC_Code %><br>
	 					<b class="posh">Company SubCategory :</b><%= llpins.Company_SubCategory %><br>
	 					<b class="posh">Email Id :</b><%= llpins.Email_Id %><br>
	 					<b class="posh">Suspended at Stock Exchange :</b><%= llpins.Suspended_at_stock_exchange %><br>
	 					<b class="posh">Alternative Address :</b><%= llpins.alternative_address %><br>
	 					<b class="posh">Date of Balance Sheet :</b><%= llpins.Date_of_Balance_Sheet %><br>
	 					<b class="posh">cin :</b><%= llpins.cin %><br>
						<b class="posh">Authorised Capital :</b><%= llpins.Authorised_Capital %><br>
						<b class="posh">Company Category :</b><%= llpins.Company_Category %><br>
						<b class="posh">Date of last AGM  :</b><%= llpins.Date_of_last_AGM %><br>
						<b class="posh">Company Name :</b><%= llpins.Company_Name %><br>
						<b class="posh">Paid up Capital :</b><%= llpins.Paid_up_Capital %><br>
						<b class="posh">Registered Address :</b><%= llpins.Registered_Address %><br>
						<b class="posh">Number of Members :</b><%= llpins.Number_of_Members %><br>
						<b class="posh">Class of Company :</b><%= llpins.Class_of_Company %><br>
						<b class="posh">Registration Number :</b><%= llpins.Registration_Number %><br>
						<b class="posh">Date of Incorporation :</b><%= llpins.Date_of_Incorporation %><br>
						<b class="posh">St Code :</b><%= llpins.voter_st_code %><br></td>
	 	 		</tr>
				<% } else if( foundCart.items[i].title  === "UDYOG ADHAAR") { %>
					<tr>
	 	 			<td><b class="posh">Product :</b><%= foundCart.items[i].title %></td>
	 	 			<td><b class="posh">Uan No :</b><%= udyogs.input_uan_no %>
					<b class="posh">Adhaar No :</b><%= udyogs.input_adhaar_no %></td>
	 	 			<td><b class="posh">Pin :</b><%= udyogs.pin %><br>
	 					<b class="posh">Date OF Commencement :</b><%= udyogs.DateOFCommencement %><br>
	 					<b class="posh">Aadhar :</b><%= udyogs.aadhar %><br>
	 					<b class="posh">District :</b><%= udyogs.district %><br>
	 					<b class="posh">District Industry Centre :</b><%= udyogs.DistrictIndustryCentre %><br>
	 					<b class="posh">Name of EnterPrise :</b><%= udyogs.NameofEnterPrise %><br>
	 					<b class="posh">Number of Emp :</b><%= udyogs.NumberofEmp %><br>
	 					<b class="posh">state :</b><%= udyogs.state %><br>
	 					<b class="posh">Owner Name :</b><%= udyogs.OwnerName %><br>
						<b class="posh">Major Activity :</b><%= udyogs.MajorActivity %><br>
						<b class="posh">email :</b><%= udyogs.email %><br>
						<b class="posh">pan :</b><%= udyogs.pan %><br>
						<b class="posh">ifsc :</b><%= udyogs.ifsc %><br>
						<b class="posh">mobile :</b><%= udyogs.mobile %><br>
						<b class="posh">Address :</b><%= udyogs.address %><br>
						<b class="posh">Social Category :</b><%= udyogs.social_category %><br>
						<b class="posh">Account Number :</b><%= udyogs.AccountNumber %><br>
						<b class="posh">Ent Type :</b><%= udyogs.EntType %><br>
						<b class="posh">Type of org :</b><%= udyogs.type_of_org %><br>
						<b class="posh">Investment :</b><%= udyogs.Investment %><br>
						<b class="posh">NIC Digit Code :</b><%= udyogs.NIC_Digit_Code %><br></td>
	 	 		</tr>
				<% } else if( foundCart.items[i].title  === "GST IDENTIFICATION") { %>
					<tr>
	 	 			<td><b class="posh">Product :</b><%= foundCart.items[i].title %></td>
	 	 			<td><b class="posh">Uan No :</b><%= gstidentifications.input_uan_no %>
					<b class="posh">State :</b><%= gstidentifications.input_state %></td>
	 	 			<td><b class="posh">Email Id :</b><%= gstidentifications.emailId %><br>
	 					<b class="posh">Application Status :</b><%= gstidentifications.applicationStatus %><br>
	 					<b class="posh">Mob Num :</b><%= gstidentifications.mobNum %><br>
	 					<b class="posh">pan :</b><%= gstidentifications.pan %><br>
	 					<b class="posh">Gst in RefId :</b><%= gstidentifications.gstinRefId %><br>
	 					<b class="posh">Reg Type :</b><%= gstidentifications.regType %><br>
	 					<b class="posh">Gstin Id :</b><%= gstidentifications.gstinId %><br>
	 					<b class="posh">Registration Name :</b><%= gstidentifications.registrationName %><br>
	 					<b class="posh">Tin Number :</b><%= gstidentifications.tinNumber %><br></td>
	 	 		</tr>
				<% } else if( foundCart.items[i].title  === "GST AUTHENTICATION") { %>
					<tr>
	 	 			<td><b class="posh"><%= foundCart.items[i].title %></b></td>
	 	 			<td><b class="posh">GSTIN No :</b><%= gstauthentications.input_gstin %></td>
	 	 			<td><%for (var y=0; y< gstauthentications.mbr.length;y++){ %>
					<b class="posh">MBR :</b><%= gstauthentications.mbr[y] %><br>
					<% } %>
	 					<b class="posh">CmpRt :</b><%= gstauthentications.cmpRt %><br>
	 					<b class="posh">EM :</b><%= gstauthentications.pradr.em %><br>
	 					<b class="posh">NTR :</b><%= gstauthentications.pradr.ntr %><br>
	 					<b class="posh">ADR :</b><%= gstauthentications.pradr.adr %><br>
	 					<b class="posh">MB :</b><%= gstauthentications.pradr.mb %><br>
	 					<b class="posh">Contacted :</b><%= gstauthentications.contacted %><br>
	 					<b class="posh">STJ :</b><%= gstauthentications.stj %><br>
						<b class="posh">PPR :</b><%= gstauthentications.ppr %><br>
						<b class="posh">DTY :</b><%= gstauthentications.dty %><br>
						<b class="posh">RGDT :</b><%= gstauthentications.rgdt %><br>
						<b class="posh">CTB :</b><%= gstauthentications.ctb %><br>
						<b class="posh">STS :</b><%= gstauthentications.sts %><br>
						<b class="posh">GSTIN :</b><%= gstauthentications.gstin %><br>
						<%for (var y=0; y< gstauthentications.adadr.length;y++){ %>
						<b class="posh">ADADR EM :</b><%= gstauthentications.adadr[y].em %><br>
						<b class="posh">ADADR ADR :</b><%= gstauthentications.adadr[y].adr %><br>
						<b class="posh">ADADR ADDR :</b><%= gstauthentications.adadr[y].addr %><br>
						<b class="posh">ADADR MB :</b><%= gstauthentications.adadr[y].mb %><br>
						<b class="posh">ADADR NTR :</b><%= gstauthentications.adadr[y].ntr %><br>
						<b class="posh">ADADR Las tUpdated Date :</b><%= gstauthentications.adadr[y].lastUpdatedDate %><br>
						<% } %>
						<b class="posh">LGNM :</b><%= gstauthentications.lgnm %><br>
						<%for (var y=0; y< gstauthentications.nba.length;y++){ %>
						<b class="posh">NBA :</b><%= gstauthentications.nba[y] %><br>
						<% } %>
						<b class="posh">CTJ :</b><%= gstauthentications.ctj %><br>
						<b class="posh">CXDT :</b><%= gstauthentications.cxdt %><br></td>
	 	 		</tr>
				<% } else if( foundCart.items[i].title  === "SHOP AND ESTABLISHMENT") { %>
					<tr>
	 	 			<td><%= foundCart.items[i].title %></td>
	 	 			<td><b class="posh">registration :</b><%= shops.input_registration %>
					<b class="posh">areacode :</b><%= shops.input_areacode %></td>
	 	 			<td><b class="posh">category :</b><%= shops.category %><br>
	 					<b class="posh">status :</b><%= shops.status %><br>
	 					<b class="posh">Owner Name :</b><%= shops.owner_name %><br>
	 					<b class="posh">Entity Name :</b><%= shops.entity_name %><br>
	 					<b class="posh">Registration Date :</b><%= shops.registration_date %><br>
	 					<b class="posh">Valid To :</b><%= shops.valid_to %><br>
	 					<b class="posh">Contact :</b><%= shops.contact %><br>
	 					<b class="posh">Commence Date :</b><%= shops.commence_date %><br>
	 					<b class="posh">Total Workers :</b><%= shops.total_workers %><br>
						<b class="posh">Fathers Name of Occupier :</b><%= shops.fathers_name_of_occupier %><br>
						<b class="posh">Nature of Business :</b><%= shops.nature_of_business %><br>
						<b class="posh">Address  :</b><%= shops.address %><br>
						<b class="posh">Valid From :</b><%= shops.valid_from %><br>
						<b class="posh">Email :</b><%= shops.email %><br>
						<b class="posh">Website Url :</b><%= shops.website_url %><br></td>
	 	 		</tr>
				<% } else if( foundCart.items[i].title  === "FSSAI LICENSE") { %>
					<tr>
	 	 			<td><%= foundCart.items[i].title %></td>
	 	 			<td><b class="posh">registration :</b><%= fssais.input_reg_no %></td>
	 	 			<td><b class="posh">Status :</b><%= fssais.Status %><br>
	 					<b class="posh">LicType :</b><%= fssais.LicType %><br>
	 					<b class="posh">LicNO :</b><%= fssais.LicNO %><br>
	 					<b class="posh">Firm Name :</b><%= fssais.FirmName %><br>
	 					<b class="posh">Address :</b><%= fssais.Address %><br>
						</td>
	 	 		</tr>
				<% } else if( foundCart.items[i].title  === "MCI MEMBERSHIP") { %>
					<tr>
	 	 			<td><%= foundCart.items[i].title %></td>
	 	 			<td><b class="posh">registration :</b><%= mcis.registration_no %>
					<b class="posh">Year of Reg :</b><%= mcis.year_of_reg %>
				<b class="posh">Medical Council :</b><%= mcis.medical_council %></td>
	 	 			<td><b class="posh">Email Id :</b><%= mcis.emailId %><br>
	 					<b class="posh">Eligble To Vote :</b><%= mcis.eligbleToVote %><br>
	 					<b class="posh">Doctor Education Id :</b><%= mcis.doctorEducationId %><br>
	 					<b class="posh">Doct Registration No :</b><%= mcis.doctRegistrationNo %><br>
	 					<b class="posh">Photo :</b><%= mcis.photo %><br>
						<b class="posh">Parent Name :</b><%= mcis.parentName %><br>
						<b class="posh">University Id_view :</b><%= mcis.universityId_view %><br>
						<b class="posh">Reg Date :</b><%= mcis.regDate %><br>
						<b class="posh">Birth Date :</b><%= mcis.birthDate %><br>
						<b class="posh">Restored Status :</b><%= mcis.restoredStatus %><br>
						<b class="posh">University Id :</b><%= mcis.universityId %><br>
						<b class="posh">college :</b><%= mcis.college %><br>
						<b class="posh">year Of Passing :</b><%= mcis.yearOfPassing %><br>
						<b class="posh">address Line1 :</b><%= mcis.addressLine1 %><br>
						<b class="posh">salutation :</b><%= mcis.salutation %><br>
						<b class="posh">economic Status :</b><%= mcis.economicStatus %><br>
						<b class="posh">month Of Pass :</b><%= mcis.monthOfPass %><br>
						<b class="posh">other Subject :</b><%= mcis.otherSubject %><br>
						<b class="posh">city :</b><%= mcis.city %><br>
						<b class="posh">restored On :</b><%= mcis.restoredOn %><br>
						<b class="posh">uprn No :</b><%= mcis.uprnNo %><br>
						<b class="posh">middle Name :</b><%= mcis.middleName %><br>
						<b class="posh">registration No Previous :</b><%= mcis.registrationNoPrevious %><br>
						<b class="posh">trasanction Status :</b><%= mcis.trasanctionStatus %><br>
						<b class="posh">month and year Of Pass :</b><%= mcis.monthandyearOfPass %><br>
						<b class="posh">state :</b><%= mcis.state %><br>
						<b class="posh">year Info :</b><%= mcis.yearInfo %><br>
						<b class="posh">role :</b><%= mcis.role %><br>
						<b class="posh">removed On :</b><%= mcis.removedOn %><br>
						<b class="posh">catagory :</b><%= mcis.catagory %><br>
						<b class="posh">addressLine2 :</b><%= mcis.addressLine2 %><br>
						<b class="posh">registrationNo :</b><%= mcis.registrationNo %><br>
						<b class="posh">officeAddress :</b><%= mcis.officeAddress %><br>
						<b class="posh">smc Name Previous :</b><%= mcis.smcNamePrevious %><br>
						<b class="posh">registration Date :</b><%= mcis.registrationDate %><br>
						<b class="posh">addlqualuniv3 :</b><%= mcis.addlqualuniv3 %><br>
						<b class="posh">addlqualuniv2 :</b><%= mcis.addlqualuniv2 %><br>
						<b class="posh">addlqualuniv1 :</b><%= mcis.addlqualuniv1 %><br>
						<b class="posh">passoutCollege :</b><%= mcis.passoutCollege %><br>
						<b class="posh">birth Date Str :</b><%= mcis.birthDateStr %><br>
						<b class="posh">birth Place :</b><%= mcis.birthPlace %><br>
						<b class="posh">addlqual year3 :</b><%= mcis.addlqualyear3 %><br>
						<b class="posh">addlqual year1 :</b><%= mcis.addlqualyear1 %><br>
						<b class="posh">smcIds :</b><%= mcis.smcIds %><br>
						<b class="posh">doctorId :</b><%= mcis.doctorId %><br>
						<b class="posh">state Medical Council :</b><%= mcis.stateMedicalCouncil %><br>
						<b class="posh">Registration Date :</b><%= mcis.removedStatus %><br>
						<b class="posh">removed Status :</b><%= mcis.remarks %><br>
						<b class="posh">nationality :</b><%= mcis.nationality %><br>
						<b class="posh">check Existing User :</b><%= mcis.checkExistingUser %><br>
						<b class="posh">pincode :</b><%= mcis.pincode %><br>
						<b class="posh">officeaddress :</b><%= mcis.officeaddress %><br>
						<b class="posh">uprnNoPrevious :</b><%= mcis.uprnNoPrevious %><br>
						<b class="posh">phoneNo :</b><%= mcis.phoneNo %><br>
						<b class="posh">gender :</b><%= mcis.gender %><br>
						<b class="posh">firstName :</b><%= mcis.firstName %><br>
						<b class="posh">stateId :</b><%= mcis.stateId %><br>
						<b class="posh">isNewDoctor :</b><%= mcis.isNewDoctor %><br>
						<b class="posh">doctorDegree :</b><%= mcis.doctorDegree %><br>
						<b class="posh">university :</b><%= mcis.university %><br>
						<b class="posh">addlqualyear2 :</b><%= mcis.addlqualyear2 %><br>
						<b class="posh">smcName :</b><%= mcis.smcName %><br>
						<b class="posh">smcId :</b><%= mcis.smcId %><br>
						<b class="posh">adharNo :</b><%= mcis.adharNo %><br>
						<b class="posh">addlqual3 :</b><%= mcis.addlqual3 %><br>
						<b class="posh">addlqual2 :</b><%= mcis.addlqual2 %><br>
						<b class="posh">addlqual1 :</b><%= mcis.addlqual1 %><br>
						<b class="posh">lastName :</b><%= mcis.lastName %><br>
						<b class="posh">catagory_view :</b><%= mcis.catagory_view %><br>
						<b class="posh">bloodGroup :</b><%= mcis.bloodGroup %><br>
						<b class="posh">country :</b><%= mcis.country %><br>
						<b class="posh">collegeId :</b><%= mcis.collegeId %><br>
						<b class="posh">address :</b><%= mcis.address %><br>
						<b class="posh">regnNo :</b><%= mcis.regnNo %><br>
						</td>
	 	 		</tr>
				<% } else if( foundCart.items[i].title  === "FDA LICENSE") { %>
					<tr>
	 	 			<td><%= foundCart.items[i].title %></td>
	 	 			<td><b class="posh">fda :</b><%= fdas.input_fda %>
					<b class="posh">fda state :</b><%= fdas.input_fdastate %></td>
	 	 			<td><b class="posh">store name :</b><%= fdas.store_name %><br>
	 					<b class="posh">contact number :</b><%= fdas.contact_number %><br>
	 					<b class="posh">license_detail :</b><%= fdas.license_detail %><br>
	 					<b class="posh">name :</b><%= fdas.name %><br>
	 					<b class="posh">address :</b><%= fdas.address %><br>
						</td>
	 	 		</tr>
				<% } else if( foundCart.items[i].title  === "CA MEMBERSHIP") { %>
					<tr>
	 	 			<td><%= foundCart.items[i].title %></td>
	 	 			<td><b class="posh">membership no :</b><%= cas.membership_no %></td>
	 	 			<td><b class="posh">AssociateYear :</b><%= cas.AssociateYear %><br>
	 					<b class="posh">COPStatus :</b><%= cas.COPStatus %><br>
	 					<b class="posh">name :</b><%= cas.name %><br>
	 					<b class="posh">gender :</b><%= cas.gender %><br>
	 					<b class="posh">FellowYear :</b><%= cas.FellowYear %><br>
						<b class="posh">Qualification :</b><%= cas.Qualification %><br>
						<b class="posh">address :</b><%= cas.address %><br>
						</td>
	 	 		</tr>
				<% } else if( foundCart.items[i].title  === "ICSI MEMBERSHIP") { %>
					<tr>
	 	 			<td><%= foundCart.items[i].title %></td>
	 	 			<td><b class="posh">membership_no :</b><%= icsis.membership_no %>
					<b class="posh">cp_no :</b><%= icsis.cp_no %></td>
	 	 			<td><b class="posh">City :</b><%= icsis.City %><br>
	 					<b class="posh">Designation :</b><%= icsis.Designation %><br>
	 					<b class="posh">BenevolentMember :</b><%= icsis.BenevolentMember %><br>
	 					<b class="posh">Phone :</b><%= icsis.Phone %><br>
	 					<b class="posh">Membership Number :</b><%= icsis.MembershipNumber %><br>
						<b class="posh">Mob :</b><%= icsis.Mob %><br>
						<b class="posh">CP_Number :</b><%= icsis.CP_Number %><br>
						<b class="posh">address :</b><%= icsis.address %><br>
						<b class="posh">Organization :</b><%= icsis.Organization %><br>
						<b class="posh">Email :</b><%= icsis.Email %><br>
						</td>
	 	 		</tr>
				<% } else if( foundCart.items[i].title  === "ICWAI MEMBERSHIP") { %>
					<tr>
	 	 			<td><%= foundCart.items[i].title %></td>
	 	 			<td><b class="posh">membership_no :</b><%= icwais.membership_no %></td>
	 	 			<td><b class="posh">MemshipDt :</b><%= icwais.MemshipDt %><br>
	 					<b class="posh">Chapter :</b><%= icwais.Chapter %><br>
	 					<b class="posh">Retired :</b><%= icwais.Retired %><br>
	 					<b class="posh">dob :</b><%= icwais.dob %><br>
	 					<b class="posh">Mname :</b><%= icwais.Mname %><br>
						<b class="posh">ProtFirmName :</b><%= icwais.ProtFirmName %><br>
						<b class="posh">ValidUpDt :</b><%= icwais.ValidUpDt %><br>
						<b class="posh">MemCategory :</b><%= icwais.MemCategory %><br>
						<b class="posh">Fname :</b><%= icwais.Fname %><br>
						<b class="posh">gender :</b><%= icwais.gender %><br>
						<b class="posh">SrName :</b><%= icwais.SrName %><br>
						<b class="posh">EffectiveDt :</b><%= icwais.EffectiveDt %><br>
						<b class="posh">MemRegion :</b><%= icwais.MemRegion %><br>
						<b class="posh">CrtEmployer :</b><%= icwais.CrtEmployer %><br>
						<b class="posh">FirmEftDt :</b><%= icwais.FirmEftDt %><br>
						<b class="posh">CancellationDt :</b><%= icwais.CancellationDt %><br>
						</td>
	 	 		</tr>
				<% } else if( foundCart.items[i].title  === "EPF LAN AUTHENTICATION") { %>
					<tr>
	 	 			<td><%= foundCart.items[i].title %></td>
	 	 			<td><b class="posh">uan :</b><%= epfauths.input_uan %>
					<b class="posh">mobile_no :</b><%= epfauths.input_mobile_no %></td>
	 	 			<td><%for (var y=0; y< epfauths.est_details.length;y++){ %>
						<b class="posh">est_name :</b><%= epfauths.est_details[y].est_name %><br>
						<b class="posh">doe_epf :</b><%= epfauths.est_details[y].doe_epf %><br>
						<b class="posh">office :</b><%= epfauths.est_details[y].office %><br>
						<b class="posh">doj_epf :</b><%= epfauths.est_details[y].doj_epf %><br>
						<b class="posh">doe_eps :</b><%= epfauths.est_details[y].doe_eps %><br>
						<b class="posh">member_id :</b><%= epfauths.est_details[y].member_id %><br>
						<%for (var x=0; x< epfauths.est_details[y].passbook.length;y++){ %>
							<b class="posh">cr_pen_bal :</b><%= epfauths.est_details[y].passbook[x].cr_pen_bal %><br>
							<b class="posh">approved_on :</b><%= epfauths.est_details[y].passbook[x].approved_on %><br>
							<b class="posh">db_cr_flag :</b><%= epfauths.est_details[y].passbook[x].db_cr_flag %><br>
							<b class="posh">tr_approved :</b><%= epfauths.est_details[y].passbook[x].tr_approved %><br>
							<b class="posh">tr_date_my :</b><%= epfauths.est_details[y].passbook[x].tr_date_my %><br>
							<b class="posh">r_order :</b><%= epfauths.est_details[y].passbook[x].r_order %><br>
							<b class="posh">cr_ee_share :</b><%= epfauths.est_details[y].passbook[x].cr_ee_share %><br>
							<b class="posh">cr_er_share :</b><%= epfauths.est_details[y].passbook[x].cr_er_share %><br>
							<b class="posh">particular :</b><%= epfauths.est_details[y].passbook[x].particular %><br>
							<b class="posh">trrno :</b><%= epfauths.est_details[y].passbook[x].trrno %><br>
							<b class="posh">table_name :</b><%= epfauths.est_details[y].passbook[x].table_name %><br>
							<b class="posh">month_year :</b><%= epfauths.est_details[y].passbook[x].month_year %><br>
						<% } %><br>
					<% } %><br>
						<b class="posh">dob :</b><%= epfauths.employee_details.dob %><br>
						<b class="posh">father_name :</b><%= epfauths.employee_details.father_name %><br>
						<b class="posh">member_name :</b><%= epfauths.employee_details.member_name %><br>
						</td>
	 	 		</tr>
				<% } else if( foundCart.items[i].title  === "VEHICLE RC SEARCH") { %>
			 <tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">Engine Number: </b><%= vehicles.input_engine_no %><br>
					<b class="posh">Chassis Number: </b><%= vehicles.input_chassis %><br>
					<b class="posh">State: </b><%= vehicles.input_state %>
				</td>
	 			<td><b class="posh">Registration Number: </b><%= vehicles.rc_regn_no %><br>
	 				<b class="posh">Owner Name: </b><%= vehicles.rc_owner_name %><br>
	 				<b class="posh">Engine Number: </b><%= vehicles.rc_eng_no %><br>
	 				<b class="posh">Chasis Number: </b><%= vehicles.rc_chasi_no %><br>
	 				<b class="posh">Maker Description: </b><%= vehicles.rc_maker_desc %><br>
	 				<b class="posh">Maker Model: </b><%= vehicles.rc_maker_model %><br>
	 				<b class="posh">Registration Date: </b><%= vehicles.rc_regn_dt %><br>
	 				<b class="posh">Vehicle Class Desc.: </b><%= vehicles.rc_vh_class_desc %><br>
	 				<b class="posh">Vehicle Color: </b><%= vehicles.rc_color %><br>
	 				<b class="posh">Manufacturing Month Yr.: </b><%= vehicles.rc_manu_month_yr %><br>
				</td>
	 		</tr>
	 		<% } else if( foundCart.items[i].title  === "ELECTRICITY BILL AUTHENTICATION") { %>
			 <tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">Consumer Id: </b><%= electricities.input_consumer_id %><br>
					<b class="posh">Service Provider: </b><%= electricities.input_service_provider %><br>
				</td>
	 			<td><b class="posh">Consumer Name: </b><%= electricities.consumer_name %><br>
					<b class="posh">Consumer Number: </b><%= electricities.consumer_num %><br>
	 				<b class="posh">Address: </b><%= electricities.address %><br>
	 				<b class="posh">Bill Number: </b><%= electricities.bill_no %><br>
	 				<b class="posh">Bill Amount: </b><%= electricities.bill_amount %><br>
	 				<b class="posh">Amount Payable: </b><%= electricities.amount_payable %><br>
	 				<b class="posh">Total Amount: </b><%= electricities.total_amount %><br>
	 				<b class="posh">Bill Issue Date: </b><%= electricities.bill_issue_date %><br>
	 				<b class="posh">Bill Due Date: </b><%= electricities.bill_due_date %><br>
					<b class="posh">Bill Date: </b><%= electricities.bill_date %><br>
	 				<b class="posh">Mobile Number: </b><%= electricities.mobile_number %><br>
	 				<b class="posh">Email Address: </b><%= electricities.email_address %><br>

				</td>
	 		</tr>
	 		<% } else if( foundCart.items[i].title  === "LPG ID AUTHENTICATION") { %>
			 <tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">Lpg Id: </b><%= lpgids.input_lpg_id %></td>
	 			<td><b class="posh">Consumer Name: </b><%= lpgids.Consumername %><br>
	 				<b class="posh">Consumer Address: </b><%= lpgids.ConsumerAddress %><br>
	 				<b class="posh">Consumer Contact: </b><%= lpgids.ConsumerContact %><br>
	 				<b class="posh">Consumer Email: </b><%= lpgids.ConsumerEmail %><br>
	 				<b class="posh">Aadhaar No: </b><%= lpgids.AadhaarNo %><br>
	 				<b class="posh">status: </b><%= lpgids.status %><br>
	 				<b class="posh">Distributor Code: </b><%= lpgids.DistributorCode %><br>
	 				<b class="posh">Distributor Name: </b><%= lpgids.DistributorName %><br>
	 				<b class="posh">Distributor Address: </b><%= lpgids.DistributorAddress %><br>
	 				<b class="posh">Consumer No: </b><%= lpgids.ConsumerNo %><br>
	 				<b class="posh">BankAccount No: </b><%= lpgids.BankAccountNo %><br>
	 				<b class="posh">Bank Name: </b><%= lpgids.BankName %><br>
	 				<b class="posh">IFSC Code: </b><%= lpgids.IFSCCode %><br>
	 				<b class="posh">city: </b><%= lpgids.city %><br>
	 				<b class="posh">pin: </b><%= lpgids.pin %><br>
	 				<b class="posh">GivenUp Subsidy: </b><%= lpgids.GivenUpSubsidy %><br>
	 				<b class="posh">Subsidized Refill Consumed: </b><%= lpgids.SubsidizedRefillConsumed %><br>
	 				<b class="posh">Approximate Subsidy Availed: </b><%= lpgids.ApproximateSubsidyAvailed %><br>
	 				<b class="posh">Last Booking Date: </b><%= lpgids.LastBookingDate %><br>
	 				<b class="posh">Total Refill Consumed: </b><%= lpgids.TotalRefillConsumed %><br>
				</td>
	 		</tr>
	 		<% } else if( foundCart.items[i].title  === "VEHICLE RC AUTHENTICATION") { %>
			 <tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">Registration Number: </b><%= rcauths.input_rcauth %><br>
				</td>
	 			<td><b class="posh">Engine Number: </b><%= rcauths.rc_eng_no %><br>
	 				<b class="posh">Vehicle Desc.: </b><%= rcauths.rc_vh_class_desc %><br>
	 				<b class="posh">Present Address: </b><%= rcauths.rc_present_address %><br>
	 				<b class="posh">Registered Address: </b><%= rcauths.rc_registered_at %><br>
	 				<b class="posh">Registration Date: </b><%= rcauths.rc_regn_dt %><br>
	 				<b class="posh">Insurance: </b><%= rcauths.rc_insurance_comp %><br>
	 				<b class="posh">Color: </b><%= rcauths.rc_color %><br>
	 				<b class="posh">Manufacturing Month: </b><%= rcauths.rc_manu_month_yr %><br>
	 				<b class="posh">Sleeper Capacity: </b><%= rcauths.rc_sleeper_cap %><br>
	 				<b class="posh">Maker Description: </b><%= rcauths.rc_maker_desc %><br>
	 				<b class="posh">Status: </b><%= rcauths.rc_status_as_on %><br>
	 				<b class="posh">Insurance Upto: </b><%= rcauths.rc_insurance_upto %><br>
	 				<b class="posh">Cubic Cap.: </b><%= rcauths.rc_cubic_cap %><br>
	 				<b class="posh">Owner Sr: </b><%= rcauths.rc_owner_sr %><br>
	 				<b class="posh">Permanant Address: </b><%= rcauths.rc_permanent_address %><br>
	 				<b class="posh">Financer: </b><%= rcauths.rc_financer %><br>
	 				<b class="posh">Owner Name: </b><%= rcauths.rc_owner_name %><br>
	 				<b class="posh">Fianancer name: </b><%= rcauths.rc_f_name %><br>
	 				<b class="posh">Unload Weight: </b><%= rcauths.rc_unld_wt %><br>
	 				<b class="posh">Chasis Number: </b><%= rcauths.rc_chasi_no %><br>
	 				<b class="posh">Maker Model: </b><%= rcauths.rc_maker_model %><br>
	 				<b class="posh">GVW: </b><%= rcauths.rc_gvw %><br>
	 				<b class="posh">Tax Upto: </b><%= rcauths.rc_tax_upto %><br>
	 				<b class="posh">Standing Capacity: </b><%= rcauths.rc_stand_cap %><br>
	 				<b class="posh">Fit upto: </b><%= rcauths.rc_fit_upto %><br>
	 				<b class="posh">stauts Message: </b><%= rcauths.stautsMessage %><br>
	 				<b class="posh">Insurance policy: </b><%= rcauths.rc_insurance_policy_no %><br>
	 				<b class="posh">Body type Desc.: </b><%= rcauths.rc_body_type_desc %><br>
	 				<b class="posh">Wheel Base: </b><%= rcauths.rc_wheelbase %><br>
	 				<b class="posh">Norms Desc.: </b><%= rcauths.rc_norms_desc %><br>
	 				<b class="posh">Regn Number: </b><%= rcauths.rc_regn_no %><br>
	 				<b class="posh">Fuel Description: </b><%= rcauths.rc_fuel_desc %><br>
	 				<b class="posh">Cylinder: </b><%= rcauths.rc_no_cyl %><br>
	 				<b class="posh">Seat Capacity: </b><%= rcauths.rc_seat_cap %><br>

				</td>
	 		</tr>
			<% } else if( foundCart.items[i].title  === "TELEPHONE BILL AUTHENTICATION") { %>
			 <tr>
	 			<td><%= foundCart.items[i].title %></td>
				<td><b class="posh">Name: </b><%= telephones.input_tel_no %><br></td>
	 			<td><b class="posh">Name: </b><%= telephones.name %><br>
					<b class="posh">Address: </b><%= telephones.Address %><br>
					<b class="posh">Telephone Number: </b><%= telephones.TelephoneNo %><br>
					<b class="posh">Category: </b><%= telephones.category %><br>
					<b class="posh">Installation Type: </b><%= telephones.Installation_Type %><br>
				</td>
	 		</tr>

	 		<% } else if( foundCart.items[i].title  === "EMAIL AUTHENTICATION") { %>
			 <tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">Email: </b><%= emailauths.email %>
				</td>
				<td>
					<%for (var y=0; y< emailauths.meta.length;y++){ %>
				<b class="posh">Email :</b><%= emailauths.meta[y].params.email %><br>
				<% } %>
				<%for (var y=0; y< emailauths.data.length;y++){ %>
				<b class="posh">Disposable :</b><%= emailauths.data[y].disposable %><br>
				<b class="posh">webmail :</b><%= emailauths.data[y].webmail %><br>
				<b class="posh">result :</b><%= emailauths.data[y].result %><br>
				<b class="posh">Accept :</b><%= emailauths.data[y].accept_all %><br>
				<b class="posh">SMTP check :</b><%= emailauths.data[y].smtp_check %><br>
				<b class="posh">Regexp :</b><%= emailauths.data[y].regexp %><br>
				<b class="posh">Mx Records :</b><%= emailauths.data[y].mx_records %><br>
				<b class="posh">Email :</b><%= emailauths.data[y].email %><br>
				<% } %>

				</td>
	 		</tr>
	 		<% } else if( foundCart.items[i].title  === "NAME SIMILARITY") { %>
			<tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">Name1: </b><%= names.input_name1 %><br>
					<b class="posh">Name2: </b><%= names.input_name2 %><br>
				</td><b class="posh">Result: </b><%= names.result %></td>
	 		</tr>
	 		<% } else if( foundCart.items[i].title  === "IFSC CODE CHECK") { %>
			<tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">ifsc: </b><%= ifscs.input_ifsc %><br>
	 			</td>
	 			<td>
					<b class="posh">city: </b><%= ifscs.city %><br>
					<b class="posh">district: </b><%= ifscs.district %><br>
					<b class="posh">ifsc: </b><%= ifscs.output_ifsc %><br>
					<b class="posh">micr: </b><%= ifscs.micr %><br>
					<b class="posh">state: </b><%= ifscs.state %><br>
					<b class="posh">contact: </b><%= ifscs.contact %><br>
					<b class="posh">branch: </b><%= ifscs.branch %><br>
					<b class="posh">address: </b><%= ifscs.address %><br>
					<b class="posh">bank: </b><%= ifscs.bank %><br>
			</td>
	 		</tr>
	 		<% } else if( foundCart.items[i].title  === "HSN CODE CHECK") { %>
			<tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">ifsc: </b><%= hsns.input_hsn %><br>
	 			</td>
	 			<td>
					<b class="posh">policy Link: </b><%= hsns.policyLink %><br>
					<b class="posh">chapter Notes: </b><%= hsns.chapterNotes %><br>
					<b class="posh">heading Desc: </b><%= hsns.headingDesc %><br>
					<b class="posh">section Desc: </b><%= hsns.sectionDesc %><br>
					<b class="posh">item Desc2: </b><%= hsns.itemDesc2 %><br>
					<b class="posh">item Desc1: </b><%= hsns.itemDesc1 %><br>
					<b class="posh">chapter No: </b><%= hsns.chapterNo %><br>
					<b class="posh">policy: </b><%= hsns.policy %><br>
					<b class="posh">chapter Desc: </b><%= hsns.chapterDesc %><br>
					<b class="posh">policy Conditions: </b><%= hsns.policyConditions %><br>
					<b class="posh">section No: </b><%= hsns.sectionNo %><br>

			</td>
	 		</tr>
	 		<% } else if( foundCart.items[i].title  === "WEB DOMAIN AUTHENTICATION") { %>
			 <tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">Web Domain: </b><%= webdomains.input_domain %>
				</td>
				<td>
					<%for (var y=0; y< webdomains.domain.length;y++){ %>
				<b class="posh">Domain Name :</b><%= webdomains.domain[y].name %><br>
				<% } %>
				<b class="posh">Update Date :</b><%= webdomains.update_date %><br>
				<b class="posh">Expiration Date :</b><%= webdomains.expiration_date %><br>
				<b class="posh">Creation Date :</b><%= webdomains.creation_date %><br>
				<%for (var y=0; y< webdomains.admin.length;y++){ %>
				<b class="posh">Admin City :</b><%= webdomains.admin[y].city %><br>
				<b class="posh">Admin fax :</b><%= webdomains.admin[y].fax %><br>
				<b class="posh">Admin name :</b><%= webdomains.admin[y].name %><br>
				<b class="posh">Admin country :</b><%= webdomains.admin[y].country %><br>
				<b class="posh">Admin stateprovince :</b><%= webdomains.admin[y].stateprovince %><br>
				<b class="posh">Admin phone :</b><%= webdomains.admin[y].phone %><br>
				<b class="posh">Admin street :</b><%= webdomains.admin[y].street %><br>
				<b class="posh">Admin organization :</b><%= webdomains.admin[y].organization %><br>
				<b class="posh">Admin postal :</b><%= webdomains.admin[y].postal %><br>
				<b class="posh">Admin email :</b><%= webdomains.admin[y].email %><br>
				<% } %>
				<%for (var y=0; y< webdomains.tech.length;y++){ %>
				<b class="posh">tech City :</b><%= webdomains.tech[y].city %><br>
				<b class="posh">tech fax :</b><%= webdomains.tech[y].fax %><br>
				<b class="posh">tech name :</b><%= webdomains.tech[y].name %><br>
				<b class="posh">tech country :</b><%= webdomains.tech[y].country %><br>
				<b class="posh">tech stateprovince :</b><%= webdomains.tech[y].stateprovince %><br>
				<b class="posh">tech phone :</b><%= webdomains.tech[y].phone %><br>
				<b class="posh">tech street :</b><%= webdomains.tech[y].street %><br>
				<b class="posh">tech organization :</b><%= webdomains.tech[y].organization %><br>
				<b class="posh">tech postal :</b><%= webdomains.tech[y].postal %><br>
				<b class="posh">tech email :</b><%= webdomains.tech[y].email %><br>
				<% } %>
				<%for (var y=0; y< webdomains.registry.length;y++){ %>
				<b class="posh">registry phone :</b><%= webdomains.registry[y].phone %><br>
				<b class="posh">registry expiry :</b><%= webdomains.registry[y].expiry %><br>
				<b class="posh">registry  id :</b><%= webdomains.registry[y].id %><br>
				<b class="posh">registry email :</b><%= webdomains.registry[y].email %><br>
				<% } %>
				<%for (var y=0; y< webdomains.registrar.length;y++){ %>
				<b class="posh">registrar phone :</b><%= webdomains.registrar[y].phone %><br>
				<b class="posh">registrar email :</b><%= webdomains.registrar[y].email %><br>
				<b class="posh">registrar id :</b><%= webdomains.registrar[y].id %><br>
				<% } %>
				<%for (var y=0; y< webdomains.nameserver.length;y++){ %>
				<b class="posh">server name :</b><%= webdomains.nameserver[y].name %><br>
				<% } %>
				<%for (var y=0; y< webdomains.registrant.length;y++){ %>
				<b class="posh">registrant City :</b><%= webdomains.registrant[y].city %><br>
				<b class="posh">registrant fax :</b><%= webdomains.registrant[y].fax %><br>
				<b class="posh">registrant name :</b><%= webdomains.registrant[y].name %><br>
				<b class="posh">registrant country :</b><%= webdomains.registrant[y].country %><br>
				<b class="posh">registrant stateprovince :</b><%= webdomains.registrant[y].stateprovince %><br>
				<b class="posh">registrant phone :</b><%= webdomains.registrant[y].phone %><br>
				<b class="posh">registrant street :</b><%= webdomains.registrant[y].street %><br>
				<b class="posh">registrant organization :</b><%= webdomains.registrant[y].organization %><br>
				<b class="posh">registrant postal :</b><%= webdomains.registrant[y].postal %><br>
				<b class="posh">registrant email :</b><%= webdomains.registrant[y].email %><br>
				<% } %>

				</td>
	 		</tr>
	 		<% } else if( foundCart.items[i].title  === "EPF UAN") { %>
			<tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">Mobile Number: </b><%= epfuans.mobile %><br>
	 			</td>
	 			<td>
					<b class="posh">UAN: </b><%= epfuans.uan %>
			</td>
	 		</tr>
	 		<% } else if( foundCart.items[i].title  === "EMPLOYER LOOKUP") { %>
			<tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">UAN: </b><%= employers.uan %><br>
	 			</td>
	 			<td>
					<b class="posh">Membership Id: </b><%= employers.membershipId %><br>
					<b class="posh">Settelment: </b><%= employers.settelment %><br>
					<b class="posh">Est Name : </b><%= employers.estName %><br>
			</td>
	 		</tr>
	 		<% } else if( foundCart.items[i].title  === "PNG AUTHENTICATION") { %>
			<tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">Consumer Id: </b><%= pngs.consumer_id %><br>
	 				<b class="posh">BP Number: </b><%= pngs.bp_no %><br>
	 				<b class="posh">ServiceProvider: </b><%= pngs.service_provider %><br>
	 			</td>
	 			<td>
					<b class="posh">Bill No: </b><%= pngs.Bill_No %><br>
					<b class="posh">Due Date: </b><%= pngs.Due_Date %><br>
					<b class="posh">Bill Amount: </b><%= pngs.Bill_Amount %><br>
					<b class="posh">Mobile : </b><%= pngs.mobile %><br>
					<b class="posh">Customer Address: </b><%= pngs.Customer_Address %><br>
					<b class="posh">Bill Date: </b><%= pngs.Bill_Date %><br>
					<b class="posh">Email : </b><%= pngs.Email %><br>
					<b class="posh">Customer Name: </b><%= pngs.Customer_Name %>
			</td>
	 		</tr>

	 		<% } else if( foundCart.items[i].title  === "FORM 16 AUTHENTICATION") { %>
			<tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">TAN: </b><%= form16auths.tan %><br>
	 				<b class="posh">PAN: </b><%= form16auths.pan %><br>
	 				<b class="posh">Certificate Number: </b><%= form16auths.cert_no %><br>
	 				<b class="posh">TDS Amount: </b><%= form16auths.amount %><br>
	 				<b class="posh">Fiscal Year: </b><%= form16auths.fiscal_year %><br>
	 			</td>
	 			<td>
					<b class="posh">Status: </b><%= form16auths.status %>
			</td>
	 		</tr>
	 		<% } else if( foundCart.items[i].title  === "ITR AUTHENTICATION") { %>
			<tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">PAN: </b><%= itrauths.pan %><br>
	 				<b class="posh">Acknowledge: </b><%= itrauths.ack %><br>
	 			</td>
	 			<td>
	 				<b class="posh">validity: </b><%= itrauths.validity %><br>
					<b class="posh">Status: </b><%= itrauths.status %>
			</td>
	 		</tr>
	 		<% } else if( foundCart.items[i].title  === "FORM 16 QUATERLY") { %>
			<tr>
	 			<td><%= foundCart.items[i].title %></td>
	 			<td><b class="posh">TAN: </b><%= form16quarters.tan %><br>
	 				<b class="posh">PAN: </b><%= form16quarters.pan %><br>
	 				<b class="posh">Fiscal Year: </b><%= form16quarters.fiscal_year %><br>
	 			</td>
	 			<td>
	 				<%for (var y=0; y< form16quarters.quarterly_records_count_for_next_fiscal.length;y++){ %>
				<b class="posh">Quarter 1 :</b><%= form16quarters.quarterly_records_count_for_next_fiscal[y].Q-1 %><br>
				<b class="posh">Quarter 2 :</b><%= form16quarters.quarterly_records_count_for_next_fiscal[y].Q-2 %><br>
				<b class="posh">Quarter 3 :</b><%= form16quarters.quarterly_records_count_for_next_fiscal[y].Q-3 %><br>
				<b class="posh">Quarter 4 :</b><%= form16quarters.quarterly_records_count_for_next_fiscal[y].Q-4 %><br>

				<% } %>
			</td>
	 		</tr>
			<% } else if( foundCart.items[i].title  === "BANK ACCOUNT VERIFICATION") { %>
    <tr>
			<td><%= foundCart.items[i].title %></td>
			<td><b class="posh">IFSC: </b><%= banks.input_ifsc %><br>
				<b class="posh">Account Number:</b><%= banks.input_account %>
			</td>
			<td><b class="posh">Bank TXN status:</b><%= banks.bankTxnStatus %><br>
				<b class="posh">Account Number:</b><%= banks.accountNumber %><br>
				<b class="posh">IFSC:</b><%= banks.ifsc %><br>
				<b class="posh">Account Name:</b><%= banks.accountName %><br>
				<b class="posh">Bank Response:</b><%= banks.bankResponse %><br>
			</td>
		</tr>
		<% } else if( foundCart.items[i].title  === "ICWAI FIRM") { %>
		<tr>
			<td><%= foundCart.items[i].title %></td>
			<td><b class="posh">ICWAI INPUT: </b><%= icwaifirms.input_icwaifirm %><br>
			</td>
			<td>
				<b class="posh">Approval Date:</b><%= icwaifirms.approvalDate %><br>
				<b class="posh">Firm Type:</b><%= icwaifirms.FirmType %><br>
				<b class="posh">Firm Name:</b><%= icwaifirms.FirmName %><br>
				<b class="posh">Pin:</b><%= icwaifirms.Pin %><br>
				<b class="posh">City:</b><%= icwaifirms.City %><br>
				<b class="posh">Region:</b><%= icwaifirms.Region %><br>
				<b class="posh">Address:</b><%= icwaifirms.Address %><br>
				<%for (var y=0; y< icwaifirms.MemberDetails.length;y++){ %>
			<b class="posh">City :</b><%= icwaifirms.MemberDetails[y].City %><br>
			<b class="posh">MemberNo :</b><%= icwaifirms.MemberDetails[y].MemberNo %><br>
			<b class="posh">Pin :</b><%= icwaifirms.MemberDetails[y].Pin %><br>
			<b class="posh">MemberName :</b><%= icwaifirms.MemberDetails[y].MemberName %><br>
			<b class="posh">State :</b><%= icwaifirms.MemberDetails[y].State %><br>
			<b class="posh">Address :</b><%= icwaifirms.MemberDetails[y].Address %><br>

			<% } %>
			<b class="posh">deedDt:</b><%= icwaifirms.deedDt %><br>
			<b class="posh">State:</b><%= icwaifirms.State %><br>
			<b class="posh">Contact:</b><%= icwaifirms.Contact %><br>
			<b class="posh">mobile:</b><%= icwaifirms.mobile %><br>
			<b class="posh">ldt:</b><%= icwaifirms.ldt %><br>
			<b class="posh">Dist:</b><%= icwaifirms.Dist %><br>
			<b class="posh">email:</b><%= icwaifirms.email %><br>
		</td>
		</tr>
		<% } else if( foundCart.items[i].title  === "TAN DETAILED") { %>
	<tr>
		<td><%= foundCart.items[i].title %></td>
		<td><b class="posh">IFSC: </b><%= tandetaileds.input_ifsc %><br>
		</td>
		<td><b class="posh">Bank TXN status:</b><%= tandetaileds.ao.ao_emailId %><br>
			<b class="posh">Account Number:</b><%= tandetaileds.ao.ao_aoType %><br>
			<b class="posh">IFSC:</b><%= tandetaileds.ao.ao_buildingName %><br>
			<b class="posh">Account Name:</b><%= tandetaileds.ao.ao_areaCode %><br>
			<b class="posh">Bank Response:</b><%= tandetaileds.ao.ao_rangeCode %><br>
			<b class="posh">Bank Response:</b><%= tandetaileds.ao.ao_aoDescription %><br>
			<b class="posh">Bank Response:</b><%= tandetaileds.ao.ao_aoNumber %><br>
			<b class="posh">Bank Response:</b><%= tandetaileds.entity.entity_categoryOfDeductor %><br>
			<b class="posh">Bank Response:</b><%= tandetaileds.entity.entity_name %><br>
			<b class="posh">Bank Response:</b><%= tandetaileds.entity.entity_emailId1 %><br>
			<b class="posh">Bank Response:</b><%= tandetaileds.entity.entity_emailId2 %><br>
			<b class="posh">Bank Response:</b><%= tandetaileds.entity.entity_address %><br>
			<b class="posh">Bank Response:</b><%= tandetaileds.entity.entity_statusOfTan %><br>
			<b class="posh">Bank Response:</b><%= tandetaileds.entity.entity_tan %><br>
			<b class="posh">Bank Response:</b><%= tandetaileds.entity.entity_pan %><br>
		</td>
	</tr>


	</table>
	<% } %>
	<script>
var n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();


document.getElementById("ddate").innerHTML = d + "/" + m + "/" + y ;
</script>
</body>



</script>
</html>

<% } %>
