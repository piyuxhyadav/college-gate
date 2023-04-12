import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
	const navigate = useNavigate();
	const { user, logout } = UserAuth();
	const handleLogOut = async () => {
		try {
			await logout();
			navigate("/login");
			console.log("logged out!");
		} catch (e) {
			console.log(e.message);
		}
	};
	console.log(user);
	return !user?.email ? null : (
		<div>
			User email: {user.email}
			<button onClick={handleLogOut}>Logout</button>
		</div>
	);
};

export default Account;
