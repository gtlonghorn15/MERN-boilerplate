const mongoose = require('mongoose');

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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'contactInfo'
   }
});

module.exports = mongoose.model('RoomLocation', RoomLocationSchema);
