// requiring a file
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');
var MongoStore = require('connect-mongo/es5')(session);
var passport = require('passport');
var request = require('request');
var async = require('async');
var NodeRSA = require('node-rsa');
const crypto = require('crypto');
const sign = crypto.createSign('RSA-SHA512');
var payumoney = require('payumoney-node');
var path = require('path');
var schedule = require('node-schedule');
// const logger = require('./logger');
var partials = require('express-partials');
// const expressWinston=require('express-winston');



// requiring a js file
var secret = require('./config/secret');
var User = require('./models/user');
var Form = require('./models/form');
var Product = require('./models/product');
var product = require('./productarr/product');
var Cart = require('./models/cart');
var cartLength = require('./middlewares/middlewares');
// var Pan = require('./models/api/pan');



// defining a variable
var app = express();
// app.use(morgan(':method :url :response-time'))



// connecting a database
// mongoose.connect(secret.database, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Connected to the database");
//   }
// });



// Middleware
app.use(partials());
app.use(express.static(__dirname + '/public'));
app.set('apiforms', path.join(__dirname, 'apiforms'));
// app.use(function(req,res){
//   res.send(404,"Not Found :-(")
// })
app.use(morgan('dev'));
// app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: secret.secretKey,
  // store: new MongoStore({ url: secret.database, autoReconnect: true}),
  cookie: {maxAge:300 * 60 * 1000}
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  res.locals.session = req.session;
  next();
});


// app.get(function(req, res){
//   res.status( 404).send('heyy');
// });



app.use(cartLength);

app.set('view engine', 'ejs');


// app.use(expressWinston.logger({ // use logger to log every requests
//   transports: [logger],
//   meta: false, // optional: control whether you want to log the meta data about the request (default to true)
//   msg: `{{req.ip}} - {{res.statusCode}} - {{req.method}} - {{res.responseTime}}ms - {{req.url}} - {{req.headers['user-agent']}}`, // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
//   expressFormat: false, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
//   colorize: true
// }));



// creating a routes defining in variable

var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');
var apiRoutes = require('./routes/api');
var cartRoutes = require('./routes/cart');
var adminRoutes = require('./routes/admin');




var panRoutes = require('./api/pan');
// var adhaarRoutes = require('./api/adhaar');
 var driverRoutes = require('./api/driver');
var voterRoutes = require('./api/voter');
var nregaRoutes = require('./api/nrega');
var passportRoutes = require('./api/passport');
var tanRoutes = require('./api/tan');
var mcaRoutes = require('./api/mca');
var companysearchRoutes = require('./api/companysearch');
var iecauthRoutes = require('./api/iecauth');
var iecdetailedRoutes = require('./api/iecdetailed');
var cinRoutes = require('./api/cin');
var llpinRoutes = require('./api/llpin');
var udyogRoutes = require('./api/udyog');
var gstidentificationRoutes = require('./api/gstidentification');
var gstauthenticationRoutes = require('./api/gstauthentication');
var shopRoutes = require('./api/shop');
var fssailicenseRoutes = require('./api/fssailicense');
var fdalicenseRoutes = require('./api/fdalicense');
var caRoutes = require('./api/ca');
var icsiRoutes = require('./api/icsi');
var icwaimemberRoutes = require('./api/icwaimember');
var mcimemberRoutes = require('./api/mcimember');
var icwaifirmRoutes = require('./api/icwaifirm');
var pngRoutes = require('./api/png');
var electricityRoutes = require('./api/electricity');
var telephoneRoutes = require('./api/telephone');
var lpgidRoutes = require('./api/lpgid');
var epfauthRoutes = require('./api/epfauth');
var epfauthpassRoutes = require('./api/epfauthpass');
var epfuanRoutes = require('./api/epfuan');
var employerRoutes = require('./api/employer');
var esicidRoutes = require('./api/esicid');
var form16authRoutes = require('./api/form16auth');
var form16quarterRoutes = require('./api/form16quarter');
var itrauthRoutes = require('./api/itrauth');
// var addressmatchRoutes = require('./api/addressmatch');
var emailauthRoutes = require('./api/emailauth');
var nameRoutes = require('./api/name');
var ifscRoutes = require('./api/ifsc');
var bankRoutes = require('./api/bank');
var hsnRoutes = require('./api/hsn');
// // var facematchRoutes = require('./api/facematch');
var webdomainRoutes = require('./api/webdomain');
var rcauthRoutes = require('./api/rcauth');
var rcsearchRoutes = require('./api/rcsearch');
// // var kycocrRoutes = require('./api/kycocr');
// // var form16ocrRoutes = require('./api/form16ocr');
// var itrRoutes = require('./api/itr');
// // var chequeocrRoutes = require('./api/chequeocr');
var tandetailedRoutes = require('./api/tandetailed');
var cardetails = require('./api/car')
//
//
//
// // calling use using variable
// app.use(otpRoutes);
app.use(mainRoutes);
app.use(userRoutes);
app.use(apiRoutes);
app.use(cartRoutes);
app.use(adminRoutes);




app.use(panRoutes);
// // app.use(adhaarRoutes);
app.use(driverRoutes);
app.use(voterRoutes);
app.use(nregaRoutes);
app.use(passportRoutes);
app.use(tanRoutes);
app.use(mcaRoutes);
app.use(companysearchRoutes);
app.use(iecauthRoutes);
app.use(iecdetailedRoutes);
app.use(cinRoutes);
app.use(llpinRoutes);
app.use(udyogRoutes);
app.use(gstidentificationRoutes);
app.use(gstauthenticationRoutes);
app.use(shopRoutes);
app.use(fssailicenseRoutes);
app.use(fdalicenseRoutes);
app.use(caRoutes);
app.use(icsiRoutes);
app.use(icwaimemberRoutes);
app.use(icwaifirmRoutes);
app.use(mcimemberRoutes);
//
app.use(pngRoutes);
app.use(electricityRoutes);
app.use(telephoneRoutes);
app.use(lpgidRoutes);
app.use(epfauthRoutes);
app.use(epfauthpassRoutes);
app.use(epfuanRoutes);
app.use(employerRoutes);
app.use(esicidRoutes);
app.use(form16authRoutes);
app.use(form16quarterRoutes);
app.use(itrauthRoutes);
// // app.use(addressmatchRoutes);
app.use(emailauthRoutes);
app.use(nameRoutes);
app.use(ifscRoutes);
app.use(bankRoutes);
app.use(hsnRoutes);
// // app.use(facematchRoutes);
app.use(webdomainRoutes);
app.use(rcauthRoutes);
app.use(rcsearchRoutes);
// // app.use(kycocrRoutes);
// // app.use(form16ocrRoutes);
// // app.use(itrRoutes);
// // app.use(chequeocrRoutes);
app.use(tandetailedRoutes);
app.use(cardetails);


app.use(function(req, res, next){
    res.status(404).render('accounts/error', {title: "Sorry, page not found"});
});




// hosting a server
app.listen(secret.port, function(err) {
  if (err) throw err;
  console.log("Server is Running on port " + secret.port);
});
