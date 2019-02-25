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


router.post('/index16', async (req, res, next) => {
  try {
    var userId = req.user._id;
    var gsti = req.body.tingst;

    const config = {
      headers: {
        'cache-control': 'no-cache',
        'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
        'content-type': 'application/json'
      }
    };

    const data = {
      consent: 'Y',
      gstin: req.body.tingst
    }

    const response = await axios.post('https://testapi.karza.in/v2/gstdetailed', data, config);

    switch (response.data['status-code']) {
      case "102":
        throw APIError.Error102();
        break;
      case "103":
        throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
        break;
      case "400":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error400();
        console.log(Error)
        break;
      case "401":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error401();
        break;
      case "402":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error402();
        break;
      case "500":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.InternalServerError();
        break;
      case "503":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error503();
        break;
      case "504":
       Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
        throw APIError.Error504();
        break;
      case "101":
      console.log(response.data)

      System.findOne({company_branch:req.user._id},function(err,system){
        system.Gst_Authentication_count = system.Gst_Authentication_count + 1;
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
            yesterday.Gst_Authentication_count = day.Gst_Authentication_count;
            yesterday.save(function(err,yesterday){
              if (err) {
                  return next(err);
              }
            })
          day.date = wah;
          day.Gst_Authentication_count = day.Gst_Authentication_count + 1;
          day.save(function (err, day) {
              if (err) {
                  return next(err);
              }
              console.log(day)
            });
          })
        }

    });


    var mbr=[];
    var canflag=[];
    var pradr_em=[];
    var pradr_adr=[];
    var pradr_addr=[];
    var pradr_mb=[];
    var pradr_ntr=[];
    var pradr_lastupdateddate=[];
    var tradenam=[];
    var contacted=[];
    var gstin=[];
    var nba=[];
    var stjcd=[];
    var stj=[];
    var ppr=[];
    var dty=[];
    var cmprt=[];
    var lstupdt=[];
    var ctb=[];
    var sts=[];
    var cxdt=[];
    var adadr=[];
    var lgnm=[];
    var ctjcd=[];
    var ctj=[];
    var rgdt=[];

    for(var i=0; i< response.data.result.mbr.length; i++){
      mbr.push(response.data.result.mbr[i]);
      }


    canflag.push(response.data.result.canFlag);
    pradr_em.push(response.data.result.pradr.em);
    pradr_adr.push(response.data.result.pradr.adr);
    pradr_addr.push(response.data.result.pradr.addr);
    pradr_mb.push(response.data.result.pradr.mb);
    pradr_ntr.push(response.data.result.pradr.ntr);
    pradr_lastupdateddate.push(response.data.result.pradr.lastupdateddate);
    tradenam.push(response.data.result.tradeNam);
    contacted.push(response.data.result.contacted);
    gstin.push(response.data.result.gstin);
    nba.push(response.data.result.nba);
    stjcd.push(response.data.result.stjCd);
    stj.push(response.data.result.stj);
    ppr.push(response.data.result.ppr);
    dty.push(response.data.result.dty);
    cmprt.push(response.data.result.cmpRt);
    lstupdt.push(response.data.result.lstupdt);
    ctb.push(response.data.result.ctb);
    sts.push(response.data.result.sts);
    cxdt.push(response.data.result.cxdt);
    adadr.push(response.data.result.adadr);
    lgnm.push(response.data.result.lgnm);
    ctjcd.push(response.data.result.ctjCd);
    ctj.push(response.data.result.ctj);
    rgdt.push(response.data.result.rgdt);


    localStorage.gsti=gsti
    localStorage.mbr=mbr;
    localStorage.canflag=canflag;
    localStorage.pradr_em=pradr_em;
    localStorage.pradr_adr=pradr_adr;
    localStorage.pradr_addr=pradr_addr;
    localStorage.pradr_mb=pradr_mb;
    localStorage.pradr_ntr=pradr_ntr;
    localStorage.pradr_lastupdateddate=pradr_lastupdateddate;
    localStorage.tradenam=tradenam;
    localStorage.contacted=contacted;
    localStorage.gstin=gstin;
    localStorage.nba=nba;
    localStorage.stjcd=stjcd;
    localStorage.stj=stj;
    localStorage.ppr=ppr;
    localStorage.dty=dty;
    localStorage.cmprt=cmprt;
    localStorage.lstupdt=lstupdt;
    localStorage.ctb=ctb;
    localStorage.sts=sts;
    localStorage.cxdt=cxdt;
    localStorage.adadr=adadr;
    localStorage.lgnm=lgnm;
    localStorage.ctjcd=ctjcd;
    localStorage.ctj=ctj;
    localStorage.rgdt=rgdt;



      const user = await User.findOne({
        _id: userId
      });

      const newC = await Cart.removeFormItem(user._id, 'FORM16');
      res.status(httpStatus.OK).json({})
      break;
    default:
      throw APIError.InternalServerError();
      break;
  }
} catch (err) {
  if (lodash.isUndefined(err.status)) {
     Cart.update({owner:userId},{ "$pull": { "items": { "title": 'GST AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
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
