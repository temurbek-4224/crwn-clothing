import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA9cSDlB_YZPBiIuNnQsOTf3FxcAiHtFZM",
  authDomain: "crown-db-f0913.firebaseapp.com",
  projectId: "crown-db-f0913",
  storageBucket: "crown-db-f0913.appspot.com",
  messagingSenderId: "640739780919",
  appId: "1:640739780919:web:feab0f75157afe941992b2",
  measurementId: "G-09V5JXBV3Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_accaunt' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;