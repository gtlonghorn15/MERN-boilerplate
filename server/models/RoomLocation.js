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

mongoose.model('address',addressModelSchema ,'address' )

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

mongoose.model('contactInfo ',contactInfoModelSchema ,'contactInfo ')

const RoomLocationSchema = new mongoose.Schema({
   name: {
      type: String
   },
   company_id: {
      type: String
   },
   website: {
      type: String
   },
   contactInfo: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'contactInfo'
   }
});

module.exports = mongoose.model('RoomLocation', RoomLocationSchema);
