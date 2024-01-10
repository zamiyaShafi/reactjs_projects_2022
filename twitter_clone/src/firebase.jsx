import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFeDUSCTZKxh3eh3FcGamvXsaNupoeYyg",
    authDomain: "twitter-clone-a502c.firebaseapp.com",
    projectId: "twitter-clone-a502c",
    storageBucket: "twitter-clone-a502c.appspot.com",
    messagingSenderId: "787035134357",
    appId: "1:787035134357:web:36c7d87484db5814033e9c",
    measurementId: "G-19ZZLHZDTN"
  };
  

  const firebaseApp=firebase.initializeApp(firebaseConfig );

  const db=firebaseApp.firestore();
   export default db;