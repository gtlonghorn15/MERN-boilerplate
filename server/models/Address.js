const mongoose = require('mongoose');

//address model
var addressModelSchema = new Schema({
   houseNumber: {
      type: String
   },
   street: {
      type: String
   },
   apartment: {
      type: String
   },
   city: {
      type: String
   },
   state: {
      type: String
   },
   zip: {
      type: Number
   }
)}

module.exports = mongoose.model('address', addressModelSchema, 'address')