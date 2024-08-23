// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBeitlVsjIs928w3847ZqBVGzDwdfnwEoc",
	authDomain: "todo-app-with-authentica-f68d5.firebaseapp.com",
	projectId: "todo-app-with-authentica-f68d5",
	storageBucket: "todo-app-with-authentica-f68d5.appspot.com",
	messagingSenderId: "853208688303",
	appId: "1:853208688303:web:8ec89989d2fd9ebdef565a",
	measurementId: "G-YEQ0BDYHGT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
