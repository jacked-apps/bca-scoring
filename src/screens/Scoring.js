import { StyleSheet, Text, View } from 'react-native';
import { fetchGames, fetchGameStats } from '../constants/fetches';
import React, { useState, useEffect, useRef } from 'react';
import { useIsFocused } from '@react-navigation/native';
import Scoreboard from '../components/Scoreboard';
import ExpandableContainer from '../components/ExpandableContainer';

const Scoring = ({ route, navigation }) => {
  const [games, setGames] = useState();
  const [gameStats, setGameStats] = useState();
  const [navigationKey, setNavigationKey] = useState(0);
  const { table, home } = route.params;
  const isFocused = useIsFocused();
  const firstRender = useRef(false);

  useEffect(() => {
    if (isFocused && !firstRender.current) {
      fetchGames(table, setGames);
      fetchGameStats(table, setGameStats);
    }
    firstRender.current = false;
  }, [isFocused, navigationKey]);

  return (
    <View style={styles.container}>
      {gameStats && <Scoreboard stats={gameStats} />}
    </View>
  );
};

export default Scoring;

const styles = StyleSheet.create({});
