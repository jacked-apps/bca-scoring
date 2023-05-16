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
export const getChoices = ({ teamInfo, lineup, home }) => {
  const wholeTeam = Object.values(teamInfo).map(obj => obj.name);
  wholeTeam.splice(0, 2);
  const namesToRemove = Object.values(lineup).map(obj => obj.name);
  wholeTeam.push(` SUB ${home ? 'HOME' : 'AWAY'}`);
  const available = wholeTeam.filter(name => !namesToRemove.includes(name));
  const data = [];
  available.map(player => {
    data.push({
      key: player,
      value: player,
    });
  });
  return data;
};
