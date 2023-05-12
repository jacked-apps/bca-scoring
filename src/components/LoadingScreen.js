import { View } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';
import { styles } from '../constants/StyleMaster';

const LoadingScreen = () => {
  return (
    <View style={styles.centerPage}>
      <Text variant='displayMedium'>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
