import { StyleSheet, Text, View } from 'react-native';
import { fetchGames } from '../constants/fetches';
import React, { useState, useEffect, useRef } from 'react';
import { useIsFocused } from '@react-navigation/native';

const Scoring = ({ route, navigation }) => {
  const [games, setGames] = useState();
  const [navigationKey, setNavigationKey] = useState(0);
  const { table, home } = route.params;
  const isFocused = useIsFocused();
  const firstRender = useRef(false);

  useEffect(() => {
    if (isFocused && !firstRender.current) {
      fetchGames(table, setGames);
    }
    firstRender.current = false;
  }, [isFocused, navigationKey]);
  console.log('Scoring fetch', games);
  return (
    <View>
      <Text>Scoring</Text>
    </View>
  );
};

export default Scoring;

const styles = StyleSheet.create({});
