import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const EndScreen = ({ navigation }) => {
  const handlePress = page => {
    navigation.navigate(page);
  };
  return (
    <View>
      <Text>EndScreen test</Text>
      <Button mode='contained' onPress={() => handlePress('Home')}>
        Home
      </Button>
      <Button mode='contained' onPress={() => handlePress('Second Page')}>
        Second page
      </Button>
    </View>
  );
};

export default EndScreen;

const styles = StyleSheet.create({});
