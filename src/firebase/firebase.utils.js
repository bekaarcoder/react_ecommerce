import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import FIREBASE_CONFIG from "../config/firebaseConfig";

firebase.initializeApp(FIREBASE_CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
