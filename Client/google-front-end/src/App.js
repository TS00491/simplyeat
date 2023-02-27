import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Routes/auth";
import "./App.css";
import "./AdvertisementCarousel.css";
import "../src/Components/StickyDivPage.css";
import LoginPage from "./Routes/LoginPage";
import Basket from "./Routes/Basket";
import Menu from "./Components/Menu";
import { RequireAuth } from "./Routes/RequireAuth";

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Body />}></Route>
					<Route path="/login" element={<LoginPage />}></Route>
					<Route
						path="/basket"
						element={
							<RequireAuth>
								<Basket />
								{/* Enter the Menu component of each restaurant here too, as that should only be clickable once the use has logged in.
								 */}
							</RequireAuth>
						}
					></Route>
					<Route path=":id" element={<Menu />}></Route>
				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;
