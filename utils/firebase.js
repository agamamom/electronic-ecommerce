// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';

import {
    getFirestore,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDicEYnYNCca85saiArF_QtZL-H_9Foml8",
    authDomain: "electronic-ecommerce-9224a.firebaseapp.com",
    projectId: "electronic-ecommerce-9224a",
    storageBucket: "electronic-ecommerce-9224a.appspot.com",
    messagingSenderId: "1038234185637",
    appId: "1:1038234185637:web:b94b95029aa5258cebc24c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (
    email,
    password
) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
    email,
    password
) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);

export const signOutUser = async () => await signOut(auth);