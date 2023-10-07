// ------------------------------
// TABLE OF CONTENTS
// ------------------------------
// 1. User-related fetches
//    - fetchUserProfileData
//    - anotherUserFunction
// 2. Next fetch type

// ------------------------------
// IMPORTS and VARIABLES
// ------------------------------

import { db } from '../../firebaseConfig';
import 'firebase/firestore';

db.collection('players').get;

// ------------------------------
// 1. USER-RELATED FETCHES
// ------------------------------

/**
 * Fetches the profile data of a user.
 * @param {string} userId - The ID of the user.
 * @returns {Object} - The user's profile data.
 */

export const fetchUserProfileData = async userId => {
  try {
    const userDoc = await db.collection('players').doc(userId).get();

    if (userDoc.exists) {
      return userDoc.data();
    } else {
      console.error(`No user found for ID: ${userId}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user profile data:', error);
    return null;
  }
};
