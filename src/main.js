import { createApp } from 'vue'
import App from './App.vue'





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBokrkwVMMuYe-rWjMiZVWRPwOFc_xKvlw",
  authDomain: "projecttest20220720.firebaseapp.com",
  databaseURL: "https://projecttest20220720-default-rtdb.firebaseio.com",
  projectId: "projecttest20220720",
  storageBucket: "projecttest20220720.appspot.com",
  messagingSenderId: "466660124009",
  appId: "1:466660124009:web:e68b0869234363d08589f8"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 createApp(App).mount('#app')