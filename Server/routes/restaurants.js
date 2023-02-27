const router = require("express").Router();
let Restaurant = require("../models/restaurant.model");

router.route("/").get((req, res) => {
	Restaurant.find()
		.then((restaurant) => res.json(restaurant))
		.catch((err) => res.status(400).json("Error: " + err));
});

// router.route("/:id").get((req, res) => {
// 	Restaurant.findById("/:id")
// 		.then((restaurant) => res.json(restaurant))
// 		.catch((err) => res.status(400).json("Error: " + err));
// });

// Retrieve Menu Items
router.get("/get/:id", async (req, res) => {
	try {
		const retrieveMenu = await Restaurant.findById(req.params.id);
		if (retrieveMenu) {
			res.status(200).json(retrieveMenu);
		} else {
			res.status(500).json("Not found");
		}
	} catch (error) {
		res.status(500).json(error);
	}
	//The below allows me to call only the menuCategories of the database for the corresponding id.
	// try {
	// 	const retrieveMenu = await Restaurant.findById(req.params.id);
	// 	const { menuCategories } = retrieveMenu; // extract menuCategories field
	// 	res.status(200).json(menuCategories); // send menuCategories only
	// } catch (error) {
	// 	res.status(500).json(error);
	// }
});

router.patch("/update/:id", async (req, res) => {
	try {
		const restaurant = await Restaurant.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		await restaurant.save();
		res.send({ message: "Restaurant updated successfully" });
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

router.route("/popular").get((req, res) => {
	Restaurant.find({ restaurantRating: { $gt: 4.4 } })
		.sort({ restaurantRating: "desc" })
		.then((restaurant) => res.json(restaurant))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/valueb").get((req, res) => {
	Restaurant.find({})
		.sort({ restaurantName: "desc" })
		.then((restaurant) => res.json(restaurant))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(async (req, res) => {
	// console.log(req.body)
	//   try {
	//     const newUser = new User({username: req.body.username});
	//     await newUser.save();
	//     res.status(200).json(newUser);
	//   } catch (error) {
	//     res.status(500).json(error);
	// }

	// const newRestaurant = new Restaurant ({username: req.body.username});

	const newRestaurant = new Restaurant({
		restaurantName: req.body.restaurantName,
		restaurantCuisine: req.body.restaurantCuisine,
		thumbnail: req.body.thumbnail,
		address: req.body.address,
		restaurantRating: req.body.restaurantRating,
		menuCategories: {
			starters: [
				{
					name: req.body.starters.name,
					price: req.body.starters.price,
					foodPicture: req.body.foodPicture,
				},
			],
			mains: [
				{
					name: req.body.mains.name,
					price: req.body.mains.price,
					foodPicture: req.body.foodPicture,
				},
			],
			sides: [
				{
					name: req.body.sides.name,
					price: req.body.sides.price,
					foodPicture: req.body.foodPicture,
				},
			],
			drinks: [
				{
					name: req.body.drinks.name,
					price: req.body.drinks.price,
					drinkPicture: req.body.foodPicture,
				},
			],
		},
	});
	newRestaurant
		.save()
		.then(() => res.json("Restaurant added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
	Restaurant.findByIdAndDelete(req.params.id)
		.then(() => res.json("Restaurant deleted."))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
