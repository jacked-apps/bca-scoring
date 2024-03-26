// ------------------------------
// TABLE OF CONTENTS
// ------------------------------
// 1. Hooks
//    - useFetchPastPlayerById
//    - useFetchCurrentUserById
//    - useFetchPastPlayers
//    - useFetchCurrentUsers
// 2. FireBaseFunctions
//    - fetchPastPlayerByIdRQ
//    - fetchCurrentUserById
//    - fetchAllPastPlayersRQ
//    - fetchAllCurrentUsers

//------------------------
// IMPORTS
//------------------------
import { useQuery } from 'react-query';
import { db } from '../../firebaseConfig';
import { collection, doc, getDoc, getDocs } from '@firebase/firestore';

// ------------------------------
// 1. HOOKS
// ------------------------------

export const useFetchPastPlayerById = (playerId) => {
  return useQuery(
    ['pastPlayer', playerId],
    () => fetchPastPlayerByIdRQ(playerId),
    {
      enabled: !!playerId,
    }
  );
};
export const useFetchCurrentUserById = (id) => {
  return useQuery(['currentUser', id], () => fetchCurrentUserById(id), {
    enabled: !!id,
  });
};

export const useFetchPastPlayers = () => {
  return useQuery('pastPlayers', fetchAllPastPlayersRQ);
};

export const useFetchCurrentUsers = () => {
  return useQuery('currentUsers', fetchAllCurrentUsersRQ);
};

// ------------------------------
// 2. FIREBASE FUNCTIONS
// ------------------------------

/**
 * Fetches a PastPlayer object by ID from Firestore.
 *
 * @param playerId - The ID of the past player to fetch.
 * @returns A Promise resolving to the PastPlayer object if found, or null if not found.
 * @throws Error if ID is not provided.
 */
export const fetchPastPlayerByIdRQ = async (playerId) => {
  if (playerId === undefined) {
    throw new Error('Player ID not provided');
  }
  const playerDoc = doc(db, 'pastPlayers', playerId);
  const playerDocSnapshot = await getDoc(playerDoc);
  if (playerDocSnapshot.exists()) {
    return {
      id: playerDocSnapshot.id,
      ...playerDocSnapshot.data(),
    };
  } else {
    throw new Error('Player not found');
  }
};

/**
 * Fetches a CurrentUser object by ID from Firestore.
 *
 * @param id - The ID of the user to fetch.
 * @returns A Promise resolving to the CurrentUser object if found, or null if not found.
 * @throws Error if ID is not provided.
 */
export const fetchCurrentUserById = async (id) => {
  if (id === undefined) {
    throw new Error('User ID not provided');
  }
  const userDoc = doc(db, 'currentUsers', id);
  const userDocSnapshot = await getDoc(userDoc);

  if (userDocSnapshot.exists()) {
    return {
      id: userDocSnapshot.id,
      ...userDocSnapshot.data(),
    };
  } else {
    throw new Error('User not found');
  }
};

/**
 * Fetches all PastPlayer objects from Firestore.
 *
 * @returns Promise resolving to an array of all PastPlayer objects.
 */
const fetchAllPastPlayersRQ = async () => {
  const querySnapshot = await getDocs(collection(db, 'pastPlayers'));
  const playersData = [];

  querySnapshot.forEach((doc) => {
    const playerData = doc.data();
    playersData.push({
      ...playerData,
      id: doc.id,
    });
  });

  return playersData;
};

/**
 * Fetches all CurrentUser objects from Firestore.
 *
 * @returns Promise resolving to an array of all CurrentUser objects.
 */
const fetchAllCurrentUsersRQ = async () => {
  const querySnapshot = await getDocs(collection(db, 'currentUsers'));
  const usersData = [];

  querySnapshot.forEach((doc) => {
    const userData = doc.data();
    usersData.push({
      ...userData,
      id: doc.id,
    });
  });

  return usersData;
};
