import { getDatabase, ref, set, get } from 'firebase/database';
import app from '../../firebaseConfig';

const db = getDatabase(app);

// Function to add data
export const addData = async (path, data) => {
  try {
    const dataRef = ref(db, path);
    await set(dataRef, data);
  } catch (error) {
    console.error('Error adding data:', error);
  }
};

// Function to fetch data
export const fetchData = async path => {
  try {
    const dataRef = ref(db, path);
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No data available at this path.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// ... you can add more functions as needed (e.g., update, delete)
