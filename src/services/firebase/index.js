// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSBjlK0LRci2ZE0_vamDG0YeM2HpQdps0",
  authDomain: "coder31865.firebaseapp.com",
  projectId: "coder31865",
  storageBucket: "coder31865.appspot.com",
  messagingSenderId: "347969093890",
  appId: "1:347969093890:web:158ed3881d8b6ad104c21b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)