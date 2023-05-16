import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../constants/StyleMaster';
import { Button } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';
import { getChoices } from '../constants/functions';

const PlayerEdit = ({ lineup, teamInfo, home, position }) => {
  const playerName = () => {
    key = 'player' + position;
    player = lineup[key].name;

    return player;
  };
  const [selected, setSelected] = useState();
  //const data = getChoices(teamInfo, lineup, home);
  console.log('player edit', lineup, teamInfo, home);

  data = getChoices(teamInfo, lineup, home);
  return (
    <View style={styles.container}>
      <View style={styles.rowSingleSelect}>
        <View style={styles.left}>
          <Text>Player {position}</Text>
        </View>
        <View style={styles.center}>
          <Text>Change: {playerName()} </Text>
          <SelectList data={data} setSelected={setSelected} />
        </View>
        <View style={styles.right}>
          <Button mode='contained' icon='send'></Button>
        </View>
      </View>
    </View>
  );
};

export default PlayerEdit;
