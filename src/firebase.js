import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF3213otLqdrIH6jntOH8wzLoFs2J-iFU",
  authDomain: "test-966eb.firebaseapp.com",
  projectId: "test-966eb",
  storageBucket: "test-966eb.appspot.com",
  messagingSenderId: "743639156420",
  appId: "1:743639156420:web:ca1fd8d22419da47e0eb91",
  measurementId: "G-M57M75CRCP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
