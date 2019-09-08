import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAJXLOpoPy7zDGpTgaYic5zxL-WIxch7cM",
    authDomain: "react-with-firebase-b9720.firebaseapp.com",
    databaseURL: "https://react-with-firebase-b9720.firebaseio.com",
    projectId: "react-with-firebase-b9720",
    storageBucket: "react-with-firebase-b9720.appspot.com",
    messagingSenderId: "453139442896",
    appId: "1:453139442896:web:7e7dfcc4a9b5ec05"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;