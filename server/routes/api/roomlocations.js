const RoomLocation = require('../../models/RoomLocation');

module.exports = (app) => {
   app.get('/api/roomlocations', (req, res, next) => {
      RoomLocation.find()
         .exec()
         .then((roomlocation) => res.json(roomlocation))
         .catch((err) => next(err));
   });

   app.post('/api/roomlocations', function (req, res, next) {
      var roomlocation = new RoomLocation(req.body);

      roomlocation.save()
         .then(() => res.json(roomlocation))
         .catch((err) => next(err));
   });

   app.delete('/api/roomlocations/:id', function (req, res, next) {
      RoomLocation.findOneAndRemove({ _id: req.params.id })
         .exec()
         .then((roomlocation) => res.json())
         .catch((err) => next(err));
   });
};
