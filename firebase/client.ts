import {initializeApp,getApp,getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcAllB-W2HvCD0JbqBjudxNqFG1RwewPc",
    authDomain: "prepai-c5e4f.firebaseapp.com",
    projectId: "prepai-c5e4f",
    storageBucket: "prepai-c5e4f.firebasestorage.app",
    messagingSenderId: "24900817801",
    appId: "1:24900817801:web:897af9171af8df4be28758",
    measurementId: "G-FFF3MPKTXW"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app)
export const db = getFirestore(app)