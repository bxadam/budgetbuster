// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0XNVpHf95pKP57_706yGK3lBDl5faI6Q",
  authDomain: "budgetbusterbackend.firebaseapp.com",
  projectId: "budgetbusterbackend",
  storageBucket: "budgetbusterbackend.firebasestorage.app",
  messagingSenderId: "834757736884",
  appId: "1:834757736884:web:6cc782208cb9f734cddae1",
  measurementId: "G-Q887GLGF56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { db };
