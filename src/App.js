import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Account, Login, SignUp, ProtectedRoute, HomePage } from "./components";
import { AuthContextProvider } from "./components/context/AuthContext";

function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<ProtectedRoute />}>
						<Route path="/" element={<HomePage />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/account" element={<ProtectedRoute />}>
						<Route path="/account" element={<Account />} />
					</Route>
				</Routes>
			</AuthContextProvider>

			{/* <SignUp /> */}
		</div>
	);
}

export default App;
