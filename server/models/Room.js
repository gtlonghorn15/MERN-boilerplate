const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Default name"
  }
});

module.exports = mongoose.model('Room', RoomSchema);
