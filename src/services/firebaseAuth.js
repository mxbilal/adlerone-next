/* import firebase from "firebase/app";
import "firebase/storage"; // This is important for file storage

const firebaseConfig = {
	apiKey: "AIzaSyB9vIt2X__JUATG0GRt7N8Z-O9XaS4IP84",
	authDomain: "adlerone-de.firebaseapp.com",
	projectId: "adlerone-de",
	storageBucket: "adlerone-de.appspot.com",
	messagingSenderId: "640386886034",
	appId: "1:640386886034:web:a61100c686f9aefbdcb94b",
	measurementId: "G-9H8SVMTS4T",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); */

// Import required classes from Firebase
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your Firebase config object
const firebaseConfig = {
	apiKey: "AIzaSyB9vIt2X__JUATG0GRt7N8Z-O9XaS4IP84",
	authDomain: "adlerone-de.firebaseapp.com",
	projectId: "adlerone-de",
	storageBucket: "adlerone-de.appspot.com",
	messagingSenderId: "640386886034",
	appId: "1:640386886034:web:a61100c686f9aefbdcb94b",
	measurementId: "G-9H8SVMTS4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Now you can use `storage` for Firebase Storage operations
export { storage };
