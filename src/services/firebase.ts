import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBzPksvocjfEvp0zm69fg-Afg27PKQuGjM",
  authDomain: "letmeask-6c680.firebaseapp.com",
  databaseURL: "https://letmeask-6c680-default-rtdb.firebaseio.com",
  projectId: "letmeask-6c680",
  storageBucket: "letmeask-6c680.appspot.com",
  messagingSenderId: "603405224094",
  appId: "1:603405224094:web:9777620cb16c7809e6538f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();