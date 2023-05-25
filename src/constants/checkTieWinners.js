export const checkTieWinners = games => {
  var awayWins = 0;
  var homeWins = 0;
  var winner;
  games['1'].racker === games['1'].winner && homeWins++;
  games['1'].breaker === games['1'].winner && awayWins++;
  games['2'].racker === games['2'].winner && awayWins++;
  games['2'].breaker === games['2'].winner && homeWins++;
  games['3'].racker === games['3'].winner && homeWins++;
  games['3'].breaker === games['3'].winner && awayWins++;
  if (homeWins === 2) winner = 'home';
  if (awayWins === 2) winner = 'away';
  return winner;
};
