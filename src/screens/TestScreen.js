import { StyleSheet, View } from 'react-native';
import { postEditRoster } from '../constants/posts';
import React, { useEffect, useState } from 'react';
import { Text, Button } from 'react-native-paper';
import LoadingScreen from '../components/LoadingScreen';
import { URL } from '../constants/url';
import { SelectList } from 'react-native-dropdown-select-list';

const TestScreen = ({ route, navigation }) => {
  const { table, home } = route.params;
  const [teamData, setTeamData] = useState();
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
  const handleSelect = name => {
    console.log('whatever');
    setSelected(name);
    setHandicap(key);
  };
  useEffect(() => {
    const url1 = `${URL}?type=teamInfo&table=${table}&home=${home}`;
    const teamArray = [];
    fetch(url1)
      .then(res => res.json())
      .then(data => {
        setTeamData(data.vals);
      });
  }, []);

  return (
    <View>
      <SelectList
        data={data}
        setSelected={(value, key, second) => console.log(value, key, selected)}
        //boxStyles={{}}
        //inputStyles={{}}
        //dropdownStyles={{}}
        //dropdownItemStyles={{}}
        //dropdownTextStyles={{}}
        placeholder={'Select from this stuff'}
        maxHeight={200}
      />
      <Text>
        name:{selected} H/C: {handicap}
      </Text>
      {teamData ? (
        <>
          <Text variant='headlineMedium'>Table {table}</Text>
          <Text variant='headlineMedium'>{home ? 'home' : 'away'}</Text>
          <Text variant='headlineMedium'>{teamData.TeamName}</Text>
          <Button onPress={() => postEditRoster(table, home)}>send shit</Button>
        </>
      ) : (
        <LoadingScreen />
      )}
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
