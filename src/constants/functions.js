import { Alert } from 'react-native';

/**
 * INDEX TABLE OF CONTENTS
 * 1. Player functions
 * 2. Team functions
 * 3. Name functions
 * 4. Email Functions
 * 6. Response handling functions
 */

// =======================================
// 1. PLAYER FUNCTIONS
// =======================================

/** fetch player handicap by name
 * @param {string} name Player name
 * @param {object} teamData team data
 */
export function getPlayerHCByName(name, teamData) {
  let out;
  Object.keys(teamData).forEach(key => {
    if (teamData[key].name === name) {
      out = players[key].handicap;
    }
  });
  return out;
}
// =======================================
// 2. TEAM FUNCTIONS
// =======================================

/**
 * Get the highest handicap between two players.
 * @param {string} player1Name Name of the first player.
 * @param {string} player2Name Name of the second player.
 * @param {object} teamData Data of the team.
 * @returns Highest handicap or a string indicating a player isn't assigned.
 */

export function getHighestHandicap(player1Name, player2Name, teamData) {
  if (!player1Name) {
    return ' player not assigned';
  }
  if (!player2Name) {
    return ' player not assigned';
  }

  const playerNames = ['captain', 'player2', 'player3', 'player4', 'player5'];
  const playerKeys = playerNames.filter(
    key =>
      teamData[key].name === player1Name || teamData[key].name === player2Name,
  );
  const otherKeys = playerNames.filter(key => !playerKeys.includes(key));
  const playerHandicaps = otherKeys
    .map(key => teamData[key].handicap)
    .sort((a, b) => b - a);
  return playerHandicaps[0];
}
/**
 * Get the choices for the team
 * @param {array} team array of players on the team
 * @param {array} line 3 players the team chose to play
 * @param {number} pos position of the substitute if there is one
 * @returns an array of the team in order
 */

export const getChoices = (team, line, pos) => {
  const wholeTeam = Object.values(team).map(obj => obj.name);
  wholeTeam.splice(0, 2);
  const namesToRemove = Object.values(line).map(obj => obj.name);
  wholeTeam.push(subName(pos));
  const available = wholeTeam.filter(name => !namesToRemove.includes(name));
  const data = [];
  available.map(player => {
    data.push({ key: player, value: player });
  });
  return data;
};
export const subName = home => {
  return ` SUB ${home ? 'HOME' : 'AWAY'}`;
};
// =======================================
// 3. NAME FUNCTIONS
// =======================================

/**
 * shortens a players name by using last name initial only
 * @param {string} name Player name
 * @returns {string} player first name and initial
 */

export const shortenName = name => {
  if (name.length > 12) {
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastNameInitial = nameParts[nameParts.length - 1].charAt(0);
    return `${firstName} ${lastNameInitial}.`;
  }
  return name;
};

// =======================================
// 4. EMAIL FUNCTIONS
// =======================================

/**
 * Check emails against an exempt list
 * @param {email} name Player name
 * @returns {string} player first name and initial
 */

export const checkExemptEmails = email => {
  const exemptEmails = [
    'shodbyed@gmail.com',
    'apple@apple.com',
    'google@google.com',
    'somepoolhusler@gmail.com',
  ];

  if (exemptEmails.includes(email)) {
    return true;
  }
  return false;
};

/**
 * shortens a players name by using last name initial only
 * @param {string} name Player name
 * @returns {string} player first name and initial
 */
export const isValidEmail = email => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return emailRegex.test(email);
};

// =======================================
// 5. RESPONSE HANDLING FUNCTIONS
// =======================================

/**
 * handles responses from the status
 * @param {string} status error responses
 * @returns {array} [good{boolean}, title{text}, text{text}]
 */

export function setResponses(status, navigation) {
  var good;
  var title;
  var text;
  switch (status) {
    case 'no email':
      good = false;
      title = 'Bad Email';
      text = 'Your email does not match any on file';
      break;
    case 'nice try':
      good = false;
      title = 'Bad Email';
      text = 'You need a real email not just the word';
      break;
    case 'no password':
      good = false;
      title = 'Bad Password';
      text = 'Your password does not match';
      break;
    case 'match':
      good = true;
      title = 'Success';
      text = 'Welcome and good luck tonight!';
      break;
    case 'updated':
      good = true;
      title = 'Success';
      text = 'Your password has been updated.  Good luck tonight';
      break;
    case 'added':
      good = true;
      title = 'Success';
      text = 'Your new email and password have been saved good luck tonight';
      break;
    case 'not valid':
      good = false;
      title = 'Bad Email';

      text = 'You need a real email not just the word';
      break;
    case 'change manually':
      good = false;
      title = 'Special Case';
      text = 'Please change your password manually';
      break;
  }
  return [good, String(title), String(text)];
}
/**
 * takes above response and navigates where it needs to go via alert
 * @param {array} response [good, title, text]
 * @param {navigation} navigation the ability to navigate
 * @returns an alert that either navigates home or stays on that page
 */

export const popUpAlert = (response, navigation) => {
  const [good, title, text] = response;
  Alert.alert(
    title,
    text,
    good
      ? [
          {
            text: 'Proceed',
            onPress: () => {
              navigation.navigate('Home');
            },
          },
        ]
      : [
          {
            text: 'Try again',
            onPress: () => {},
          },
        ],
  );
};
