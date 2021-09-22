import { createApp } from "vue"
import App from './App.vue'
import router from './router/index'
import firebase from 'firebase/app'
import axios from "axios"


const config = {
  apiKey: "AIzaSyCcCSsE6NRW1FcxhOugh3RMA2Nt42mCCXg",
  authDomain: "cry-to-app.firebaseapp.com",
  projectId: "cry-to-app",
  storageBucket: "cry-to-app.appspot.com",
  messagingSenderId: "241969306028",
  appId: "1:241969306028:web:287e1edda722907b0cc209",
  measurementId: "G-2GPZYH2JJL"

}

firebase.initializeApp(config);

const app = createApp(App);
app.use(router);
app.mount("#app");