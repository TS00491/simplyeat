const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


const connection = () => {
	try {
	  mongoose.connect(process.env.ATLAS_URI);
	  console.log("Connected to database");
	} catch (error) {
	  console.log(error);
	}
  
	mongoose.connection.on("disconnected", () => {
	  console.log("MongoDB disconnected");
	});
  };
  
  

// //grabbing the private db api from the .env file and assigning it to the uri variable.
// const uri = process.env.ATLAS_URI;
// mongoose.set("strictQuery", false);
// mongoose.connect(
// 	uri
// 	// , 	() => {
// 	// console.log("Connected to MongoDB");}
// );

// const connection = mongoose.connection;
// //once the connection is open, it'll log it to the console.log
// connection.once("open", () => {
// 	console.log("The db is connected");
// });
//now that the database is connected to the backend, we have to be able to read and edit the database. To do that, we'll create a database schema using mongoose. This will be in its own folder

//below we're creating a variable that allows us to link the pathway to our routes. So that afterwards when we do app.use('/exercises', exercisesRouter), we can call the variable that will in turn call the route and link that route to the /exercises route.
const foodCuisineRouter = require("./routes/food-cuisine");
const usersRouter = require('./routes/users');
const restaurantRouter = require(
	"./routes/restaurants"
	);
const FoodCuisine = require("./models/food-cuisine.model");

//headers
app.all("/*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
  });


app.use("/foodcuisinecategory", foodCuisineRouter);
app.use('/users', usersRouter);
app.use('/newrestaurant', restaurantRouter);

app.listen(port, () => {
	connection();
	console.log(`Server is running on port: ${port}`);
});

