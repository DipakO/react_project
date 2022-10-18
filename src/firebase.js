import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATFNOXTJ0GnyMMn_1yFn0sCk4Q4Ynhsfw",
  authDomain: "otp-app-7b300.firebaseapp.com",
  projectId: "otp-app-7b300",
  storageBucket: "otp-app-7b300.appspot.com",
  messagingSenderId: "546437325444",
  appId: "1:546437325444:web:f0dcb6bf9d5089c75058d1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
