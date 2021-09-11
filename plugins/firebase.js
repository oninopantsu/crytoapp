import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyCcCSsE6NRW1FcxhOugh3RMA2Nt42mCCXg",
        authDomain: "cry-to-app.firebaseapp.com",
        projectId: "cry-to-app",
        storageBucket: "cry-to-app.appspot.com",
        messagingSenderId: "241969306028",
        appId: "1:241969306028:web:287e1edda722907b0cc209",
        measurementId: "G-2GPZYH2JJL"
      }
  )
}

export default firebase