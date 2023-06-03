import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import LoadingScreen from '../components/LoadingScreen';

const SecondPage = ({ route, navigation }) => {
  //const { table, home } = route.params;
  //console.log(table, home);
  const handlePress = page => {
    navigation.navigate(page);
  };
  return (
    <View>
      <LoadingScreen />
      <Text>Page 2</Text>
      <Text>Table </Text>
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
