// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhdAetpR1NLxpon34P978vXQotMowbX4A",
  authDomain: "portfolio-abner.firebaseapp.com",
  projectId: "portfolio-abner",
  storageBucket: "portfolio-abner.appspot.com",
  messagingSenderId: "581712273665",
  appId: "1:581712273665:web:beabd14b8fb88cd99ebb00",
  measurementId: "G-YKW52QH6Y3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
