import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCg0INi8koX-EbzCX8Ys5w2p098qx-TUrc",
    authDomain: "muso-ninjas-dc162.firebaseapp.com",
    projectId: "muso-ninjas-dc162",
    storageBucket: "muso-ninjas-dc162.appspot.com",
    messagingSenderId: "518548009903",
    appId: "1:518548009903:web:4c6a047bc616decdbb755a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const projectFirestore = getFirestore(app);

// Initialize Firebase Auth
const projectAuth = getAuth(app);

// Timestamp
const timestamp = serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
