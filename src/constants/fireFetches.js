// ------------------------------
// TABLE OF CONTENTS
// ------------------------------
// 1. User-related fetches
//    - fetchPastPlayerData
//    - fetchCurrentUserInfo
// 2. Next fetch type

// ------------------------------
// IMPORTS and VARIABLES
// ------------------------------
import { getFirestore, collection, doc, getDoc } from '@firebase/firestore'; // Import getFirestore from Firebase
import { app, db } from '../../firebaseConfig';
const firestore = getFirestore(app);

// ------------------------------
// 1. USER-RELATED FETCHES
// ------------------------------

/**
 * Fetches the profile data of a user.
 * @param {string} email - The email of the user.
 * @returns {Object} - The user's profile data.
 */

export const fetchPastPlayerData = async email => {
  try {
    const playerRef = doc(db, 'pastPlayers', email);
    const playerDoc = await getDoc(playerRef);

    if (playerDoc.exists) {
      const playerData = playerDoc.data();
      //console.log('Player Profile Data:', playerData); // Log the retrieved player data
      return playerData;
    } else {
      console.log('Player not found in Firestore');
      return null;
    }
  } catch (error) {
    console.error('Error fetching player profile data:', error);
    throw error; // Handle the error appropriately in your application
  }
};

/**
 * Fetches the current user data using the users UID.
 * @param {string} userId - the ID of the user
 * @returns {object} - the users current data.
 */
export const fetchCurrentUserInfo = async userId => {
  try {
    const userRef = doc(db, 'currentUsers', userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists) {
      const userData = userDoc.data();
      console.log('Current User Info Fetch', userData);
      return userData;
    } else {
      console.log('User not found in Firestore');
      return null;
    }
  } catch (error) {
    console.error('Error fetching current user data: ', error);
    throw error;
  }
};
