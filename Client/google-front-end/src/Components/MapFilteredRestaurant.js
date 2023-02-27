import React from "react";
import MapPopularRestaurant from "./MapPopularRestaurant";
import MapValueB from "./MapValueB";
import MapValueC from "./MapValueC";

export default function MapFilteredRestaurant({
	popularRestaurantButtonClicked,
	valueBClicked,
	valueCClicked,
}) {
	// I should find a way to integrate an if statement that asks: if a state has been clicked from the radio buttons category, then display this component, which is the <MapPopularRestaurant /> component, if however, the state has been updated for the toggle switch filter, then load the <MapCheckboxRestaurants /> component instead. OR, if the state of e.g. valueBClicked is false then hide <MapFilteredRestaurant /> component div, else display it.
	return (
		<div className="filterPopularRestaurant">
			{popularRestaurantButtonClicked ? (
				<div className="filterPopularRestaurant">
					<h1 className="popularRestaurantHeading"> Highest Rated</h1>
					<p className="popularRestaurantSubheading">
						{" "}
						Check out the Highest Rated Restaurants in your area
					</p>
					<MapPopularRestaurant />
				</div>
			) : null}

			{valueBClicked ? (
				<div className="filterPopularRestaurant">
					<h1 className="popularRestaurantHeading"> Open Now</h1>
					<p className="popularRestaurantSubheading">
						{" "}
						Check out the Restaurants currently open in your area
					</p>
					<MapValueB />
				</div>
			) : null}
		</div>
	);
}
