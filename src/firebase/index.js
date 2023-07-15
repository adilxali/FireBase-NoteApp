// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzCsF9zNpnTNpNBjGF-2GJwv8Xhe4DMrM",
  authDomain: "todo-app-87cf6.firebaseapp.com",
  projectId: "todo-app-87cf6",
  storageBucket: "todo-app-87cf6.appspot.com",
  messagingSenderId: "861007222222",
  appId: "1:861007222222:web:d5465eb94e4c102331879f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
