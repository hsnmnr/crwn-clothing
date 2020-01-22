import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBy34wHyVn5ulhf0HE-f7oM93Hluo1ygXo",
  authDomain: "crwn-db-7827e.firebaseapp.com",
  databaseURL: "https://crwn-db-7827e.firebaseio.com",
  projectId: "crwn-db-7827e",
  storageBucket: "crwn-db-7827e.appspot.com",
  messagingSenderId: "884568633805",
  appId: "1:884568633805:web:f89d2d4846705ceb935484",
  measurementId: "G-BNGL81JT0K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
