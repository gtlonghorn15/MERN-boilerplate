const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
   name: {
      type: String,
      default: "Default name"
   },
   location_id: {
      type: String,
      default: "location_id"
   },
   time_available_minutes: {
      type: Number,
      default: 60
   },
   max_players: {
      type: Number,
      default: 10
   },
   min_players: {
      type: Number,
      default: 2
   },
   reported_completion_percentage: {
      type: Number,
      default: 100
   },
   reported_difficulty: {
      type: Number,
      default: 0
   }
});

module.exports = mongoose.model('Room', RoomSchema);
