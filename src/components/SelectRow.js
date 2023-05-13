import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../constants/StyleMaster';

const SelectRow = ({ title }) => {
  return (
    <View style={styles.rowSelect}>
      <Text variant='headlineSmall'>Player 1</Text>
      <SelectList
        boxStyles={styles.selectBox}
        inputStyles={styles.selectInput}
        data={data}
        setSelected={value => handleSelect(value, setPlayerOne, setPlayerOneHC)}
      />
    </View>
  );
};

export default SelectRow;
