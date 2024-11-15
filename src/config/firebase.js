// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVvHu-FcQM6q_H8YVPlNhIJQ3vT4UlcIM",
  authDomain: "blog-app-ba5f8.firebaseapp.com",
  projectId: "blog-app-ba5f8",
  storageBucket: "blog-app-ba5f8.firebasestorage.app",
  messagingSenderId: "651279214283",
  appId: "1:651279214283:web:ea4a53fca6cf37a515dd4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {
  auth
}