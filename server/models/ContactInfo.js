const mongoose = require('mongoose');

//contactInfo model
var contactInfoModelSchema = new Schema({
   tel: {
      type: Number
   },
   email: {
      type: String
   },
   address: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'address'
   }
)}

module.exports = mongoose.model('contactInfo', contactInfoModelSchema, 'contactInfo')