import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC6CtRXtDmMb1ThO1PxcZd3_EbCIEmASEQ",
    authDomain: "sample-first-project-cb1b7.firebaseapp.com",
    databaseURL: "https://sample-first-project-cb1b7.firebaseio.com",
    projectId: "sample-first-project-cb1b7",
    storageBucket: "sample-first-project-cb1b7.appspot.com",
    messagingSenderId: "580068439555",
    appId: "1:580068439555:web:eb29ec037377bab4944036",
    measurementId: "G-6SVD64RK7X"
}

firebase.initializeApp(config);

window.firebase = firebase;

export const firestore = firebase.firestore();

export default firebase