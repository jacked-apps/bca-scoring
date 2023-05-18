import { View, Text } from 'react-native';
//import { Text } from 'react-native-paper';
import React from 'react';
import { styles } from '../constants/StyleScoreboard';
import { shortenName } from '../constants/functions';

const ScoreBoardTeam = ({ info, home }) => {
  return (
    <View style={styles.teamContainer}>
      <View style={styles.toWinTie}>
        <Text style={styles.toWinTieText}>To Win {info.forWin}</Text>
        <Text style={styles.toWinTieText}>To Tie {info.forTie}</Text>
      </View>
      <View style={styles.teamName}>
        <Text style={styles.teamNameText}>{info.name}</Text>
      </View>

      <View style={styles.nameWins}>
        <Text style={styles.nameWinsText}>NAME</Text>
        <Text style={styles.nameWinsText}>WINS</Text>
      </View>
      <View style={styles.playerName}>
        <Text style={styles.playerNameText}>TEAM</Text>
        <Text style={styles.playerNameText}>
          {info.player1.wins + info.player2.wins + info.player3.wins}
        </Text>
      </View>
      <View style={styles.playerName}>
        <Text style={styles.playerNameText}>
          {shortenName(info.player1.name)}
        </Text>
        <Text style={styles.playerNameText}>{info.player1.wins}</Text>
      </View>
      <View style={styles.playerName}>
        <Text style={styles.playerNameText}>
          {shortenName(info.player2.name)}
        </Text>
        <Text style={styles.playerNameText}>{info.player2.wins}</Text>
      </View>
      <View style={styles.playerName}>
        <Text style={styles.playerNameText}>
          {shortenName(info.player3.name)}
        </Text>
        <Text style={styles.playerNameText}>{info.player3.wins}</Text>
      </View>
      <View style={styles.need}>
        <Text style={styles.needText}>Just {info.need} more</Text>
      </View>
    </View>
  );
};

export default ScoreBoardTeam;
