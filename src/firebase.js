// import firebase from 'firebase/app';
import * as firebase from 'firebase/app';
import 'firebase/auth';

// import {firebaseAuth}

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBAE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBAE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBAE_PROJET_ID,
  storageBucket: process.env.REACT_APP_FIREBAE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBAE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBAE_APP_ID,
});

// export const auth = app.auth();
export default app;
