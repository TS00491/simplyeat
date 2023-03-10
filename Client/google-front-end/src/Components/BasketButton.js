import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BasketButton() {
	const [itemsInBasket, setItemsInBasket] = useState(1);
	return (
		// <div class="basketButtonOne">
		<Link to="/basket">
			<button type="submit" className="basketButtonOne">
				<svg
					aria-hidden="true"
					focusable="false"
					viewBox="0 0 16 16"
					// fill="#FFFFFF"
					className="basketButton"
				>
					<path
						fill="#FFFFFF"
						d="M3.666 11.333h10.333l1.334-8h-11l-.267-2h-3.4v2h1.667l1.333 8zm1.333 3.334A1.333 1.333 0 105 12a1.333 1.333 0 000 2.667zm9.334-1.334a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z"
					></path>
				</svg>
				{/* Add state that updates when added to basket */}

				<div className="basketText">Basket • {itemsInBasket}</div>
			</button>
		</Link>
		// </div>
	);
}
