// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCIlwATDGbY8BvZIiT6GCZ-IX4ujJhRYFA",
    authDomain: "demo11-27cc3.firebaseapp.com",
    projectId: "demo11-27cc3",
    storageBucket: "demo11-27cc3.appspot.com",
    messagingSenderId: "255068066537",
    appId: "1:255068066537:web:48f292137a6b18b37a9678"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const messaging = getMessaging(app);
const auth = getAuth(app);

export { app, firestore, messaging, auth };