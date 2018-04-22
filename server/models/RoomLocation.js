const mongoose = require('mongoose');

const RoomLocationSchema = new mongoose.Schema({
   name: {
      type: String
   },
   company_id: {
      type: String
   },
   address_id: {
      type: String
   },
   website: {
      type: String
   },
   tel: {
      type: Number
   },
   email: {
      type: String
   },
   address: {
      type: String
   },
   booking_URL: {
      type: String
   }
});

module.exports = mongoose.model('RoomLocation', RoomLocationSchema);
