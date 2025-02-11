// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4iTuZf3MsQ2XspqdLeG39AX5PvqPckLU",
  authDomain: "randomnumbergenerator-951f5.firebaseapp.com",
  projectId: "randomnumbergenerator-951f5",
  storageBucket: "randomnumbergenerator-951f5.firebasestorage.app",
  messagingSenderId: "147592595203",
  appId: "1:147592595203:web:dccabed22d01e6eb8dcb36",
  measurementId: "G-0K2PCSXLM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);