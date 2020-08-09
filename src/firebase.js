import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyCspvlIyr3hnMDY9RzYW4JPXgh5o2wPaPw",
  authDomain: "kit-kit-clone.firebaseapp.com",
  databaseURL: "https://kit-kit-clone.firebaseio.com",
  projectId: "kit-kit-clone",
  storageBucket: "kit-kit-clone.appspot.com",
  messagingSenderId: "851411872932",
  appId: "1:851411872932:web:2eab64104a65c5f9750a31",
  measurementId: "G-NLQDYDQG4X"
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export default db
