import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const SecondPage = ({ route, navigation }) => {
  const { table, home } = route.params;
  console.log(table, home);
  const handlePress = page => {
    navigation.navigate(page);
  };
  return (
    <View>
      <Text>Page 2</Text>
      <Text>Table {table}</Text>
      <Button mode='contained' onPress={() => handlePress('Home')}>
        Home
      </Button>
      <Button mode='contained' onPress={() => handlePress('End Screen')}>
        End Page
      </Button>
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({});
