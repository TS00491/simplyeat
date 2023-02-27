import { useAuth } from "./auth";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
	//when you click on a protected route like basket, it will guide you to the login page, but once you've logged in, it would be nice if it redirected you back to the protected page. So, this works well. In order to use useLocation well, you'll have to do this in the login route also.Because that is where it is currently being redirected to.
	const location = useLocation();

	const auth = useAuth();

	//now we check if the user is logged in
	if (!auth.user) {
		return <Navigate to="/login" state={{ path: location.pathname }} />;
	}
	return children;
};
