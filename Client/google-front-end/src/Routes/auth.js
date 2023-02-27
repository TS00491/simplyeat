import { useState, useContext, createContext } from "react";
const AuthContext = createContext(null);
// in this component we maintain the user state and define the functions to log in and log out.

export const AuthProvider = ({ children }) => {
	//these set of States will help us define the log in and log out states.
	const [user, setUser] = useState(null);

	const login = (user) => {
		setUser(user);
	};
	const logout = () => {
		setUser(null);
	};

	//provide the values for the above functions/states by using <AuthContext.Provider />
	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

//we're going to define a function that returns the value of <AuthContext>
export const useAuth = () => {
	return useContext(AuthContext);
};
