import React, { useState } from "react";

export default function DelPick() {
	const [pickupIsClicked, setPickupIsClicked] = useState(false);

	const onClickSetPickup = () => {
		setPickupIsClicked(true);
	};

	const onClickRemovePickup = () => {
		setPickupIsClicked(false);
	};

	return (
		<div className="delPickOne">
			<div
				onClick={onClickRemovePickup}
				className={`${!pickupIsClicked ? "deliveryClicked" : "delivery"}`}
			>
				<p>Delivery</p>
			</div>
			<div
				onClick={onClickSetPickup}
				className={`${pickupIsClicked ? "pickupClicked" : "pickup"}`}
			>
				<p>Pick up</p>
			</div>
		</div>
	);
}
