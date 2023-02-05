// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNK2PqFYC-SlaFwKMbbTQP4SiVuXJlthc",
  authDomain: "clone-d2f4f.firebaseapp.com",
  projectId: "clone-d2f4f",
  storageBucket: "clone-d2f4f.appspot.com",
  messagingSenderId: "366836048063",
  appId: "1:366836048063:web:54be4058ed0c92da76a60a",
  measurementId: "G-54LJQPHCSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export default app;