import firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPACeX3a2oSPdnmRrC08XPxxMDSq4QZsw",
  authDomain: "sellyourimages-a6e87.firebaseapp.com",
  databaseURL: "https://sellyourimages-a6e87.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
