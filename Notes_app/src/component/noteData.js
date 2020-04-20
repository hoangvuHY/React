import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA7i1vxpgeKugPsfTbCTjFBAHqhrldgH3M",
    authDomain: "notesreact-e32ff.firebaseapp.com",
    databaseURL: "https://notesreact-e32ff.firebaseio.com",
    projectId: "notesreact-e32ff",
    storageBucket: "notesreact-e32ff.appspot.com",
    messagingSenderId: "405434143136",
    appId: "1:405434143136:web:af4d61f6c9885ced9a94c5",
    measurementId: "G-6YLR3KS5N0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('dataForNote/');