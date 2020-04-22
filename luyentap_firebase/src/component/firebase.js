import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAUB7cZS-RH1XcH0GTbbnDHF2ee5iXC6Ow",
    authDomain: "firepracticeoppa.firebaseapp.com",
    databaseURL: "https://firepracticeoppa.firebaseio.com",
    projectId: "firepracticeoppa",
    storageBucket: "firepracticeoppa.appspot.com",
    messagingSenderId: "200316971171",
    appId: "1:200316971171:web:f3f0109b742053c32ab716",
    measurementId: "G-FPPX9BT1P3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const noteData = firebase.database().ref('fireNote');