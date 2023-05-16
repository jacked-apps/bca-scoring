import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../constants/StyleMaster';
import { Button } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';

const PlayerEdit = ({ lineup, teamInfo, home }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowSingleSelect}>
        <View style={styles.left}>
          <Text>Player 1</Text>
        </View>
        <View style={styles.center}>
          <Text>Player Name</Text>
          <SelectList
            data={[
              { key: 1, value: 1 },
              { key: 2, value: 2 },
            ]}
          />
        </View>
        <View style={styles.right}>
          <Button mode='contained' icon='send'></Button>
        </View>
      </View>
    </View>
  );
};

export default PlayerEdit;
