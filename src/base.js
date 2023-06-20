import  Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCxdhFcN5p9shE-LjL7wbC6lo9JtY_jboM",
        authDomain: "catch-of-the-day-d6437.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-d6437-default-rtdb.europe-west1.firebasedatabase.app"
      });

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;

