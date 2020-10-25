import firebase from "firebase"

const config = {
    apiKey: "AIzaSyBYHQLxIlNUnqJQxAzjzFjpTai1kyDot0I",
    authDomain: "circles-20e13.firebaseapp.com",
    databaseURL: "https://circles-20e13.firebaseio.com",
    projectId: "circles-20e13",
    storageBucket: "circles-20e13.appspot.com",
    messagingSenderId: "634972235208",
    appId: "1:634972235208:web:12f429dc28f82403dc8cfd",
    measurementId: "G-PEFJHWRMXT"
  };
firebase.initializeApp(config);
const auth = firebase.auth;
const db = firebase.database();

export { auth, db }

