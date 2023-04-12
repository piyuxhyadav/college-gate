import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const HomePage = () => {
	const { user } = UserAuth();
	if (!user?.email) return <Navigate to="/login" />;
	return <div>HomePage</div>;
};

export default HomePage;
