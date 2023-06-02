import { StyleSheet, Text, View, Alert } from 'react-native';
import { fetchGames, fetchGameStats } from '../constants/fetches';
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from 'react';
import { useIsFocused } from '@react-navigation/native';
import Scoreboard from '../components/Scoreboard';
import GamesList from '../components/GamesList';

const Scoring = ({ route, navigation }) => {
  const [games, setGames] = useState();
  const [gameStats, setGameStats] = useState();
  const [teamWinner, setTeamWinner] = useState();
  const { table, home } = route.params;
  const isFocused = useIsFocused();
  const firstRender = useRef(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
    });
  }, [navigation]);

  const refreshData = useCallback(() => {
    fetchGames(table, setGames);
    fetchGameStats(table, setGameStats);
  }, [table]);

  useEffect(() => {
    if (isFocused && !firstRender.current) {
      fetchGames(table, setGames);
      fetchGameStats(table, setGameStats);
    }
    firstRender.current = false;
  }, [isFocused, refreshData]);

  useEffect(() => {
    if (!teamWinner) {
      if (gameStats && gameStats.home.wins >= gameStats.home.forWin) {
        setTeamWinner(gameStats.home.name);
        if (isFocused) {
          Alert.alert(
            'Home Team Wins',
            `${gameStats.home.name} wins!`,
            [{ text: 'Confirm' }],
            {
              cancelable: true,
            },
          );
        }
      }
      if (gameStats && gameStats.away.wins >= gameStats.away.forWin) {
        setTeamWinner(gameStats.away.name);
        if (isFocused) {
          Alert.alert(
            'Away Team Wins',
            `${gameStats.away.name} wins!`,
            [{ text: 'Confirm' }],
            {
              cancelable: true,
            },
          );
        }
      }
    }
  }, [gameStats]);

  useEffect(() => {
    checkAllGamesComplete();
  }, [games]);

  const checkAllGamesComplete = () => {
    if (games) {
      const allGamesComplete = Object.values(games).every(
        game => !!game.winner,
      );

      if (allGamesComplete) {
        if (!teamWinner) {
          if (isFocused) {
            Alert.alert('Tie Game!', 'Please proceed to Tie Breaker Round', [
              {
                text: 'Tie Breaker',
                onPress: () =>
                  navigation.navigate('Tie Roster', {
                    table: table,
                    home: home,
                  }),
              },
            ]);
          }
        }
        if (teamWinner && isFocused) {
          Alert.alert(
            `${teamWinner} is the winner tonight!`,
            'See you next week',
            [
              {
                text: 'Cancel',
              },
              {
                text: 'End Night',
                onPress: () => navigation.navigate('End Screen'),
              },
            ],
            {
              cancelable: true,
            },
          );
        }
      }
    }
  };

  const checkTiePossibility = gameStats => {
    let homeTieNumber, awayTieNumber;

    if (gameStats.home.forTie === 'x') {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {gameStats && games && (
        <View style={styles.container}>
          <Scoreboard stats={gameStats} />
          <View style={styles.rackTitle}>
            <Text style={styles.rackTitleText}>Rack</Text>
            <Text style={styles.rackTitleText}>Games</Text>
            <Text style={styles.rackTitleText}>Break</Text>
          </View>
          <GamesList
            table={table}
            games={games}
            gameStats={gameStats}
            navigation={navigation}
            refreshData={refreshData}
          />
        </View>
      )}
    </>
  );
};

export default Scoring;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
  },
  rackTitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff9a6',
    borderRadius: 18,
  },
  rackTitleText: {
    fontSize: 24,
  },
});
