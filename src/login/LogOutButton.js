import { View } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';
import { logoutUser } from 'bca-firebase-queries';
import { useNavigation } from '@react-navigation/native';

export const LogOutButton = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    await logoutUser();
    navigation.navigate('Public', { screen: 'LoginFire' });
  };
  return (
    <View>
      <Button
        style={{ width: '60%' }}
        mode='contained'
        onPress={handleLogout}
        labelStyle={{ fontSize: 20 }}
      >
        LogOut
      </Button>
    </View>
  );
};
