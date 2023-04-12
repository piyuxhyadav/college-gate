import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyB7YEiWYdEA9upibSPyaPD_gcDwtf0yg5E",
	authDomain: "college-gate-ait.firebaseapp.com",
	projectId: "college-gate-ait",
	storageBucket: "college-gate-ait.appspot.com",
	messagingSenderId: "727398650433",
	appId: "1:727398650433:web:853885affaf39cb8892cc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
