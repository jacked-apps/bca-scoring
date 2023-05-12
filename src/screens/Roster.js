import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import { URL } from '../constants/url';
import { styles } from '../constants/StyleMaster';
import LoadingScreen from '../components/LoadingScreen';
///  check away team working
const Roster = ({ route, navigation }) => {
  const { table, home, teamName } = route.params;
  const [teamData, setTeamData] = useState();

  useEffect(() => {
    const url1 = `${URL}?type=teamInfo&table=${table}&home=${home}`;

    const teamArray = [];
    fetch(url1)
      .then(res => res.json())
      .then(data => {
        setTeamData(data.vals);
        console.log('RosterData', data.vals);
      });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      {teamData ? (
        <>
          <View style={styles.headline}>
            <Text variant='displaySmall'>{teamData.TeamName}</Text>
          </View>

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
          <View style={styles.rowPlayer}>
            <Text variant='titleMedium'>{teamData.player4.name}</Text>
            <Text variant='titleMedium'>{teamData.player4.handicap}</Text>
          </View>
          <View style={styles.rowPlayer}>
            <Text variant='titleMedium'>{teamData.player5.name}</Text>
            <Text variant='titleMedium'>{teamData.player5.handicap}</Text>
          </View>
          <SelectDropdown />
        </>
      ) : (
        <LoadingScreen />
      )}
    </SafeAreaView>
  );
};

export default Roster;
