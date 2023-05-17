import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../constants/StyleMaster';

const SelectRow = ({ title, state, setState, values, subState, current }) => {
  const dummyData = [
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
  ];

  const handleSelect = value => {
    const value = value;
  };

  return (
    <View style={styles.rowSelect}>
      <Text variant='headlineSmall'>Player 1</Text>
      <SelectList
        boxStyles={styles.selectBox}
        inputStyles={styles.selectInput}
        data={dummyData}
        setSelected={value => handleSelect(value, setPlayerOne, setPlayerOneHC)}
      />
    </View>
  );
};

export default SelectRow;
