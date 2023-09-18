// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { firebaseConfig } from "./firabaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//adatbázis eléréshez példányosítás, kell egy referencia
export const db =getFirestore(app)
export const auth=getAuth(app)