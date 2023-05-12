import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { Text } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import { styles } from '../constants/StyleMaster';
import { URL } from '../constants/url';
// check if away team is working
const Loading = ({ route, navigation }) => {
  const [status, setStatus] = useState('loading');
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();
  const [player3, setPlayer3] = useState();
  const { table, home, teamName } = route.params;

  useEffect(() => {
    const url1 = `${URL}?type=status&table=${table}&home=${home}`;

    fetch(url1)
      .then(res => res.json())
      .then(data => {
        data.vals.teamStatus == 'locked' &&
          navigation.navigate('Scoring', { table: table, home: home });
        data.vals.teamStatus == 'open' &&
          navigation.navigate('Roster', { table: table, home: home });
        setStatus(data.vals.teamStatus);
        setPlayer1(data.vals.player1);
        setPlayer2(data.vals.player2);
        setPlayer3(data.vals.player3);
      });
  }, []);

  const handlePress = (page, table, home, teamName) => {
    navigation.navigate(page, { table, home, teamName });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headline}>
        <Text variant='displaySmall'>{teamName}</Text>
      </View>
      <View style={styles.rowSubtitle}>
        <Text variant='headlineSmall'>TABLE {table}</Text>
        <Text variant='headlineSmall'> {home ? 'Home' : 'Away'} Team</Text>
      </View>
      <View style={styles.headline}>
        <Text variant='headlineMedium'>Current line up</Text>
      </View>
      {player1 && (
        <View style={styles.rowSubtitle}>
          <Text variant='headlineSmall'>{player1.name}</Text>
          {player1.isLocked ? (
            <Text variant='headlineSmall'>Locked</Text>
          ) : (
            <Button
              mode='contained'
              onPress={() => handlePress('Roster', table, home, teamName)}
            >
              Fix me
            </Button>
          )}
        </View>
      )}
      {player2 && (
        <View style={styles.rowSubtitle}>
          <Text variant='headlineSmall'>{player2.name}</Text>
          {player2.isLocked ? (
            <Text variant='headlineSmall'>Locked</Text>
          ) : (
            <Button
              mode='contained'
              onPress={() => handlePress('Roster', table, home, teamName)}
            >
              Fix me
            </Button>
          )}
        </View>
      )}
      {player3 && (
        <View style={styles.rowSubtitle}>
          <Text variant='headlineSmall'>{player3.name}</Text>
          {player3.isLocked ? (
            <Text variant='headlineSmall'>Locked</Text>
          ) : (
            <Button
              mode='contained'
              onPress={() => handlePress('Roster', table, home, teamName)}
            >
              Fix me
            </Button>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Loading;
