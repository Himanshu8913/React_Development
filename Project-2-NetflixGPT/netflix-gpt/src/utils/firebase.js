// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCivYC3PFiwK_wdpyZgtzHCvVqhu4iuA0",
    authDomain: "netflixgpt-fc8b1.firebaseapp.com",
    projectId: "netflixgpt-fc8b1",
    storageBucket: "netflixgpt-fc8b1.appspot.com",
    messagingSenderId: "409248921081",
    appId: "1:409248921081:web:9e60ee4ae0d9524c44b928",
    measurementId: "G-2Z615MYTV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);