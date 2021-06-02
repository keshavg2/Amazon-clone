import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDbD5UcnwSZFmQjzZyO2jR1ZMDqR65IjA4",
    authDomain: "clone-47cff.firebaseapp.com",
    projectId: "clone-47cff",
    storageBucket: "clone-47cff.appspot.com",
    messagingSenderId: "34341515187",
    appId: "1:34341515187:web:49856d653758d62f8165c6",
    measurementId: "G-S4G2TRL4N3"
  });

const auth = firebase.auth();

  export{ auth };