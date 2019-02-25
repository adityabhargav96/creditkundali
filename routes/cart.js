const router = require('express').Router();
const cartController = require('./../controllers/cartController');
const Cart = require('../models/cart');
var localStorage = require('node-localstorage');
// const {
//   checkPayment
// } = require('./../middlewares/paymentVerification');


router.get('/check', cartController.getCheck);

router.post('/cart?:index', cartController.postCardIndex);

router.get('/cart', cartController.getCart);

router.post('/remove', cartController.cartRemove);

router.post('/details', cartController.postDetails);

router.get('/details', cartController.getDetails);


router.get('/removeall',function(req,res,next){
  Cart.findOne({owner:req.user._id},function(err,carts){
    carts.items = [];
    carts.save(function (err, found) {
        if (err) return next(err);
        req.flash('remove', 'successfully removed');
        res.redirect('/check');

      });
  });
});


router.get('/car',function(req,res,next){
  res.render('accounts/car');
});

router.get('/image',function(req,res,next){
  var image = localStorage.api;
  res.render('accounts/image',{image:image});
});


module.exports = router;
