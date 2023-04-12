import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const { signIn } = UserAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleLogin = async () => {
		try {
			await signIn(email, password);
			navigate("/");
		} catch (e) {
			console.log(e.message);
		}
	};
	return (
		<div>
			<h1>Log In</h1>
			<input
				type="email"
				placeholder="enter email"
				required
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			></input>
			<input
				type="password"
				placeholder="enter password"
				onChange={(e) => setPassword(e.target.value)}
				required
				value={password}
			></input>
			<button type="submit" onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};

export default Login;
