import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export const League = () => {
  return (
    <View style={styles.container}>
      <Text>League hello</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ced1',
    borderRadius: 15,
    marginTop: 2,
  },
});
