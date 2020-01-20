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

export const createUserProfile = async (userAuth, otherDetails) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  try {
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...otherDetails
        });
      } catch (error) {
        console.log("Error creating user.", error.message);
      }
    }
  } catch (error) {
    console.log(error.message);
  }

  return userRef;
};

export default firebase;
