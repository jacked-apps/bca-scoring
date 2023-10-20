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

  // ... [rest of your code]

  // ... [rest of your code]

  for (let player of validData) {
    try {
      if (player.email) {
        const email = player.email.toLowerCase(); // Convert email to lowercase
        const firstName =
          player.firstName.charAt(0).toUpperCase() +
          player.firstName.substring(1).toLowerCase(); // Capitalize first letter and make the rest lowercase
        const lastName =
          player.lastName.charAt(0).toUpperCase() +
          player.lastName.substring(1).toLowerCase(); // Capitalize first letter and make the rest lowercase

        player.firstName = firstName; // Update firstName with the formatted value
        player.lastName = lastName; // Update lastName with the formatted value

        await db.collection('pastPlayers').doc(email).set(player);
        console.log(
          `Added player: ${firstName} ${lastName} with email as ID: ${email}`,
        );
      } else {
        console.error(
          `Player: ${player.firstName} ${player.lastName} does not have an email. Skipped.`,
        );
      }
    } catch (error) {
      console.error(
        `Failed to add player: ${player.firstName} ${player.lastName} with email as ID: ${player.email}`,
        error,
      );
    }
  }
});
