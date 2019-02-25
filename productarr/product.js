var Product = require('../models/product');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var products = [new Product ({
   id_new: 1,
   title :'PAN CARD VERIFICATION',
   price :1,
   form:'FORM1'
}),
new Product ({
  id_new: 2,
   title :'ADHAAR CARD AUTHENTICATION',
   price :1,
    form:'FORM2'
}),
new Product ({
id_new: 3,
   title :'DRIVING LICENSE AUTHENTICATION',
   price :1,
    form:'FORM3'
}),
new Product ({
id_new: 4,
   title :'VOTER IDENTIFICATION',
   price:1,
    form:'FORM4'
}),
new Product ({
id_new: 5,
   title :'NREGA',
   price :1,
    form:'FORM5'
}),
new Product ({
id_new: 6,
   title :'PASSPORT AUTHENTICATION',
   price :1,
   form:'FORM6'
}),

new Product ({
id_new: 7,
   title :'TAN AUTHENTICATION',
   price :1,
   form:'FORM7'
}),
new Product ({
id_new: 8,
   title :'MCA SIGNATORIES',
   price :1,
   form:'FORM8'
}),
new Product ({
id_new: 9,
   title :'COMPANY SEARCH BY NAME',
   price :3,
   form:'FORM9'
}),
new Product ({
id_new: 10,
   title :'IMPORT EXPORT CODE',
   price :1,
   form:'FORM10'
}),
new Product ({
id_new: 11,
   title :'IEC DETAILED PROFILE',
   price :3,
   form:'FORM11'
}),
new Product ({
id_new: 12,
   title :'COMPANY CIN',
   price :3,
   form:'FORM12'
}),
new Product ({
id_new: 13,
   title :'COMPANY AND LLP IDENTIFICATION',
   price :3,
   form:'FORM13'
}),
new Product ({
id_new: 14,
   title :'UDYOG ADHAAR',
   price :3,
   form:'FORM14'
}),
// new Product ({
// id_new: 15,
//    title :'GST IDENTIFICATION',
//    price :3,
//    form:'FORM15'
// }),
new Product ({
id_new: 16,
   title :'GST AUTHENTICATION',
   price :3,
   form:'FORM16'
}),
new Product ({
id_new: 17,
   title :'SHOP AND ESTABLISHMENT',
   price :3,
   form:'FORM17'
}),
new Product ({
id_new: 18,
   title :'FSSAI LICENSE',
   price :3,
   form:'FORM18'
}),
new Product ({
id_new: 19,
   title :'FDA LICENSE',
   price :3,
   form:'FORM19'
}),
// new Product ({
// id_new: 20,
//    title :'CA MEMBERSHIP',
//    price :3,
//    form:'FORM20'
// }),
// new Product ({
// id_new: 21,
//    title :'ICSI MEMBERSHIP',
//    price :3,
//    form:'FORM21'
// }),
// new Product ({
// id_new: 22,
//    title :'ICWAI MEMBERSHIP',
//    price :3,
//    form:'FORM22'
// }),
new Product ({
id_new: 23,
   title :'MCI MEMBERSHIP',
   price :3,
   form:'FORM23'
}),
new Product ({
id_new: 24,
   title :'PNG AUTHENTICATION',
   price :3,
   form:'FORM24'
}),
new Product ({
id_new: 25,
   title :'ELECTRICITY BILL AUTHENTICATION',
   price :3,
   form:'FORM25'
}),
// new Product ({
// id_new: 26,
//    title :'TELEPHONE BILL AUTHENTICATION',
//    price :3,
//    form:'FORM26'
// }),
// new Product ({
// id_new: 27,
//    title :'LPG ID AUTHENTICATION',
//    price :3,
//    form:'FORM27'
// }),
// new Product ({
// id_new: 28,
//    title :'EPF LAN AUTHENTICATION',
//    price :3,
//    form:'FORM28'
// }),
new Product ({
id_new: 29,
   title :'ESICID AUTHENTICATION',
   price :3,
   form:'FORM29'
}),
new Product ({
id_new: 30,
   title :'FORM 16 AUTHENTICATION',
   price :3,
   form:'FORM30'
}),
new Product ({
id_new: 31,
   title :'FORM 16 QUATERLY',
   price :3,
   form:'FORM31'
}),
// new Product ({
// id_new: 32,
//    title :'ITR AUTHENTICATION',
//    price :3,
//    form:'FORM32'
// }),
// new Product ({
// id_new: 33,
//    title :'ADDRESS MATCHING',
//    price :3,
//    form:'FORM33'
// }),
new Product ({
id_new: 34,
   title :'EMAIL AUTHENTICATION',
   price :3,
   form:'FORM34'
}),
new Product ({
id_new: 35,
   title :'NAME SIMILARITY',
   price :3,
   form:'FORM35'
}),
new Product ({
id_new: 36,
   title :'IFSC CODE CHECK',
   price :3,
   form:'FORM36'
}),
new Product ({
id_new: 37,
   title :'BANK ACCOUNT VERIFICATION',
   price :3,
   form:'FORM37'
}),
new Product ({
id_new: 38,
   title :'HSN CODE CHECK',
   price :3,
   form:'FORM38'
}),
// new Product ({
// id_new: 39,
//    title :'FACE MATCHING',
//    price :3,
//    form:'FORM39'
// }),
new Product ({
id_new: 40,
   title :'WEB DOMAIN AUTHENTICATION',
   price :3,
   form:'FORM40'
}),
new Product ({
id_new: 41,
   title :'VEHICLE RC AUTHENTICATION',
   price :3,
   form:'FORM41'
}),
// new Product ({
// id_new: 42,
//    title :'VEHICLE RC SEARCH',
//    price :3,
//    form:'FORM42'
// }),
new Product ({
id_new: 43,
   title :'EMPLOYER LOOKUP ',
   price :3,
   form:'FORM43'
}),
new Product ({
id_new: 44,
   title :'EPF UAN',
   price :3,
   form:'FORM44'
}),
// new Product ({
// id_new: 45,
//    title :'ICWAI FIRM',
//    price :3,
//    form:'FORM45'
// }),
// new Product ({
// id_new: 46,
//    title :'TAN DETAILED',
//    price :3,
//    form:'FORM46'
// }),


]
// var done = 0;
// for(var i=0; i< products.length; i++){
//   products[i].save(function(err,result){
//     done++;
//     if(done === products.length){
//       exit();
//     }
//   });
// }
// function exit(){
//   mongoose.disconnect;
// }
