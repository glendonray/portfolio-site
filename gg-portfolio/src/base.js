import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBIAs_8WUCqf46c3XQDuf8pNJUZbvum7hM",
  authDomain: "glendon-grapperhaus-portfolio.firebaseapp.com",
  databaseURL:
    "https://glendon-grapperhaus-portfolio-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

//this is a default export
export default base;
