import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { PoolTable } from './PoolTable';
import { styles } from '../constants/StyleMaster';
import React from 'react';

export const TeamBlockPoolTable = ({ teamData }) => {
  return (
    <View style={styles.teamBlockContainer}>
      <View style={styles.teamBlockTitle}>
        <Text variant='headlineLarge'>{teamData.TeamName}</Text>
      </View>
      <PoolTable>
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
      </PoolTable>
    </View>
  );
};
