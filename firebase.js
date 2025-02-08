// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALuGv5fxVtyNv7QLcWupfa4btKvky52eU",
  authDomain: "miaomiao-a78e5.firebaseapp.com",
  databaseURL: "https://miaomiao-a78e5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "miaomiao-a78e5",
  storageBucket: "miaomiao-a78e5.firebasestorage.app",
  messagingSenderId: "1013066846713",
  appId: "1:1013066846713:web:0122e4e5a26f0163d06d28",
  measurementId: "G-0VRJRRSG3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Function to create a new user account
function createAccount(email, password, firstName, lastName, streetAddress, postalCode, country) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("User created:", user);

      // You can add additional user information to Firestore or Realtime Database here if needed
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorCode, errorMessage);
    });
}