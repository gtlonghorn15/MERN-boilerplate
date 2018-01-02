const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
   username: String,
   room_id: String,
   room_rating: {
      type: Number,
      default: 0
   },
   review_summary: String,
   customer_service_rating: {
      type: Number,
      default: 0
   },
   immersion_rating: {
      type: Number,
      default: 0
   },
   puzzle_quality_rating: {
      type: Number,
      default: 0
   },
   room_completion: {
      type: Boolean,
      default: false
   },
   time_remaining_seconds: {
      type: Number,
      default: 0
   },
   clues_used: {
      type: Number,
      default: 0
   },
   group_size: Number,
   group_size_rating: {
      type: Number,
      default: 0
   }
});

module.exports = mongoose.model('Review', ReviewSchema);
