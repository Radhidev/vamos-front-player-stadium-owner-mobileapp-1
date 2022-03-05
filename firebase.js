// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnV7BrtR5FQj6c_UWdc3ueJLhLQAYWp0M",
  authDomain: "vamos-f8658.firebaseapp.com",
  projectId: "vamos-f8658",
  storageBucket: "vamos-f8658.appspot.com",
  messagingSenderId: "659029952142",
  appId: "1:659029952142:web:01ad2418801132aa97abdf",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
export { auth };
