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

// Initialize Firebase Auth
const auth = getAuth(app);

// Function to create a new user
async function createAccount(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User account created:", user);
    alert("Creating Account...");
    window.location.href = "account.html";
  } catch (error) {
    console.error("Error creating account:", error.message);
    alert(error.message);
  }
}

// Add event listener to the submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event){
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  createAccount(email, password);
});