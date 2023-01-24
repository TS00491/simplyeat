const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
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
//   }

const newUser = new User({username: req.body.username, });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;