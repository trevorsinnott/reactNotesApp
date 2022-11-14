// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw1qVtNV7cglP2nzxcDdmeZbjlH1YzlZY",
  authDomain: "notes-app-186c9.firebaseapp.com",
  projectId: "notes-app-186c9",
  storageBucket: "notes-app-186c9.appspot.com",
  messagingSenderId: "67995674136",
  appId: "1:67995674136:web:cb89188e85e9616f47856d",
};

console.log("firebase config", firebaseConfig);

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
