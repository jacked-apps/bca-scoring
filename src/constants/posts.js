import { URL } from './url';

export const postEditRoster = async ({
  table,
  home,
  position,
  player,
  subHC,
}) => {
  const obj = {
    subHC: subHC,
    table: table,
    home: home,
    position: position,
    player: player,
  };
  const url = `${URL}?action=editRoster`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();

    // handle success response here
    //navigation.navigate('Loading', { table, home });
  } catch (error) {
    console.error('Error:', error.message);
    // handle error here
  }
};
