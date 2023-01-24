const router = require('express').Router();
let Restaurant = require('../models/restaurant.model');

router.route('/').get((req, res) => {
  Restaurant.find()
    .then(restaurant => res.json(restaurant))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post( async (req, res) => {
// console.log(req.body)
//   try {
//     const newUser = new User({username: req.body.username});
//     await newUser.save();
//     res.status(200).json(newUser);
//   } catch (error) {
//     res.status(500).json(error);
  // }


// const newRestaurant = new Restaurant ({username: req.body.username});



const newRestaurant = new Restaurant ({
  restaurantName: req.body.restaurantName,
  restaurantCuisine: req.body.restaurantCuisine,
  thumbnail: req.body.thumbnail,
  address: req.body.address,
  restaurantRating: req.body.restaurantRating,
  menuCategories: {
    starters: req.body.starters
  }
});
  newRestaurant.save()
    .then(() => res.json('Restaurant added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Restaurant.findByIdAndDelete(req.params.id)
    .then(() => res.json('Restaurant deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;