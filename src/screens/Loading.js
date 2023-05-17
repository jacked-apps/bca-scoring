import { View, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { Text } from 'react-native-paper';
import React, { useEffect, useState, useRef } from 'react';
import { styles } from '../constants/StyleMaster';
import { URL } from '../constants/url';
import LoadingScreen from '../components/LoadingScreen';
import TeamBlock from '../components/TeamBlock';
import RosterEdit from '../components/RosterEdit';
import { useIsFocused } from '@react-navigation/native';
import PlayerEdit from '../components/PlayerEdit';

// check if away team is working
const Loading = ({ route, navigation }) => {
  const [status, setStatus] = useState();
  const [edit, setEdit] = useState();

  const { table, home } = route.params;
  const isFocused = useIsFocused();
  const firstRender = useRef(false);

  useEffect(() => {
    // leaving this fetch here because it does to many specific things
    const url1 = `${URL}?type=status&table=${table}&home=${home}`;
    if (isFocused && !firstRender.current) {
      fetch(url1)
        .then(res => res.json())
        .then(data => {
          data.vals.teamStatus == 'locked' &&
            navigation.navigate('Scoring', { table: table, home: home });
          data.vals.teamStatus == 'open' &&
            navigation.navigate('Roster', { table: table, home: home });
          setStatus(data.vals);
          //console.log('status', data.vals);
        });
    }
    firstRender.current = false;
  }, [isFocused]);

  const handlePress = (page, table, home) => {
    navigation.navigate(page, { table, home });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        {status && status.thisTeam.teamInfo ? (
          <View style={styles.headline}>
            <TeamBlock teamData={status.thisTeam.teamInfo} />
            <RosterEdit
              lineup={status.thisTeam.lineup}
              teamInfo={status.thisTeam.teamInfo}
              home={home}
              setEdit={setEdit}
            />

            {edit && (
              <PlayerEdit
                lineup={status.thisTeam.lineup}
                teamInfo={status.thisTeam.teamInfo}
                home={home}
                table={table}
                position={edit ? edit : 1}
                setEdit={setEdit}
              />
            )}

            <View>
              <View style={styles.headline}>
                <Text variant='titleMedium'>
                  {status.opposingTeam.teamInfo.TeamName}
                </Text>
              </View>
              <View>
                <Text variant='titleMedium'>
                  {status.opposingTeam.lineupSet
                    ? 'is ready. You can'
                    : 'has not set their lineup check with them before you'}{' '}
                  proceed to scoring
                </Text>
              </View>
              <View style={styles.submitButton}>
                <Button
                  mode='contained'
                  onPress={() => handlePress('Scoring', table, home)}
                >
                  Go to Scoring
                </Button>
              </View>
            </View>
          </View>
        ) : (
          <LoadingScreen />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Loading;
