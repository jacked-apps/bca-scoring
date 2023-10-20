const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.onUserCreated = functions.auth.user().onCreate((user) => {
  const userId = user.uid;
  const email = user.email;

  return admin.firestore().collection("currentUsers").doc(userId).set({
    email: email,
  });
});
