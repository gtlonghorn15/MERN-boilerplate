const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
   name: String,
   location_id: String,
   time_available_minutes: Number,
   max_players: Number,
   min_players: Number,
   reported_completion_percentage: Number,
   reported_difficulty: {
      type: Number,
      default: 0
   }
});

module.exports = mongoose.model('Room', RoomSchema);
