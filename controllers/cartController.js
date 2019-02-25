const lodash = require('lodash');
const Product = require('../models/product');
const Cart = require('../models/cart');

const getCheck = async (req, res, next) => {
  if(!req.user){
    res.redirect('accounts/ies');
  } else{
    const products = await Product.find({});
    res.render('accounts/check', {
        products: products
    });
  }
}

const postCardIndex = function (req, res, next) {
  if(!req.user){
    res.redirect('accounts/ies');
  } else{
    Cart.findOne({
        owner: req.user._id
    }, function (err, cart) {
        console.log(req.body);
        cart.items.push({
            item: req.body.product_id,
            title: req.body.title,
            // price: parseFloat(req.body.priceValue),
            form: req.body.formHidden,
        });
        // cart.total = (cart.total + parseFloat(req.body.priceValue)).toFixed(2);

        cart.save(function (err, cart) {
            if (err) {
                return next(err);
            }
            res.send(JSON.stringify(cart.items.length));
        })
    });
  }
}

const getCart = function (req, res, next) {
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
            res.render('accounts/cart', {
                foundCart: foundCart,
                message: req.flash('remove')
            });
        });
      }
};


const cartRemove = function (req, res, next) {
  if(!req.user){
    res.redirect('accounts/ies');
  } else{
    Cart.findOne({
        owner: req.user._id
    }, function (err, foundCart) {
        foundCart.items.pull(String(req.body.item));
        // foundCart.total = (foundCart.total - parseFloat(req.body.price)).toFixed(2);
        foundCart.save(function (err, found) {
            if (err) return next(err);
            req.flash('remove', 'successfully removed');
            res.redirect('/cart');

        })
    });
  }
}

const postDetails = function (req, res) {

    var selectedforms = [];
    Cart
        .findOne({
            owner: req.user._id
        })
        .populate('items.item')
        .exec(function (err, detail) {
            if (err) {
                return next(err);
            }
            // console.log(detail);
            detail.items.forEach(function (form) {
                selectedforms.push(form.form);
            });

            res.render('apiforms/details', {
                forms: selectedforms,
                body: undefined
            });

        });
}

const getDetails = function (req, res) {
  if(!req.user){
    res.redirect('accounts/woah');
  } else{
    var selectedforms = [];
    Cart
        .findOne({
            owner: req.user._id
        })
        .populate('items.item')
        .exec(function (err, detail) {
            if (err) {
                return next(err);
            }

            detail.items.forEach(function (form) {
                const isUsed = lodash.isNil(form.used) ? false : form.used;
                if (!isUsed) {
                    selectedforms.push(form.form);
                }
            });

            res.render('apiforms/details', {
                forms: selectedforms,
                body: undefined
            });
        });
      }
};


module.exports = {
    getCheck,
    postCardIndex,
    getCart,
    cartRemove,
    postDetails,
    getDetails
};
