import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8KCbsWGzgy2J50ameBNjawyTQux_P7yQ",
  authDomain: "zingmp3-a803e.firebaseapp.com",
  projectId: "zingmp3-a803e",
  storageBucket: "zingmp3-a803e.appspot.com",
  messagingSenderId: "596992436147",
  appId: "1:596992436147:web:d10749d971110275f5cdc6"
};

const app = initializeApp(firebaseConfig);

export { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };

