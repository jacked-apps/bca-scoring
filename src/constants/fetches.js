import { URL } from './url';

export const fetchTeamList = setTeams => {
  const url1 = `${URL}?type=teamList`;
  const teamArray = [];
  fetch(url1)
    .then(res => res.json())
    .then(data => {
      setTeams(data.vals);
    });
};

export const fetchGames = (table, setGames) => {
  const url1 = `${URL}?type=games&table=${table}`;
  const teamArray = [];
  fetch(url1)
    .then(res => res.json())
    .then(data => {
      setGames(data.vals);
    });
};
export const fetchGameStats = (table, setGameStats) => {
  const url1 = `${URL}?type=tableStats&table=${table}`;
  const teamArray = [];
  fetch(url1)
    .then(res => res.json())
    .then(data => {
      setGameStats(data.vals);
    });
};
