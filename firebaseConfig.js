import { initializeApp } from '@firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from '@firebase/auth';
import { getFirestore } from '@firebase/firestore'; // Import getFirestore from Firebase
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase app
const firebaseConfig = Constants.expoConfig.extra.firebaseConfig;

const app = initializeApp(firebaseConfig);

// Access Firestore using Firebase app
const db = getFirestore(app); // Use getFirestore with the Firebase app

// Initialize Firebase Auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, db, auth };
