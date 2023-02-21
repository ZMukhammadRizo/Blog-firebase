import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBGvk9AUhzmA_60cyOVX65jB1pJk7PeXUE",
  authDomain: "blog-firebase-2d026.firebaseapp.com",
  projectId: "blog-firebase-2d026",
  storageBucket: "blog-firebase-2d026.appspot.com",
  messagingSenderId: "183551942929",
  appId: "1:183551942929:web:3a4afaaf2bf3f3e65facb0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()