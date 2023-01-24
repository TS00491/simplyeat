const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodCatSchema = new Schema({
	//foodPictureLink:
	//cuisine

	foodPictureLink: {
		type: String,
		required: true,
		trim: true,
	},
	cuisine: {
		type: String,
		required: true,
		trim: true,
	},
}, {
	timestamps: true,
});

//'FoodCuisine' is the name we'll see inside of our mongoDB database. 
const FoodCuisine = mongoose.model('FoodCuisine', foodCatSchema);

module.exports = FoodCuisine;
