



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_DOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

const api = import.meta.env.VITE_API_KEY
console.log(api);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);

export default Auth;
