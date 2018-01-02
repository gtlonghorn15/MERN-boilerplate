const mongoose = require('mongoose');

const RoomCompanySchema = new mongoose.Schema({
   name: String,
   website: String
});

module.exports = mongoose.model('RoomCompany', RoomCompanySchema);
