import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA1Cr6BHjb62ja3bOcNUElDbzhW4hBlT14",
  authDomain: "waldo-59ae0.firebaseapp.com",
  projectId: "waldo-59ae0",
  storageBucket: "waldo-59ae0.appspot.com",
  messagingSenderId: "661292251084",
  appId: "1:661292251084:web:6716844792412fd3058f69",
  measurementId: "G-F89TLHWR6C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;