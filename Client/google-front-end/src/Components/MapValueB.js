import React, { useState, useEffect } from "react";
import { retrieveValueB } from "../Api/retrieveValueB";

export default function MapValueB() {
	const [valueBList, setValueBList] = useState([]);
	async function getAllValueBList() {
		const data = await retrieveValueB();
		setValueBList(data);
	}

	useEffect(() => {
		getAllValueBList();
	}, []);

	return (
		<div className="valueBList">
			{valueBList.map((restaurantDetails, index) => {
				return (
					<div key={index} className="valueBListMapping">
						<img src={restaurantDetails.thumbnail} alt="Value B restaurant" />

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
