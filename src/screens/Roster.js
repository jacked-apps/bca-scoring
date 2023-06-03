import { View, SafeAreaView, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import { URL } from '../constants/url';
import { styles } from '../constants/StyleMaster';
import { SelectList } from 'react-native-dropdown-select-list';
import LoadingScreen from '../components/LoadingScreen';
import TeamBlock from '../components/TeamBlock';
import { getHighestHandicap, subName } from '../constants/functions';
import { subHCData } from '../components/SubHCSelect';
import { postAddRoster } from '../constants/posts';
import { TeamBlockPoolTable } from '../components/TeamBlockPoolTable';

const Roster = ({ route, navigation }) => {
  const { table, home } = route.params;

  const [teamData, setTeamData] = useState();
  const [subHC, setSubHC] = useState(false);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerOneHC, setPlayerOneHC] = useState([]);
  const [playerTwo, setPlayerTwo] = useState('');
  const [playerTwoHC, setPlayerTwoHC] = useState('');
  const [playerThree, setPlayerThree] = useState('');
  const [playerThreeHC, setPlayerThreeHC] = useState('');

  const [data, setData] = useState();

  const handleSub = (value, highestHC, setHC) => {
    const out = value > highestHC ? value : highestHC;
    setSubHC(out);
    setHC(out);
  };

  const SubHC = ({ player1, player2, setHC }) => {
    if (playerOne && playerTwo && playerThree) {
      const highestHC = getHighestHandicap(player1, player2, teamData);

      return (
        <SelectList
          data={subHCData}
          setSelected={value => handleSub(value, highestHC, setHC)}
          placeholder='Sub H/C'
        />
      );
    } else return <Text>Choose all Players</Text>;
  };

  const handleSelect = (value, setPlayer, setHC) => {
    if (value === 'sub') {
      setPlayer(subName(home));
      setHC(5);
    } else {
      setPlayer(teamData[value].name);
      setHC(teamData[value].handicap);
    }
    if (
      playerOne != subName(home) &&
      playerTwo != subName(home) &&
      playerThree != subName(home)
    ) {
    }
  };

  useEffect(() => {
    const url1 = `${URL}?type=teamInfo&table=${table}&home=${home}`;

    const teamArray = [];
    fetch(url1)
      .then(res => res.json())
      .then(data => {
        if (data.vals && data.vals.captain) {
          setTeamData(data.vals);

          const captainName = data.vals.captain.name || '';
          const player2Name = data.vals.player2.name || '';
          const player3Name = data.vals.player3.name || '';

          const dataArray = [
            { key: 'captain', value: captainName },
            { key: 'player2', value: player2Name },
            { key: 'player3', value: player3Name },
          ];
          if (data.vals.player4 && data.vals.player4.name) {
            const player4Name = data.vals.player4.name;
            dataArray.push({ key: 'player4', value: player4Name });
          }

          if (data.vals.player5 && data.vals.player5.name) {
            const player5Name = data.vals.player5.name;
            dataArray.push({ key: 'player5', value: player5Name });
          }

          dataArray.push({ key: 'sub', value: subName(home) });
          setData(dataArray);
        }
      });
  }, []);

  const handleSend = async () => {
    await postAddRoster(subHC, table, home, playerOne, playerTwo, playerThree);
    navigation.navigate('Loading', { table, home });
  };

  const SubmitButton = () => {
    return (
      <View style={styles.headline}>
        <Button onPress={handleSend} mode='contained'>
          Set This Roster
        </Button>
      </View>
    );
  };

  const SubmitVerify = () => {
    if (!playerOne || !playerTwo || !playerThree) {
      return <Text>Choose your players</Text>;
    } else if (
      (playerOne && playerOne === playerTwo) ||
      playerOne === playerThree
    ) {
      return <Text>You cannot play the same person twice</Text>;
    } else if (playerTwo && playerTwo === playerThree) {
      return <Text>You cannot play the same person twice</Text>;
    } else if (playerOneHC > 2 || playerTwoHC > 2 || playerThreeHC > 2) {
      return <Text>Enter your Sub handicap</Text>;
    } else return <SubmitButton />;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {teamData ? (
          <>
            <TeamBlockPoolTable teamData={teamData} />

            <View style={{ marginTop: 30 }}>
              <View style={styles.rowSelect}>
                <Text variant='headlineSmall'>Player 1</Text>
                <SelectList
                  boxStyles={styles.selectBox}
                  inputStyles={styles.selectInput}
                  data={data}
                  setSelected={value =>
                    handleSelect(value, setPlayerOne, setPlayerOneHC)
                  }
                />
              </View>
              <View style={styles.rowSelect}>
                <Text variant='headlineSmall'>Player 2</Text>
                <SelectList
                  boxStyles={styles.selectBox}
                  inputStyles={styles.selectInput}
                  data={data}
                  setSelected={value =>
                    handleSelect(value, setPlayerTwo, setPlayerTwoHC)
                  }
                />
              </View>
              <View style={styles.rowSelect}>
                <Text variant='headlineSmall'>Player 3</Text>
                <SelectList
                  boxStyles={styles.selectBox}
                  inputStyles={styles.selectInput}
                  data={data}
                  setSelected={value =>
                    handleSelect(value, setPlayerThree, setPlayerThreeHC)
                  }
                />
              </View>
              <View style={styles.headline}>
                {playerOne === subName(home) && (
                  <SubHC
                    player1={playerTwo}
                    player2={playerThree}
                    setHC={setPlayerOneHC}
                  />
                )}
                {playerTwo === subName(home) && (
                  <SubHC
                    player1={playerOne}
                    player2={playerThree}
                    setHC={setPlayerTwoHC}
                  />
                )}
                {playerThree === subName(home) && (
                  <SubHC
                    player1={playerTwo}
                    player2={playerOne}
                    setHC={setPlayerThreeHC}
                  />
                )}

                <Text variant='titleLarge'>
                  Team Handicap: {+playerOneHC + +playerTwoHC + +playerThreeHC}
                </Text>
              </View>
              <View style={styles.lineup}>
                <Text variant='titleMedium'>1st: {playerOne}</Text>
                <Text variant='titleMedium'>HC: {playerOneHC}</Text>
              </View>
              <View style={styles.lineup}>
                <Text variant='titleMedium'>2nd: {playerTwo}</Text>
                <Text variant='titleMedium'>HC: {playerTwoHC}</Text>
              </View>
              <View style={styles.lineup}>
                <Text variant='titleMedium'>3rd: {playerThree}</Text>
                <Text variant='titleMedium'>HC: {playerThreeHC}</Text>
              </View>
              <View style={styles.headline}></View>
            </View>
            <SubmitVerify />
          </>
        ) : (
          <LoadingScreen />
        )}
      </ScrollView>
    </View>
  );
};

export default Roster;
