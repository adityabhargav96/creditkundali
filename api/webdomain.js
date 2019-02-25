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



router.post('/index40', async (req, res, next) => {
  try {
          var userId = req.user._id;
          var inputdomain = req.body.webdomain;



          const config = {
            headers: {
              'cache-control': 'no-cache',
              'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
              'content-type': 'application/json'
            }
          };

          const data = {
            consent: 'Y',
            domain: req.body.webdomain
          }

          const response = await axios.post('https://testapi.karza.in/v2/whois', data, config);

          switch (response.data['status-code']) {
            case "102":
              throw APIError.Error102();
              break;
            case "103":
              throw new APIError('103 status code', httpStatus.INTERNAL_SERVER_ERROR, true);
              break;
            case "400":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'WEB DOMAIN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error400();
              break;
            case "401":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'WEB DOMAIN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error401();
              break;
            case "402":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'WEB DOMAIN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error402();
              break;
            case "500":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'WEB DOMAIN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.InternalServerError();
              break;
            case "503":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'WEB DOMAIN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error503();
              break;
            case "504":
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'WEB DOMAIN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
            console.log(obj.items)
            });
              throw APIError.Error504();
              break;
            case "101":
            console.log(response.data)
            System.findOne({company_branch:req.user._id},function(err,system){
              system.Web_Domain_Auth_count = system.Web_Domain_Auth_count + 1;
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
                  yesterday.Web_Domain_Auth_count = day.Web_Domain_Auth_count;
                  yesterday.save(function(err,yesterday){
                    if (err) {
                        return next(err);
                    }
                  })
                day.date = wah;
                day.Web_Domain_Auth_count = day.Web_Domain_Auth_count + 1;
                day.save(function (err, day) {
                    if (err) {
                        return next(err);
                    }
                    console.log(day)
                  });
                })
              }

          });
            var update_date = [];
            var domain = [];
            var admin_city = [];
            var admin_fax = [];
            var admin_name = [];
            var admin_country = [];
            var admin_stateprovince = [];
            var admin_phone = [];
            var admin_street = [];
            var admin_organization = [];
            var admin_postal = [];
            var admin_email = [];
            var expiration_date = [];
            var creation_date = [];
            var registrar_phone = [];
            var registrar_email = [];
            var registrar_id = [];
            var registry_phone = [];
            var registry_email = [];
            var registry_id = [];
            var registry_expiry = [];
            var  tech_city = [];
            var  tech_fax = [];
            var  tech_name = [];
            var  tech_country = [];
            var  tech_stateprovince = [];
            var  tech_phone = [];
            var  tech_street = [];
            var  tech_organization = [];
            var tech_postal = [];
            var tech_email = [];
            var nameserver_name = [];
            var  registrant_city = [];
            var  registrant_fax = [];
            var  registrant_name = [];
            var  registrant_country = [];
            var  registrant_stateprovince = [];
            var  registrant_phone = [];
            var  registrant_street = [];
            var  registrant_organization = [];
            var  registrant_postal = [];
            var  registrant_email = [];






            //
            update_date.push(response.data.result.update_date);
            for(var i=0; i< response.data.result.domain.length; i++){
      domain.push(response.data.result.domain[i]);
      }
            admin_city.push(response.data.result.admin.city);
            admin_fax.push(response.data.result.admin.fax);
            admin_name.push(response.data.result.admin.name);
            admin_country.push(response.data.result.admin.country);
            admin_stateprovince.push(response.data.result.admin.stateprovince);
            admin_phone.push(response.data.result.admin.phone);
            admin_street.push(response.data.result.admin.street);
            admin_organization.push(response.data.result.admin.organization);
            admin_postal.push(response.data.result.admin.postal);
            admin_email.push(response.data.result.admin.email);
            expiration_date.push(response.data.result.expiration_date);
            creation_date.push(response.data.result.creation_date);
            registrar_phone.push(response.data.result.registrar.phone);
            registrar_email.push(response.data.result.registrar.email);
            registry_id.push(response.data.result.registry.id);
            registry_expiry.push(response.data.result.registry.expiry);
            tech_city.push(response.data.result.tech.city);
            tech_fax.push(response.data.result.tech.fax);
            tech_name.push(response.data.result.tech.name);
            tech_country.push(response.data.result.tech.country);
            tech_stateprovince.push(response.data.result.tech.stateprovince);
            tech_phone.push(response.data.result.tech.phone);
            tech_street.push(response.data.result.tech.street);
            tech_organization.push(response.data.result.tech.organization);
            tech_postal.push(response.data.result.tech.postal);
            tech_email.push(response.data.result.tech.email);
            nameserver_name.push(response.data.result.nameserver.name);
            registrant_city.push(response.data.result.registrant.city);
            registrant_fax.push(response.data.result.registrant.fax);
            registrant_name.push(response.data.result.registrant.name);
            registrant_country.push(response.data.result.registrant.country);
            registrant_stateprovince.push(response.data.result.registrant.stateprovince);
            registrant_phone.push(response.data.result.registrant.phone);
            registrant_street.push(response.data.result.registrant.street);
            registrant_organization.push(response.data.result.registrant.organization);
            registrant_stateprovince.push(response.data.result.registrant.stateprovince);
            registrant_postal.push(response.data.result.registrant.postal);
            registrant_email.push(response.data.result.registrant.email);

            // console.log(cin)



            localStorage.inputdomain = inputdomain;
            localStorage.update_date = update_date;
            localStorage.domain = domain;
            localStorage.admin_city = admin_city;
            localStorage.admin_fax = admin_fax;
            localStorage.admin_name = admin_name;
            localStorage.admin_country = admin_country;
            localStorage.admin_stateprovince = admin_stateprovince;
            localStorage.admin_phone = admin_phone;
            localStorage.admin_street = admin_street;
            localStorage.admin_organization = admin_organization;
            localStorage.admin_postal = admin_postal;
            localStorage.admin_email = admin_email;
            localStorage.expiration_date = expiration_date;
            localStorage.creation_date = creation_date;
            localStorage.registrar_phone = registrar_phone;
            localStorage.registrar_email = registrar_email;
            localStorage.registry_id = registry_id;
            localStorage.registry_expiry = registry_expiry;
            localStorage.tech_city = tech_city;
            localStorage.tech_fax = tech_fax;
            localStorage.tech_name = tech_name;
            localStorage.tech_country = tech_country;
            localStorage.tech_stateprovince = tech_stateprovince;
            localStorage.tech_phone = tech_phone;
            localStorage.tech_street = tech_street;
            localStorage.tech_organization = tech_organization;
            localStorage.tech_postal = tech_postal;
            localStorage.tech_email = tech_email;

            localStorage.nameserver_name = nameserver_name;
            localStorage.registrant_city = registrant_city;
            localStorage.registrant_name = registrant_name;
            localStorage.registrant_country = registrant_country;
            localStorage.registrant_stateprovince = registrant_stateprovince;
            localStorage.registrant_phone = registrant_phone;
            localStorage.registrant_street = registrant_street;
            localStorage.registrant_organization = registrant_organization;
            localStorage.registrant_stateprovince = registrant_stateprovince;
            localStorage.registrant_postal = registrant_postal;
            localStorage.registrant_email = registrant_email;


              const user = await User.findOne({
                _id: userId
              });

              const newC = await Cart.removeFormItem(user._id, 'FORM40');
              res.status(httpStatus.OK).json({})
              break;
            default:
              throw APIError.InternalServerError();
              break;
          }
          } catch (err) {
          if (lodash.isUndefined(err.status)) {
            Cart.update({owner:userId},{ "$pull": { "items": { "title": 'WEB DOMAIN AUTHENTICATION' } }}, { safe: true, multi:true }, function(err, obj) {
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





module.exports = router;
