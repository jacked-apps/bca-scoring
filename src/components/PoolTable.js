import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

export const PoolTable = ({ children }) => {
  return (
    <ImageBackground
      source={require('../images/pool-table.png')}
      style={styles.backgroundImage}
      resizeMode='contain'
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
