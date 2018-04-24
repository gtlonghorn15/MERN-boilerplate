const Room = require('../../models/Room');

module.exports = (app) => {
   app.get('/api/rooms', (req, res, next) => {
      Room.find()
         .exec()
         .then((room) => res.json(room))
         .catch((err) => next(err));
   });
   
   app.get('/api/rooms/:id', (req, res, next) => {
      Room.findById(req.params.id)
         .exec()
         .then((room) => res.json())
         .catch((err) => next(err));
   });

   app.post('/api/rooms', function (req, res, next) {
      var room = new Room(req.body);

      room.save()
         .then(() => res.json(room))
         .catch((err) => next(err));
   });

   app.delete('/api/rooms/:id', function (req, res, next) {
      Room.findOneAndRemove({ _id: req.params.id })
         .exec()
         .then((room) => res.json())
         .catch((err) => next(err));
   });
   
   app.put('/api/rooms/:id&:num/increment', (req, res, next) => {
      Room.findById(req.params.id)
         .exec()
         .then((room) => {
           room.num_ratings++;
           room.total_rating+=num;

           room.save()
             .then(() => res.json(room))
             .catch((err) => next(err));
         })
         .catch((err) => next(err));
   });
};
