// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdmG_Y3MGhMW0q5NxGsjCT22wY38SIsoU",
  authDomain: "auth-moha-milon-63fc8.firebaseapp.com",
  projectId: "auth-moha-milon-63fc8",
  storageBucket: "auth-moha-milon-63fc8.firebasestorage.app",
  messagingSenderId: "810678747716",
  appId: "1:810678747716:web:25020226a84df1ee75f211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);