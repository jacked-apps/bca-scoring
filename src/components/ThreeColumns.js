import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ThreeColumns = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.column, styles.leftColumn]} />
      <View style={[styles.column, styles.centerColumn]} />
      <View style={[styles.column, styles.rightColumn]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    height: height,
  },
  leftColumn: {
    backgroundColor: '#FF0000',
    width: width * 0.4,
  },
  centerColumn: {
    backgroundColor: '#00FF00',
    width: width * 0.2,
  },
  rightColumn: {
    backgroundColor: '#0000FF',
    width: width * 0.4,
  },
});

export default ThreeColumns;
