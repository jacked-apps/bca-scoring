import { Text, View } from 'react-native';
import React from 'react';
import { styles } from '../constants/StyleScoreboard';
import ScoreBoardTeam from './ScoreBoardTeam';

const Scoreboard = ({ stats }) => {
  console.log('scoreboard', stats);
  return (
    <View style={styles.container}>
      <View style={styles.homeView}>
        <ScoreBoardTeam info={stats.home} home={true} />
      </View>

      <View style={styles.awayView}>
        <ScoreBoardTeam info={stats.away} home={false} />
      </View>
    </View>
  );
};

export default Scoreboard;
