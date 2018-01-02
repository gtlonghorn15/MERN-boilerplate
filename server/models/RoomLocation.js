const mongoose = require('mongoose');

const RoomLocationSchema = new mongoose.Schema({
   name: {
      type: String,
      default: "Default name"
   },
   company: {
      type: String,
      default: "Company"
   },
   address: {
      type: String,
      default: "123 Street"
   },
   pricing: {
      type: Number,
      default: 24.99
   },
   website: {
      type: String,
      default: "www.escaperoom.com"
   },
   phonenumber: {
      type: Number,
      default: 1234567890
   },
   email: {
      type: String,
      default: "example@example.com"
   }
});

module.exports = mongoose.model('RoomLocation', RoomLocationSchema);
