import { Alert } from 'react-native';

export function getPlayerHCByName(name, teamData) {
  let out;
  Object.keys(teamData).forEach(key => {
    if (teamData[key].name === name) {
      out = players[key].handicap;
    }
  });
  return out;
}
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

export const shortenName = name => {
  if (name.length > 12) {
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastNameInitial = nameParts[nameParts.length - 1].charAt(0);
    return `${firstName} ${lastNameInitial}.`;
  }
  return name;
};
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
