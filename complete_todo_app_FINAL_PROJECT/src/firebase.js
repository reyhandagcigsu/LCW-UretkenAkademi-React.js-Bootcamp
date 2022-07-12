import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDALDBkMKkhzUusq9l2JgB4B9q8ZgNaMG4",
  authDomain: "react-authentication-30c2b.firebaseapp.com",
  projectId: "react-authentication-30c2b",
  storageBucket: "react-authentication-30c2b.appspot.com",
  messagingSenderId: "23449513642",
  appId: "1:23449513642:web:2baa3de85c1fd977922ad3",
  measurementId: "G-QE7FK1CZ1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
