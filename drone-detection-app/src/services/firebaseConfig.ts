// firebaseConfig.js

// documentation : https://firebase.google.com/docs/web/setup
import { initializeApp } from 'firebase/app';
import { FirebaseApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

export const firebaseApp : FirebaseApp = initializeApp(firebaseConfig);