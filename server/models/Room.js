const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
   name: {
      type: String
   },
   location_id: {
      type: String
   },
   time_available_minutes: {
      type: Number
   },
   max_players: {
      type: Number
   },
   min_players: {
      type: Number
   },
   reported_completion_percentage: {
      type: Number
   },
   reported_difficulty: {
      type: Number,
      default: 0
   },
   price: {
      type: Number,
   },
   room_URL: {
      type: String,
   },
   image_URL: {
      type: String,
   },
   notes: {
      type: String,
   }
});

module.exports = mongoose.model('Room', RoomSchema);
