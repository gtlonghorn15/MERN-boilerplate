const RoomCompany = require('../../models/RoomCompany');

module.exports = (app) => {
   app.get('/api/roomcompanies', (req, res, next) => {
      RoomCompany.find()
         .exec()
         .then((roomcompany) => res.json(roomcompany))
         .catch((err) => next(err));
   });

   app.post('/api/roomcompanies', function (req, res, next) {
      var roomcompany = new RoomCompany(req.body);

      roomcompany.save()
         .then(() => res.json(roomcompany))
         .catch((err) => next(err));
   });

   app.delete('/api/roomcompanies/:id', function (req, res, next) {
      RoomCompany.findOneAndRemove({ _id: req.params.id })
         .exec()
         .then((roomcompany) => res.json())
         .catch((err) => next(err));
   });
};
