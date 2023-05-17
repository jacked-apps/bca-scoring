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
