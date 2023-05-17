import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { styles } from '../constants/StyleMaster';
import { SelectList } from 'react-native-dropdown-select-list';

import React, { useState } from 'react';

const RosterEdit = ({ lineup, setEdit }) => {
  const PlainView = ({ index, playerName, locked }) => {
    return (
      <>
        <View style={styles.left}>
          <Text variant='titleMedium'>Player {index + 1}</Text>
        </View>
        <View style={styles.center}>
          <Text variant='titleLarge' style={styles.centerText}>
            {playerName}
          </Text>
        </View>
        <View style={styles.right}>
          <Button
            icon={locked ? 'account-lock' : 'square-edit-outline'}
            mode='contained'
            disabled={locked}
            onPress={() => setEdit(index + 1)}
          ></Button>
        </View>
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

export default RosterEdit;
