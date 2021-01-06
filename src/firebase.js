import firebase from 'firebase-tools'

const firebaseConfig = {
  apiKey: "AIzaSyAdEMJ3zBtaz793h4gNBwuQSiNSY2uEoVM",
  authDomain: "clone-39b44.firebaseapp.com",
  projectId: "clone-39b44",
  storageBucket: "clone-39b44.appspot.com",
  messagingSenderId: "737404724236",
  appId: "1:737404724236:web:a8dfbfbbf3e9d9a41ffa29",
  measurementId: "G-S1B6YM11B0"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.Google.AuthProvider()

  export { db , auth , provider}