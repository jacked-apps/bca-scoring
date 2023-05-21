import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { postSetWinner } from '../constants/posts';

const PlayerButton = ({
  playerName,
  role,
  winner,
  table,
  gameKey,
  refreshData,
}) => {
  const gameNumber = gameKey.replace('game', '');

  const handleButtonPress = () => {
    if (winner === '') {
      Alert.alert(
        `${playerName} has won game ${gameNumber}`,
        '',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Confirm', onPress: () => handleConfirm() },
        ],
        { cancelable: true },
      );
    }
  };

  const handleConfirm = async () => {
    await postSetWinner(table, gameNumber, playerName);
    refreshData();
  };

  const getButtonStyle = () => {
    if (winner === '') {
      return styles.awayButton;
    } else if (winner === playerName) {
      return styles.homeButton;
    } else {
      return styles.greyButton;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.playerButton, getButtonStyle()]}
      disabled={winner !== ''}
      onPress={handleButtonPress}
    >
      <Text style={styles.playerButtonText}>{playerName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playerButton: {
    minHeight: 60,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  playerButtonText: {
    fontSize: 16,
  },
  homeButton: {
    backgroundColor: 'blue',
  },
  awayButton: {
    backgroundColor: 'green',
  },
  greyButton: {
    backgroundColor: 'grey',
  },
});

export default PlayerButton;
