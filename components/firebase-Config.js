// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLTDz3hCJioX9L0u0IlFLbaTtOaYyfz1I",
  authDomain: "shopping-list-b80b3.firebaseapp.com",
  projectId: "shopping-list-b80b3",
  storageBucket: "shopping-list-b80b3.appspot.com",
  messagingSenderId: "777363820132",
  appId: "1:777363820132:web:47cd222571005c50cf9971"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const provider = new GoogleAuthProvider();