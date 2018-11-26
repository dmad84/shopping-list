
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyA42-DkejyxnyZFYUklQrT-jTAIXPhO0EM",
    authDomain: "shopping-list-8af71.firebaseapp.com",
    databaseURL: "https://shopping-list-8af71.firebaseio.com",
    projectId: "shopping-list-8af71",
    storageBucket: "shopping-list-8af71.appspot.com",
    messagingSenderId: "512339926444"
};
firebase.initializeApp(config);
export default firebase;