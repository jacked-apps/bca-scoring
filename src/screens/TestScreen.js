import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native-paper';
import LoadingScreen from '../components/LoadingScreen';
import { URL } from '../constants/url';
import { Select } from '../components/Select';

const TestScreen = ({ route, navigation }) => {
  const { table, home } = route.params;
  const [teamData, setTeamData] = useState();

  useEffect(() => {
    const url1 = `${URL}?type=teamInfo&table=${table}&home=${home}`;
    console.log(url1);
    const teamArray = [];
    fetch(url1)
      .then(res => res.json())
      .then(data => {
        setTeamData(data.vals);
      });
  }, []);

  return (
    <View>
      <Select
        prompt='hello'
        options={[{ label: 'wow', value: 'wow', key: 'wow' }]}
        onChange={() => console.log(value)}
        value='hello'
        name='hi'
        placeholder='hey there'
      />
      {teamData ? (
        <>
          <Text variant='headlineMedium'>Table {table}</Text>
          <Text variant='headlineMedium'>{home ? 'home' : 'away'}</Text>
          <Text variant='headlineMedium'>{teamData.TeamName}</Text>
        </>
      ) : (
        <LoadingScreen />
      )}
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
