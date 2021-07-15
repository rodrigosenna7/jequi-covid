import firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyBfXviETep7By_9pB_zTE3KItLJOFKNA0Y",
  authDomain: "jequi-sem-covid.firebaseapp.com",
  projectId: "jequi-sem-covid",
  storageBucket: "jequi-sem-covid.appspot.com",
  messagingSenderId: "995221860108",
  appId: "1:995221860108:web:d61551b782c8e071b7e329"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  let storage = firebase.storage();

  export default firebase;