// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWr5M_POD4NH9wzSTAN_VUKWPlHEy8qXg",
  authDomain: "aula-1-523b9.firebaseapp.com",
  databaseURL: "https://aula-1-523b9-default-rtdb.firebaseio.com",
  projectId: "aula-1-523b9",
  storageBucket: "aula-1-523b9.appspot.com",
  messagingSenderId: "692284492988",
  appId: "1:692284492988:web:dd1b2f9a5835f0688854b9",
  measurementId: "G-NK5WZ2G6KM"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;