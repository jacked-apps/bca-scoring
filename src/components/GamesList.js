import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import PlayerButton from './PlayerButton';
import React from 'react';
import GameEditButton from './GameEditButton';

const GamesList = ({ games, navigation, table, refreshData, tie }) => {
  const handleRefresh = () => {
    refreshData();
  };
  return (
    <View style={{ height: 500, paddingBottom: 50 }}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.insideView}>
          {Object.keys(games).map(gameKey => (
            <View style={styles.gameRow} key={gameKey}>
              <View style={[styles.column, styles.leftColumn]}>
                <PlayerButton
                  table={table}
                  playerName={games[gameKey].breaker}
                  role='breaker'
                  winner={games[gameKey].winner}
                  gameKey={gameKey}
                  refreshData={refreshData}
                  tie={tie}
                />
              </View>
              <View style={[styles.column, styles.centerColumn]}>
                <GameEditButton
                  table={table}
                  gameKey={gameKey}
                  winner={games[gameKey].winner}
                  refreshData={refreshData}
                  tie={tie}
                />
              </View>
              <View style={[styles.column, styles.rightColumn]}>
                <PlayerButton
                  playerName={games[gameKey].racker}
                  role='racker'
                  winner={games[gameKey].winner}
                  table={table}
                  refreshData={refreshData}
                  gameKey={gameKey}
                  tie={tie}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={{ marginTop: 10 }}>
        <Button mode='contained' onPress={handleRefresh}>
          Refresh
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    // Add your styles for the scroll container
  },

  gameRow: {
    flexDirection: 'row',
    // Add your styles for the game row
  },
  column: {
    flex: 1,
    // Add your common styles for the columns
  },
  leftColumn: {
    flex: 3,
  },
  centerColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 3,
  },
});

export default GamesList;
