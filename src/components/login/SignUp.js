import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { createUser } = UserAuth();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await createUser(email, password);
			navigate("/account");
		} catch (e) {
			setError(e.message);
			console.log(e.message);
		}
	};

	return (
		<div>
			<h1>Sign Up!</h1>
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
			<button onClick={handleSubmit} type="submit">
				Sign up
			</button>
		</div>
	);
};

export default SignUp;
