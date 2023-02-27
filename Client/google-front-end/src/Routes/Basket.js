// import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Routes/auth";

export default function Basket() {
	//need to protect this page, so it's only accessible when a user is logged in.

	//display user name here.
	const auth = useAuth();
	const navigate = useNavigate();

	//handle user logging out
	const handleLogout = () => {
		auth.logout();
		navigate("/");
	};

	return (
		<div>
			WELCOME {auth.user} to your Basket Profile.
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}
