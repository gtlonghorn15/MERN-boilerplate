const mongoose = require('mongoose');

//address model
var addressModelSchema = new Schema({
   houseNumber: String,
   street: String,
   apartment: String,
   city: String,
   state: String,
   zip: Number)}

mongoose.model('address',addressModelSchema ,'address' )

//contactInfo model
var contactInfoModelSchema = new Schema({
   tel: Number,
   email: String,
   address: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'address'
   }
)}

mongoose.model('contactInfo ',contactInfoModelSchema ,'contactInfo ')

const RoomLocationSchema = new mongoose.Schema({
   name: String,
   company_id: String,
   website: String,
   contactInfo: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'contactInfo'
   }
});

module.exports = mongoose.model('RoomLocation', RoomLocationSchema);
