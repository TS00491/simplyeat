import React, { useState, useEffect } from "react";
import { retrieveRestaurantRating } from "../Api/retrieveRestaurantRating";

export default function MapPopularRestaurant() {
	const [recommendPopularRestaurantsList, setRecommendPopularRestaurantsList] =
		useState([]);
	async function getAllPopularRestaurants() {
		const data = await retrieveRestaurantRating();
		setRecommendPopularRestaurantsList(data);
	}

	useEffect(() => {
		getAllPopularRestaurants();
	}, []);

	return (
		<div className="restaurantCategoryZero">
			{recommendPopularRestaurantsList.map((restaurantDetails, index) => {
				return (
					<div key={index} className="restaurantMappingForInARushCategory">
						<img src={restaurantDetails.thumbnail} alt="popular restaurant" />

						<div className="restaurantNameAndCuisine">
							<div className="flex flex-row justify-between items-center py-1">
								<p className="restaurantName" key={index}>
									{restaurantDetails.restaurantName} -{" "}
									{restaurantDetails.address}
								</p>
								<div className="flex w-8 h-8 text-xs justify-center items-center rounded-full bg-slate-200">
									{restaurantDetails.restaurantRating}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
