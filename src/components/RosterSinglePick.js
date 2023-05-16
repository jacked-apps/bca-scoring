import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { styles } from '../constants/StyleMaster';
import { SelectList } from 'react-native-dropdown-select-list';

import React, { useState } from 'react';

const RosterSinglePick = ({ lineup, teamInfo, home }) => {
  home = true;
  const [player1, setPlayer1] = useState({ edit: false });
  const [player2, setPlayer2] = useState({ edit: false });
  const [player3, setPlayer3] = useState({ edit: false });

  console.log('singleLineup', teamInfo);

  const PlainView = ({ index, playerName, locked }) => {
    return (
      <>
        <View style={styles.left}>
          <Text variant='titleMedium'>Player {index + 1}</Text>
        </View>
        <View style={styles.center}>
          <Text variant='titleLarge'>{playerName}</Text>
        </View>
        <View style={styles.right}>
          <Button
            icon={locked ? 'account-lock' : 'square-edit-outline'}
            mode='contained'
            disabled={locked}
          ></Button>
        </View>
      </>
    );
  };

  const EditView = ({ index, playerName, locked }) => {
    const data = {};
    return (
      <>
        <View style={styles.left}>
          <Text variant='titleMedium'>Player {index + 1}</Text>
        </View>
        <SelectList
          boxStyles={styles.selectBox}
          inputStyles={styles.selectInput}
          data={data}
          setSelected={value => handleSelect(value)}
        />
      </>
    );
  };
  return (
    <View style={styles.headline}>
      {Object.entries(lineup).map(([key, player], index) => {
        return (
          <View key={key} style={styles.rowSingleSelect}>
            <PlainView
              index={index}
              playerName={player.name}
              locked={player.locked}
            />
          </View>
        );
      })}
    </View>
  );
};

export default RosterSinglePick;
