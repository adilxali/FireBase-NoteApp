// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2bzEM-ITT06L4-topigw5KFifEe2seW0",
  authDomain: "todo-66ca1.firebaseapp.com",
  projectId: "todo-66ca1",
  storageBucket: "todo-66ca1.appspot.com",
  messagingSenderId: "581995647207",
  appId: "1:581995647207:web:65e7a19917244278d01242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };