// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf4oA89PE-hLQqWTD8h8IJ5_Qb5WUHXLI",
  authDomain: "simple-blog-ce3c9.firebaseapp.com",
  projectId: "simple-blog-ce3c9",
  storageBucket: "simple-blog-ce3c9.appspot.com",
  messagingSenderId: "576946199002",
  appId: "1:576946199002:web:d0e3625ee91db4694608e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
