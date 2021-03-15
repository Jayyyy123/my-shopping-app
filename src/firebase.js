// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPfYu2WyGlUjw6KVL13bVdMNHeaejbrew",
  authDomain: "my-shopping-app-959c3.firebaseapp.com",
  databaseURL: "https://my-shopping-app-959c3.firebaseio.com",
  projectId: "my-shopping-app-959c3",
  storageBucket: "my-shopping-app-959c3.appspot.com",
  messagingSenderId: "120143807635",
  appId: "1:120143807635:web:79673a1de9c400d6eeb966",
  measurementId: "G-4LJME5094Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
