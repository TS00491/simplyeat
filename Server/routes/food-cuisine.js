//need to require the router because it is a route that we are creating.
const router = require("express").Router();
//here we are going to require the model we created.
let FoodCuisine = require("../models/food-cuisine.model");

//route that handles the information on the http://localhost:5000/foodcuisinecategory/ (this is because that is what we have assigned the route as in the server.js file, when we did the app.use("foodcuisinecategory", foodcuisine))
router.route("/").get((req, res) => {
	//mongoose method that will give a list of all food cuisines in the mongoose database.
	//and then res.json means it will return all the data of food cuisines saved in the mongoose database in a json format.
	FoodCuisine.find()
		.then((foodcuisines) => res.json(foodcuisines))
		.catch((err) => res.status(400).json("Error: " + err));
});

//handles http post request, on the '/add/ route
router.route("/add").post((req, res) => {
	//the foodPictureLink is part of the request body, so it is being assigned to the foodPictureLink variable we have created here.
	const foodPictureLink = req.body.foodPictureLink;
	const cuisine = req.body.cuisine;

	//here, pursuant to our schema, we are creating a new instance of FoodCuisine
	const newFoodCuisine = new FoodCuisine({ foodPictureLink, cuisine });

	//then it is saved to the database here.
	newFoodCuisine
		.save()
		.then(() => res.json("Food Cuisine Type Added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
