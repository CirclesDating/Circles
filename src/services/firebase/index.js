import firebase from "firebase"

const config = {

  };
firebase.initializeApp(config);
const auth = firebase.auth;
const db = firebase.database();

export { auth, db }

