import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBkMtax4b9DxII5p-kWXDUynHG3TTJHEZI',
  authDomain: 'chat-web-app-f77ab.firebaseapp.com',
  projectId: 'chat-web-app-f77ab',
  storageBucket: 'chat-web-app-f77ab.appspot.com',
  messagingSenderId: '575509089782',
  appId: '1:575509089782:web:10373d0cf74916d9cd8bd7',
  databaseURL:
    'https://chat-web-app-f77ab-default-rtdb.europe-west1.firebasedatabase.app',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
