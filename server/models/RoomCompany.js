const mongoose = require('mongoose');

const RoomCompanySchema = new mongoose.Schema({
   name: {
      type: String
   },
   website: {
      type: String
   }
});

module.exports = mongoose.model('RoomCompany', RoomCompanySchema);
