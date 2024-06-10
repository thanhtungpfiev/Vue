import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFuB1BLl6WvIGVzpfStW63V3EXnKWR7TE",
    authDomain: "udemy-vue-firebase-sites-c4412.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-c4412",
    storageBucket: "udemy-vue-firebase-sites-c4412.appspot.com",
    messagingSenderId: "603564741386",
    appId: "1:603564741386:web:b6f836c7adf84767b9e0f3"
  };

// init firebase
const firebaseApp = initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = getFirestore(firebaseApp);

// init auth service
const projectAuth = getAuth(firebaseApp);

// timestamp
const timestamp = serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
