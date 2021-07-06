import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDkDXx5HlIvlv-Q93uKkhSY97weKUMxg94",
    authDomain: "clone-ae1ae.firebaseapp.com",
    projectId: "clone-ae1ae",
    storageBucket: "clonSe-ae1ae.appspot.com",
    messagingSenderId: "254255455188",
    appId: "1:254255455188:web:276c510fd564da17fe5441",
    measurementId: "G-09KW4V3E3F",
});

// const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db,auth};