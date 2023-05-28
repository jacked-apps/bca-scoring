import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { fetchGameStats, fetchTieGames } from '../constants/fetches';
import ScoreBoard from '../components/Scoreboard';
import GamesList from '../components/GamesList';
import { checkTieWinners } from '../constants/checkTieWinners';

const TieScoring = ({ route, navigation }) => {
  const [stats, setStats] = useState();
  const [games, setGames] = useState();
  const { table, home } = route.params;

  const refreshData = useCallback(() => {
    fetchTieGames(table, setGames);
    fetchGameStats(table, setStats);
  }, [table]);

  useEffect(() => {
    if (stats) {
      const winner = checkTieWinners(games);

      if (winner) {
        const text = winner.charAt(0).toUpperCase() + winner.slice(1);
        Alert.alert(
          'Home Team Wins',
          `${stats.home.name} wins!`,
          [
            {
              text: 'Confirm',
              onPress: () =>
                navigation.navigate('End Screen', { home: home, table: table }),
            },
          ],
          {
            cancelable: true,
          },
        );
      }
    }
  }, [games, stats]);

  useEffect(() => {
    fetchGameStats(table, setStats);
    fetchTieGames(table, setGames);
  }, []);

  return (
    <>
      {stats && games && (
        <View>
          <ScoreBoard stats={stats} />
          <GamesList
            games={games}
            table={table}
            navigation={navigation}
            refreshData={refreshData}
            tie={true}
          />
        </View>
      )}
    </>
  );
};

export default TieScoring;

const styles = StyleSheet.create({});
