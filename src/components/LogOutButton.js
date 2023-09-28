import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';
import { logoutUser } from '../firebaseAuth/Auth';

export const LogOutButton = () => {
  return (
    <View>
      <Button
        style={{ width: '60%' }}
        mode='contained'
        onPress={() => logoutUser()}
        labelStyle={{ fontSize: 20 }}
      >
        LogOut
      </Button>
    </View>
  );
};
