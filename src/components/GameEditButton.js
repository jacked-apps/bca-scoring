import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { postClearWinner, postClearTieWinner } from '../constants/posts';

const GameEditButton = ({ gameKey, winner, refreshData, table, tie }) => {
  const buttonText = gameKey.replace('game', ''); // Extract the number from the gameKey
  const isWinner = !!winner;
  const isDisabled = !isWinner;

  const handleButtonPress = () => {
    if (isWinner) {
      Alert.alert(
        `Remove ${winner} as the winner of game ${buttonText}?`,
        'hello',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Confirm', onPress: handleConfirm },
        ],
        { cancelable: true },
      );
    }
  };

  const handleConfirm = async () => {
    if (!tie) {
      await postClearWinner(table, buttonText);
    }
    if (tie) {
      await postClearTieWinner(table, buttonText);
    }
    refreshData();
  };

  return (
    <TouchableOpacity
      style={[styles.button, isDisabled && styles.disabledButton]}
      disabled={isDisabled}
      onPress={handleButtonPress}
    >
      {isWinner ? (
        <Ionicons name='trash-outline' size={24} color='#333' />
      ) : (
        <Text style={styles.buttonText}>{buttonText}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default GameEditButton;
