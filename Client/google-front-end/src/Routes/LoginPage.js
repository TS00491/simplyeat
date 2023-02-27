import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Routes/auth";

export default function LoginPage() {
	const [user, setUser] = useState("");
	const auth = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	//the below code means that: check if the path is set on the state object, and use the same as the redirectPath. If it is set, access the path, if not, navigate to route "/".
	const redirectPath = location.state?.path || "/";
	const handleLogin = () => {
		//we need to call the login function from auth context in the auth.js file. Hence we did auth = useAuth.

		auth.login(user);
		//once we set the username, we navigate the user to the homepage
		//the replace: true, makes sure that once you've logged in, when you press the back button, it doesn't go back to the login page, wherein you can login again.
		navigate(redirectPath, { replace: true });
	};
	return (
		<div>
			<label>
				Username:{" "}
				<input type="text" onChange={(e) => setUser(e.target.value)} />
			</label>

			<button onClick={handleLogin}>Login</button>
		</div>
	);
}
