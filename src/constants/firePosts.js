// ------------------------------
// TABLE OF CONTENTS
// ------------------------------
// 1. User-related posts
//    - updateUserProfile
//    - fetchCurrentUserInfo
// 2. Next fetch type

// ------------------------------
// IMPORTS and VARIABLES
// ------------------------------
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
} from '@firebase/firestore'; // Import getFirestore from Firebase
import { app, db } from '../../firebaseConfig';
const firestore = getFirestore(app);

// ------------------------------
// 1. USER-RELATED POSTS
// -----------------------------

/**
 * updates the profile data of a user.
 * @param {string} userId - The Id of the user.
 * @param {object} data - The profileData of the user.
 * @returns {Promise<void>} - A promise indicating the completion of the update
 */

export const updateUserProfile = async (userId, data) => {
  try {
    const userRef = doc(db, 'currentUsers', userId);
    await updateDoc(userRef, data);
    console.log('User profile updated successfully');
  } catch (error) {
    console.error('Error updating user profile', error);
  }
};
