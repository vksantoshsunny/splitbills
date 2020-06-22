import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyASpAhF2-dXtTAGPwMVYwP8Unmj5CYqNXQ",
    authDomain: "split-expenses-73b0c.firebaseapp.com",
    databaseURL: "https://split-expenses-73b0c.firebaseio.com",
    projectId: "split-expenses-73b0c",
    storageBucket: "split-expenses-73b0c.appspot.com",
    messagingSenderId: "1079094951405",
    appId: "1:1079094951405:web:e5ceb40f6ce0a891217be4",
    measurementId: "G-2GB1WXQ8P8"
}

firebase.initializeApp(config);

window.firebase = firebase;



export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firebase