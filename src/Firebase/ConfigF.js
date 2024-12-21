



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdyum0kWQwfNGt5SqBseWIYoajmstfSUs",
  authDomain: "p11artifacts.firebaseapp.com",
  projectId: "p11artifacts",
  storageBucket: "p11artifacts.firebasestorage.app",
  messagingSenderId: "575012639084",
  appId: "1:575012639084:web:dd4f29d1eb5c90cac42349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);

export default Auth;
