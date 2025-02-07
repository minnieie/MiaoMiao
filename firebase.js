// Import the functions you need from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALuGv5fxVtyNv7QLcWupfa4btKvky52eU",
  authDomain: "miaomiao-a78e5.firebaseapp.com",
  projectId: "miaomiao-a78e5",
  storageBucket: "miaomiao-a78e5.firebasestorage.app",
  messagingSenderId: "1013066846713",
  appId: "1:1013066846713:web:0122e4e5a26f0163d06d28",
  measurementId: "G-0VRJRRSG3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Firebase Analytics (if you're using it)
const analytics = getAnalytics(app);

// Export Firebase Auth and Firestore to be used in other files
export { auth, db, createUserWithEmailAndPassword, setDoc, doc };
