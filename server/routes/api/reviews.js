const Review = require('../../models/Review');

module.exports = (app) => {
   app.get('/api/reviews', (req, res, next) => {
      Review.find()
         .exec()
         .then((review) => res.json(review))
         .catch((err) => next(err));
   });

   app.post('/api/reviews', function (req, res, next) {
      var review = new Review(req.body);

      review.save()
         .then(() => res.json(review))
         .catch((err) => next(err));
   });

   app.delete('/api/reviews/:id', function (req, res, next) {
      Review.findOneAndRemove({ _id: req.params.id })
         .exec()
         .then((review) => res.json())
         .catch((err) => next(err));
   });
};
