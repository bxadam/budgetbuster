import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp();

const db = getFirestore();

const userCollection = db.collection("users");

console.log(userCollection);
