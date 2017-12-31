const Room = require('../../models/Room');

module.exports = (app) => {
  app.get('/api/rooms', (req, res, next) => {
    Room.find()
      .exec()
      .then((room) => res.json(room))
      .catch((err) => next(err));
  });

  app.post('/api/rooms', function (req, res, next) {
    const room = new Room();
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
};
