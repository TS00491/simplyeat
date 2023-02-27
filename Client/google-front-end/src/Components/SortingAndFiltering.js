import React from "react";
// import { Link } from "react-router-dom";
// import MapPopularRestaurant from "./MapPopularRestaurant";

export default function SortingAndFiltering({
	setPopularRestaurantButtonClicked,
	setValueBClicked,
	setValueCClicked,
	setDealsSwitch,
	setTopEatsSwitch,
}) {
	//Change to a switchcase at a later point
	function handleClickPopular(e) {
		//Swap for switch case at a later point for better efficiency.
		if (e.target.value === "A") {
			setPopularRestaurantButtonClicked(true);
			setValueBClicked(false);
			setValueCClicked(false);
		} else if (e.target.value === "B") {
			setPopularRestaurantButtonClicked(false);
			setValueBClicked(true);
			setValueCClicked(false);
		} else if (e.target.value === "C") {
			setPopularRestaurantButtonClicked(false);
			setValueBClicked(false);
			setValueCClicked(true);
		}
	}

	function handleClickCheckbox(e) {
		const value = e.target.value;
		switch (value) {
			case "1":
				setDealsSwitch(true);
				setTopEatsSwitch(false);
				break;
			case "2":
				setTopEatsSwitch(true);
				setDealsSwitch(false);
				break;
			default:
				setDealsSwitch(false);
				setTopEatsSwitch(false);
		}
	}

	return (
		<div className="sorting">
			<div className="sortingOnPopularity">
				<p className="sort">Sort</p>

				<div className="radioSortingDiv">
					<label className="radioSort">
						<input
							type="radio"
							className="radioSortOne"
							name="sortRestaurants"
							value="Picked for you (default)"
						/>
						Picked for you (default)
					</label>

					<label className="radioSort">
						<input
							type="radio"
							className="radioSortOne"
							name="sortRestaurants"
							value="A"
							onClick={handleClickPopular}
						/>{" "}
						Highest Rated
					</label>

					<label className="radioSort">
						<input
							type="radio"
							className="radioSortOne"
							name="sortRestaurants"
							value="B"
							onClick={handleClickPopular}
						/>{" "}
						Open Now
					</label>

					<label className="radioSort">
						<input
							type="radio"
							className="radioSortOne"
							name="sortRestaurants"
							value="C"
							onClick={handleClickPopular}
						/>{" "}
						Delivery Time
					</label>
				</div>
			</div>

			{/* ///////////////////////////////////////////// */}

			<div className="toggleSorting">
				<p className="sortToggle">From Uber Eats</p>

				{/* this is where the individual checkboxes start */}
				<div className="toggleSortingDiv">
					<div className="ueToggleFilterRow">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 512"
							className="labelToggle"
						>
							<path
								fill="#000000"
								d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"
							/>
						</svg>

						<span className="deals">Deals</span>
						<label className="switch">
							<input type="checkbox" value="1" onClick={handleClickCheckbox} />
							<span className="slider round"></span>
						</label>
					</div>

					<div className="topEatsToggle ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							className="labelToggle"
						>
							<path d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z" />
						</svg>
						<span className="deals">Top Eats</span>
						<label className="switch">
							<input type="checkbox" value="2" onClick={handleClickCheckbox} />
							<span className="slider round"></span>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
