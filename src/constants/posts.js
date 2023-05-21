import { URL } from './url';

export const postEditRoster = async (table, home, position, player, subHC) => {
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

export const postAddRoster = async (
  subHC,
  table,
  home,
  player1,
  player2,
  player3,
) => {
  const obj = {
    subHC: subHC,
    table: table,
    home: home,
    player1: player1,
    player2: player2,
    player3: player3,
  };
  const url = `${URL}?action=addRoster`;

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
    console.log(data);

    // handle success response here
  } catch (error) {
    console.error('Error:', error.message);
    // handle error here
  }
};

export const postSetWinner = async (table, game, playerName) => {
  'post stuff', table, game, playerName;
  const obj = {
    table: table,
    game: game,
    playerName: playerName,
  };
  const url = `${URL}?action=postWinner`;

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
    console.log(data);

    // handle success response here
  } catch (error) {
    console.error('Error:', error.message);
    // handle error here
  }
};

export const postClearWinner = async (table, game) => {
  const obj = {
    table: table,
    game: game,
  };
  const url = `${URL}?action=clearWinner`;

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
    console.log(data);

    // handle success response here
  } catch (error) {
    console.error('Error:', error.message);
    // handle error here
  }
};

export const postTieRoster = async (table, home, player1, player2, player3) => {
  const obj = {
    table: table,
    home: home,
    player1: player1,
    player2: player2,
    player3: player3,
  };
  const url = `${URL}?action=setTieRoster`;

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
    console.log(data);

    // handle success response here
  } catch (error) {
    console.error('Error:', error.message);
    // handle error here
  }
};
