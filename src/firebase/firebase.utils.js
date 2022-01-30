import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import  "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDqaBF9LFUplIpRqVSz8N8mtFhd_be9Lyg",
  authDomain: "crwn-repo-db.firebaseapp.com",
  projectId: "crwn-repo-db",
  storageBucket: "crwn-repo-db.appspot.com",
  messagingSenderId: "967038325634",
  appId: "1:967038325634:web:f86a73a024a37a662e759b",
  measurementId: "G-03P83ZXM47"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


