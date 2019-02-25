var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  // total: {
  //   type: Number,
  //   default: 0
  // },
  items: [{
    item: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      default: 1
    },
    title: String,
    price: {
      type: Number,
      default: 0
    },
    form: String,
    used: {
      type: Boolean,
      default: false
    }
  }]
}, {
  usePushEach: true,
});

CartSchema.statics.removeFormItem = async function (userID, itemname) {
  return await this.updateOne({
    owner: userID,
    items: {
      $elemMatch: {
        form: itemname,
        used: false
      }
    }
  }, {
    $set: {
      'items.$.used': true
    }
  });
}

module.exports = mongoose.model('Cart', CartSchema);
