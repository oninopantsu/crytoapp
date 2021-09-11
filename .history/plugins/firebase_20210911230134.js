<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCcCSsE6NRW1FcxhOugh3RMA2Nt42mCCXg",
    authDomain: "cry-to-app.firebaseapp.com",
    projectId: "cry-to-app",
    storageBucket: "cry-to-app.appspot.com",
    messagingSenderId: "241969306028",
    appId: "1:241969306028:web:287e1edda722907b0cc209",
    measurementId: "G-2GPZYH2JJL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>