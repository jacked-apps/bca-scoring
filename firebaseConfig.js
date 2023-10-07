import { initializeApp } from '@firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = Constants.manifest.extra.firebaseConfig;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, db, auth };
