// firebaseConfig.js

// documentation : https://firebase.google.com/docs/web/setup
import { initializeApp } from 'firebase/app';
import { FirebaseApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "DIN_API_KEY",
  authDomain: "drone-detection-firebase.firebaseapp.com",
  projectId: "drone-detection-firebase",
  storageBucket: "drone-detection-firebase.appspot.com",
  messagingSenderId: "486570022223", 
  appId: "1:486570022223:android:e82208ce7763c0eeade13a"
};

export const firebaseApp : FirebaseApp = initializeApp(firebaseConfig);