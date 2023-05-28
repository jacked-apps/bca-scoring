import { URL } from '../constants/url';
// import Constants from 'expo-constants';

// const URL = Constants.manifest.extraREACT_APP_URL;

export const fetchTeamList = async setTeams => {
  const url1 = `${URL}?type=teamList`;
  try {
    const res = await fetch(url1);
    const data = await res.json();
    setTeams(data.vals);
  } catch (error) {
    console.error(error);
  }
};

export const fetchGames = async (table, setGames) => {
  const url1 = `${URL}?type=games&table=${table}`;
  try {
    const res = await fetch(url1);
    const data = await res.json();
    setGames(data.vals);
  } catch (error) {
    console.error(error);
  }
};

export const fetchGameStats = async (table, setGameStats) => {
  const url1 = `${URL}?type=tableStats&table=${table}`;
  try {
    const res = await fetch(url1);
    const data = await res.json();
    setGameStats(data.vals);
  } catch (error) {
    console.error(error);
  }
};

export const fetchTieGames = async (table, setTieGame) => {
  const url1 = `${URL}?type=tieGames&table=${table}`;
  try {
    const res = await fetch(url1);
    const data = await res.json();
    setTieGame(data.vals);
  } catch (error) {
    console.error(error);
  }
};

export const fetchTeamData = async (table, home, setTeamData) => {
  const url = `${URL}?type=teamInfo&table=${table}&home=${home}`;
  console.log('fetchTeam url', url);
  try {
    const res = await fetch(url);
    const responseText = await res.text();
    console.log('Response:', responseText);
    const data = JSON.parse(responseText);
    setTeamData(data.vals);
    if (data.vals && data.vals.captain) {
      return data.vals;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
