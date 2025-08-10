// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Added the import for getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9jxIqw4I3YAko3_-nH6ZgPJDCQ0DsMdc",
  authDomain: "studioproject-575d2.firebaseapp.com",
  projectId: "studioproject-575d2",
  storageBucket: "studioproject-575d2.firebasestorage.app",
  messagingSenderId: "621077575197",
  appId: "1:621077575197:web:b7f1416d9dfc0eb0c878f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Export the auth instance so other components can use it
export { auth };
