
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBEWSUL8OenGi_jwoQmT5DyAYy_1Vll34o",
    authDomain: "growhabitwebsite.firebaseapp.com",
    projectId: "growhabitwebsite",
    storageBucket: "growhabitwebsite.appspot.com",
    messagingSenderId: "132751804243",
    appId: "1:132751804243:web:7834116e33141f88d883a6",
    measurementId: "G-J4ZP9X0KY7",
    databaseURL: "https://growhabitwebsite-default-rtdb.firebaseio.com/"
  };

 


export const app = initializeApp(firebaseConfig) ; 
export const auth = getAuth(app); 

