import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp();

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const userCollection = db.collection("users");

function getUsers() {
  db.collection("users").getDocs();
  console.log(userCollection);
}

getUsers();
