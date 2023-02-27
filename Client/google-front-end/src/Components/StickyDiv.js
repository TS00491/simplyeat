import React, { useState } from "react";
import MapNewRestaurant from "./MapNewRestaurant";
import SortingAndFiltering from "./SortingAndFiltering";
import MapFilteredRestaurant from "./MapFilteredRestaurant";
import { Link } from "react-router-dom";

// import MapPopularRestaurant from "./MapPopularRestaurant";
// import MapCheckBoxRestaurant from "./MapCheckboxRestaurant";
export default function StickyDiv() {
	//insert a useState that can then be passed down to two different files i.e. MapNewRestaurant and MapFilteredRestaurant.
	//or use useContext to do it.

	const [popularRestaurantButtonClicked, setPopularRestaurantButtonClicked] =
		useState(false);
	const [valueBClicked, setValueBClicked] = useState(false);
	const [valueCClicked, setValueCClicked] = useState(false);
	//Second part of the sorting and filtering
	const [dealsSwitch, setDealsSwitch] = useState(false);
	const [topEatsSwitch, setTopEatsSwitch] = useState(false);

	return (
		<div className="restaurantsAndFilterDiv">
			<div className="StickyDiv">
				<h1 className="allStoresHeaderRFDiv">All stores</h1>
				<SortingAndFiltering
					popularRestaurantButtonClicked={popularRestaurantButtonClicked}
					setPopularRestaurantButtonClicked={setPopularRestaurantButtonClicked}
					setValueBClicked={setValueBClicked}
					setValueCClicked={setValueCClicked}
					setDealsSwitch={setDealsSwitch}
					setTopEatsSwitch={setTopEatsSwitch}
				/>
			</div>
			<div className="StickyDivAdjacent">
				<div className="inARush">
					<h1 className="inARushHeading"> In a rush?</h1>
					<p className="inARushSubheading">
						Here's the fastest delivery for you
					</p>
					{/* <Link to="/menu"> */}
					<MapNewRestaurant />
					{/* </Link> */}
				</div>
				{/* <div className="filterPopularRestaurant">
            <h1 className="popularRestaurantHeading"> Highest Rated</h1>
            <p className="popularRestaurantSubheading"> Check out the Highest Rated Restaurants in your area</p>
            <MapPopularRestaurant />
            </div> */}

				<MapFilteredRestaurant
					popularRestaurantButtonClicked={popularRestaurantButtonClicked}
					valueBClicked={valueBClicked}
					valueCClicked={valueCClicked}
				/>

				{/* <div className="inARush">
					<h1 className="inARushHeading"> In a rush?</h1>
					<p className="inARushSubheading">
						Here's the fastest delivery for you
					</p>

					<MapCheckBoxRestaurant
						dealsSwitch={dealsSwitch}
						topEatsSwitch={topEatsSwitch}
					/>
				</div> */}
			</div>
		</div>
	);
}
