import  Rebase from 're-base';
import firebase from 'firebase';

// create a const firebaseApp and pull the api keys from the .env file
const firebaseApp = firebase.initializeApp({
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: "https://catch-of-the-day-d6437-default-rtdb.europe-west1.firebasedatabase.app"
      });

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;

