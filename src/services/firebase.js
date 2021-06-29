import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBVtIH0vTk7ZQh3BEgmm9SlC20qPyTekhw",
  authDomain: "chatit-420.firebaseapp.com",
  databaseURL: "chatit-420.appspot.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
