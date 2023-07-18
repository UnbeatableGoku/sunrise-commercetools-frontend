// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCEXA49Y47KtJyFfcS73L_V9akDwegcS-0',
  authDomain: 'authentication-demo-2-9360f.firebaseapp.com',
  projectId: 'authentication-demo-2-9360f',
  storageBucket: 'authentication-demo-2-9360f.appspot.com',
  messagingSenderId: '1073043687915',
  appId: '1:1073043687915:web:97329c86d9b0e836c871ae',
  measurementId: 'G-9EQW2L6QG3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
