import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import { fetchGameStats, fetchTieGames } from '../constants/fetches';
import Scoreboard from '../components/Scoreboard';
import LoadingScreen from '../components/LoadingScreen';
import { SelectList } from 'react-native-dropdown-select-list';
import { postTieRoster } from '../constants/posts';

const TieRoster = ({ route, navigation }) => {
  const { table, home } = route.params;
  const [stats, setStats] = useState();
  const [games, setGames] = useState();
  const [data, setData] = useState();
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');
  const [playerThree, setPlayerThree] = useState('');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    fetchTieGames(table, setGames);
    fetchGameStats(table, setStats);
  }, []);

  useEffect(() => {
    if (games) {
      if (!home && games['1'].breaker) {
        navigation.navigate('Tie Scoring', { home: home, table: table });
      }
      if (home && games['1'].racker) {
        navigation.navigate('Tie Scoring', { home: home, table: table });
      }
    }
  }, [games]);

  useEffect(() => {
    if (stats) {
      const team = home ? stats.home : stats.away;
      const playerNames = Object.values(team)
        .filter(obj => obj.hasOwnProperty('name'))
        .map(obj => ({ key: obj.name, value: obj.name }));
      setData(playerNames);
    }
  }, [stats]);

  useEffect(() => {
    if (playerOne && playerTwo && playerThree) {
      if (
        playerOne !== playerTwo &&
        playerOne !== playerThree &&
        playerTwo !== playerThree
      ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    } else {
      setShowButton(false);
    }
  }, [playerOne, playerTwo, playerThree]);

  const handleSend = () => {
    postTieRoster(table, home, playerOne, playerTwo, playerThree);
    navigation.navigate('Tie Scoring', { table: table, home: home });
  };

  return (
    <View style={styles.container}>
      {stats && data ? (
        <>
          <Scoreboard stats={stats} />
          <View style={styles.title}>
            <Text style={styles.titleText}>Choose your order</Text>
          </View>
          <View style={styles.selectView}>
            <View style={styles.selectRow}>
              <Text style={styles.positionText}>1st</Text>
              <SelectList data={data} setSelected={setPlayerOne} />
            </View>
            <View style={styles.selectRow}>
              <Text style={styles.positionText}>2nd</Text>
              <SelectList data={data} setSelected={setPlayerTwo} />
            </View>
            <View style={styles.selectRow}>
              <Text style={styles.positionText}>3rd</Text>
              <SelectList data={data} setSelected={setPlayerThree} />
            </View>
          </View>
          {!showButton && (
            <View style={styles.textContainer}>
              {!playerOne || !playerTwo || !playerThree ? (
                <Text style={styles.instructionText}>Choose your lineup</Text>
              ) : (
                <Text style={styles.errorText}>
                  You cannot play the same person twice
                </Text>
              )}
            </View>
          )}
          {showButton && (
            <View style={styles.buttonContainer}>
              <Button mode='contained' onPress={handleSend}>
                Enter Roster
              </Button>
            </View>
          )}
        </>
      ) : (
        <LoadingScreen />
      )}
    </View>
  );
};

export default TieRoster;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
  },
  selectRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  positionText: {
    paddingTop: 6,
    marginRight: 15,
    fontSize: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  instructionText: {
    fontSize: 18,
    color: 'black',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  buttonContainer: {
    marginVertical: 30,
    marginHorizontal: 100,
  },
});
