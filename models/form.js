var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FormSchema = new Schema({
  company_headquarter: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  company_branch:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  count: {
    type: Number,
    default: 0
  },

});

module.exports = mongoose.model('Form', FormSchema);
