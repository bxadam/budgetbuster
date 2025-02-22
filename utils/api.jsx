// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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
// Add the security protections for API key and config obj *TO-DO*
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const userRef = collection(db, "users");
console.log("db found:", db);

getDocs(userRef).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    let users = [];
    users.push(doc.data());
    console.log("Current user array:", users);
  });
});

export { db, auth, googleProvider };
