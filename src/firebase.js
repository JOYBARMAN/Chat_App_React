import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDjO_OMYY2Ctn_r1WWdFkgrJaaEGfG0AkY",
  authDomain: "jbchat-6b6ed.firebaseapp.com",
  projectId: "jbchat-6b6ed",
  storageBucket: "jbchat-6b6ed.appspot.com",
  messagingSenderId: "282820412849",
  appId: "1:282820412849:web:91e93aeb0412d0a6096990",
}).auth();
