import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage'

let firebaseConfig = {
     apiKey: "AIzaSyAMfstbCsORlruDQyAHvdDOMPkzsrwXLJU",
     authDomain: "meuapp-42c1b.firebaseapp.com",
     databaseURL: "https://meuapp-42c1b.firebaseio.com",
     projectId: "meuapp-42c1b",
     storageBucket: "meuapp-42c1b.appspot.com",
     messagingSenderId: "341271554747",
     appId: "1:341271554747:web:2ad3ee9f3eee403b33579e",
     measurementId: "G-JVTR7YRJ5D"
  };
  if(!firebase.apps.length){
       firebase.initializeApp(firebaseConfig);
  }

  export default firebase;