const admin = require('firebase-admin');
const fs = require('fs');
const Papa = require('papaparse');

//////////
///// THIS IMPORTS PLAYER INFORMATION FROM MY GOOGLE SHEET CSV FILE (one time used)
//////////
const serviceAccount = require('/Users/edpoplet/Desktop/Ed Projects/coding/coding secret files/expo-bca-app-firebase-adminsdk-tjxc5-8af3cc9e8a.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const csvFilePath =
  '/Users/edpoplet/Downloads/BCA players for csv - bcaPlayers.csv';

fs.readFile(csvFilePath, 'utf8', async function (err, csvString) {
  if (err) {
    console.error('Failed to read file', err);
    return;
  }
  const results = Papa.parse(csvString, { header: true });

  if (results.errors.length > 0) {
    console.error('errors while parsing CSV', results.errors);
    return;
  }

  const validData = results.data.filter(
    player => !!player.firstName && !!player.lastName,
  );

  for (let player of validData) {
    try {
      await db.collection('players').add(player);
      console.log(`Added player: ${player.firstName} ${player.lastName}`);
    } catch (error) {
      console.error(
        `Failed to add player: ${player.firstName} ${player.lastName}`,
        error,
      );
    }
  }
});
