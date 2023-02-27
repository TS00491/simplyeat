import React, { useState, useEffect } from "react";
import { retrieveRestaurantsWithDeals } from "../Api/retrieveRestaurantsWithDeals";

export default function MapRestaurantWithDeals() {
	const [restaurantsWithDeals, setRestaurantWithDeals] = useState([]);
	async function getAllRestaurants() {
		const data = await retrieveRestaurantsWithDeals();
		setRestaurantWithDeals(data);
	}

	useEffect(() => {
		getAllRestaurants();
	}, []);
	// return (
	// <h1>Hello</h1>
	// <div className="flex flex-wrap">
	// 	{restaurantsWithDeals.map((restaurantDetailsWithDeals, index) => {
	// 		return (
	// 			<div
	// 				key={index}
	// 				className="flex flex-col w-18 h-16 cursor-pointer items-start"
	// 			>
	// 				<img
	// 					class="w-full h-70"
	// 					src={restaurantDetailsWithDeals.thumbnail}
	// 					alt="restaurant with deals"
	// 				/>{" "}
	// 			</div>
	// 		);
	// 	})}
	// </div>
	// );

	return (
		<div className="flex flex-row flex-wrap gap-1">
			{restaurantsWithDeals.map((restaurantDetails, index) => {
				return (
					<div key={index} className="flex flex-col w-18 h-16">
						<img
							className="w-full h-70"
							src={restaurantDetails.thumbnail}
							alt="restaurant with deals"
						/>

						<div className="flex flex-col w-full self-center">
							<div className="flex flex-row justify-between items-center py-1">
								<p
									className="w-90 text-left text-xs font-bold overflow-hidden text-overflow-ellipsis whitespace-nowrap"
									key={index}
								>
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
