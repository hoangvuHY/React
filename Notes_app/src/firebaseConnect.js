import * as firebase from 'firebase'

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

// firebase.analytics();

export const firebaseConnect = firebase.initializeApp(firebaseConfig);

var data = firebase.database().ref('dataForNote/note3');

/* Lấy dữ liệu
    data.once('value').then(function (snapshot) {
    console.log(snapshot.val());
}) */ 
/* Sửa dữ liệu

*/
data.set({
    id:3,
    title:"Tieu de cua note 3",
    content:"Demo content for note 3"
})