import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { styles } from '../constants/StyleMaster';
import React from 'react';

const TeamBlock = ({ teamData }) => {
  return (
    <View style={styles.teamBlockContainer}>
      <View
        style={{
          borderWidth: 2,
          borderColor: '#00ced1',
          borderRadius: 10,
          padding: 10,
          backgroundColor: '#f0f8ff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 3,
        }}
      >
        <Text variant='headlineLarge'>{teamData.TeamName}</Text>
      </View>

      <View style={styles.rowPlayer}>
        <Text variant='headlineSmall'>Name</Text>
        <Text variant='headlineSmall'>H/C</Text>
      </View>
      <View style={styles.rowPlayer}>
        <Text variant='titleMedium'>{teamData.captain.name}</Text>
        <Text variant='titleMedium'>{teamData.captain.handicap}</Text>
      </View>
      <View style={styles.rowPlayer}>
        <Text variant='titleMedium'>{teamData.player2.name}</Text>
        <Text variant='titleMedium'>{teamData.player2.handicap}</Text>
      </View>
      <View style={styles.rowPlayer}>
        <Text variant='titleMedium'>{teamData.player3.name}</Text>
        <Text variant='titleMedium'>{teamData.player3.handicap}</Text>
      </View>
      {teamData.player4 && (
        <View style={styles.rowPlayer}>
          <Text variant='titleMedium'>{teamData.player4.name}</Text>
          <Text variant='titleMedium'>{teamData.player4.handicap}</Text>
        </View>
      )}
      {teamData.player5 && (
        <View style={styles.rowPlayer}>
          <Text variant='titleMedium'>{teamData.player5.name}</Text>
          <Text variant='titleMedium'>{teamData.player5.handicap}</Text>
        </View>
      )}
    </View>
  );
};

export default TeamBlock;
