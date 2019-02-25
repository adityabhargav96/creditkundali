// const axios = require('axios');
// const lodash = require('lodash');
// const httpStatus = require('http-status');
const router = require('express').Router();
// const Cart = require('../models/cart');
// const User = require('../models/user');
// const Day = require('../models/day');
// const Yesterday = require('../models/yesterday');
// const System = require('../models/system');
// const APIError = require('./../core/APIError');
var localStorage = require('node-localstorage');
var api = require('car-registration-api-india');

// const WebSocket = require('ws');

// const ws = new WebSocket('ws://localhost:3000');
// ws.on('error', console.error);


router.post('/index50', async (req, res, next) => {


  api.CheckCarRegistrationIndia("JH01CK3700","aditya96",function(data){
    console.log(data.ImageUrl);
    localStorage.api = data.ImageUrl;

res.redirect('/car');
});
  });
// try {
//     var userId = req.user._id;
//     var ifsc = req.body.ifscbank;
//     var account = req.body.accountbank;
//     console.log(account)
//
//     const config = {
//       headers: {
//         'cache-control': 'no-cache',
//         'x-karza-key': 'g3jbu5ats9C2B1KvQnwk',
//         'content-type': 'application/json'
//       }
//     };
//
//
//     const data = {
//       consent: 'Y',
//       ifsc: req.body.ifscbank,
//       accountNumber: req.body.accountbank
//     }
//     console.log(data)
//
//
//     const response = await axios.post('https://testapi.karza.in/v2/bankacc', data, config);
module.exports = router;
