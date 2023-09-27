import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import app from '..//../firebaseConfig'; // Import the firebase app instance from your firebaseConfig.js

//Table of contents
// line function
// 26   registerUser
// 40   sendVerificationEmail
// 50   loginUser
// 56   getCurrentUser
// 61   getCurrentUser
//
//
//
//
//
//
//
//

export const registerUser = async (email, password) => {
  const auth = getAuth(app); // Get the auth instance based on your initialized Firebase app
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return response.user;
  } catch (error) {
    throw error;
  }
};

export const sendVerificationEmail = async user => {
  try {
    await sendEmailVerification(user);
    console.log('Verification email sent.');
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  const auth = getAuth(app); // Get the auth instance based on your initialized Firebase app

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = () => {
  const auth = getAuth();
  return auth.currentUser;
};
