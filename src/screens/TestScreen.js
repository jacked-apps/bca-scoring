import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text, Button } from 'react-native-paper';
import LoadingScreen from '../components/LoadingScreen';
import { URL } from '../constants/url';
import { Ionicons } from '@expo/vector-icons';
import { fetchGames, fetchTeamData } from '../constants/fetches';
import { postCheckEmail } from '../constants/posts';

const TestScreen = ({ route, navigation }) => {
  const { table, home } = route.params;
  const [teamData, setTeamData] = useState();
  const [games, setGames] = useState();

  const [selected, setSelected] = useState();
  const [handicap, setHandicap] = useState();
  const metaData = {
    person: { name: 'one', hc: 2 },
  };

  const data = [
    { key: '1', value: 'one' },
    { key: '2', value: 'two' },
    { key: '3', value: 'three' },
  ];
  const handleEmailCheck = () => {
    const email = 'shodbyed@gmail.com';
    postCheckEmail(email);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'CHECK ME OUT',
      headerStyle: {
        backgroundColor: 'lightblue',
      },
      headerTintColor: 'green',
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => navigation.navigate('Second Page', { table, home })}
        >
          <Ionicons name='arrow-back' size={24} color='white' />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleSelect = name => {
    console.log('whatever');
    setSelected(name);
    setHandicap(key);
  };
  useEffect(() => {
    fetchGames(setGames);
    fetchTeamData(table, home, setTeamData);
  }, []);

  return (
    <View>
      {teamData ? (
        <>
          <Text variant='headlineMedium'>Table {table}</Text>
          <Text variant='headlineMedium'>{home ? 'home' : 'away'}</Text>
          <Button mode='contained' onPress={handleEmailCheck}>
            try email
          </Button>
        </>
      ) : (
        <LoadingScreen />
      )}
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
