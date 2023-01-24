import React from "react";
import SearchBar from "./Components/SearchBar";
import BasketButton from "./Components/BasketButton";
import Login from "./Components/Login";
import DelPick from "./Components/DelPick";
export default function Navbar() {
	return (
		<div className="navbar">
			<h1 className="navbar-img">
				<img
					alt="Uber Eats"
					src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
				/>
			</h1>

			<DelPick />
			<SearchBar />
			<BasketButton />
			<Login />
		</div>
	);
}
