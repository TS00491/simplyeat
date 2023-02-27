import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { retrieveMenu } from "../Api/retrieveMenu";

export default function Menu() {
	const [menuItems, setMenuItems] = useState();

	const param = useParams();
	const id = param.id;
	const navigate = useNavigate();

	useEffect(() => {
		async function getMenu() {
			retrieveMenu(id)
				.then((data) => {
					setMenuItems(data);
				})
				.catch((error) => {
					navigate("/");
				});
		}

		getMenu();
		console.log(menuItems);
	}, []);

	return (
		<div
			// className="flex flex-col w-screen h-screen border border-black"
			className="flex flex-col w-screen h-screen border border-black 500"
		>
			<div
				// className="w-full min-w-full h-20 flex flex-col border border-red 500"
				className="w-full min-w-full h-28 flex flex-col border 10px border-rose-500"
				// style={{
				// 	width: "100%",
				// 	minWidth: "100%",
				// 	height: "20%",
				// 	display: "flex",
				// 	flexDirection: "column",
				// 	border: "solid pink",
				// }}
			>
				{!menuItems ? (
					<h1>Please wait whilst we load your desired restaurant</h1>
				) : (
					<div
						style={{
							justifyContent: "flex-start",
							paddingLeft: "1.4rem",
							width: "50%",
							border: "solid black",
							height: "100%",
							display: "flex",
							flexDirection: "row",
							overflowWrap: "break-word",
							overflow: "hidden",
						}}
						// className="w-full min-w-full h-20 flex flex-col border border-red 500"
					>
						<h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
							{menuItems.restaurantName} -{" "}
						</h1>
						<h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
							{menuItems.address}
						</h1>
						<div>
							<p>{menuItems.restaurantRating}</p>
						</div>
					</div>
				)}
			</div>
			<div>
				{!menuItems ? (
					<h1>Please wait whilst we load your desired restaurant</h1>
				) : (
					menuItems.menuCategories.starters.map((food, index) => {
						return (
							<div key={index}>
								<p>{food.name}</p>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}
