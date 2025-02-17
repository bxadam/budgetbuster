import { getDocs, doc, collection } from "firebase/firestore";
import { db } from "./utils/api";

console.log("db found:", db);

const userRef = collection(db, "users");

let users = [];

getDocs(userRef).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    users.push(doc.data());
    console.log("Current user array:", users);
  });
});
