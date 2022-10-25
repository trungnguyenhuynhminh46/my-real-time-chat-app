// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoQEo0SDrTmVuV4WrCdbjmPbYpCXwxuLA",
  authDomain: "chat-app-7deaa.firebaseapp.com",
  projectId: "chat-app-7deaa",
  storageBucket: "chat-app-7deaa.appspot.com",
  messagingSenderId: "1008091390386",
  appId: "1:1008091390386:web:18239c5aac2f2e966d44ab",
  measurementId: "G-GM7B3N9P7T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, storage };
