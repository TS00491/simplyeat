const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// if i'm going to have a schema that allows for retaurant menu items to also be stored in the same db as the restaurant name, then I have to do it inside the restaurant name part of the schema i.e. restaurantName: { menuItem: {starters: {[]}, mains: {[]}}}
const restaurantSchema = new Schema({

  restaurantName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  restaurantCuisine: {
    type: String,
    // required: true,
    trim: true,
    minlength: 3,
  },
  thumbnail: {
    type: String,
    // required: true,
    trim: true,
  },
  address: {
    type: String, 
    trim: true,
  },
  restaurantRating: {
    type: Number,
    // required: true,
   },
menuCategories: {
    starters: {
        type: String,
        price: {
            type: String
        },
    }, 
    mains: {
        type: String,
        price: {
            type: String
        },
    }, 
    sides: {
        type: String,
        price: {
            type: String
        }
    },
    drinks: {
        type: String,
        price: {
            type: String
        }
    
}
}

}, {
  timestamps: true,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;