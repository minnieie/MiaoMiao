// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js"; // Import Realtime Database

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

// Initialize Firebase Auth and Database
const auth = getAuth(app);
const database = getDatabase(app);

// Function to create a new user and store additional details
async function createAccount(email, password, firstName, lastName, country, streetAddress, postalCode) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User account created:", user);

    // Store additional user information in Firebase Realtime Database
    const userRef = ref(database, 'users/' + user.uid);
    await set(userRef, {
      email: email,
      firstName: firstName,
      lastName: lastName,
      country: country,
      streetAddress: streetAddress,
      postalCode: postalCode
    });

    console.log("User information saved to the database.");
    alert("Account created successfully!");
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

  // Capture the form data
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const country = document.getElementById('country').value;
  const streetAddress = document.getElementById('street-address').value;
  const postalCode = document.getElementById('postal-code').value;

  // Call createAccount with all fields
  createAccount(email, password, firstName, lastName, country, streetAddress, postalCode);
});
