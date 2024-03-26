import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogInFire from '../login/LoginFire';
import { VerifyEmail } from '../firebaseAuth/VerifyEmail';

const PublicStack = createStackNavigator();
export const screenOptions = {
  headerStyle: {
    backgroundColor: '#00ced1',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    elevation: 0,
    shadowOpacity: 0,
  },

  headerTitleStyle: {
    textAlign: 'center',
    fontSize: 25,
    width: '100%',
  },
  headerTitleAlign: 'center',
  cardStyle: { backgroundColor: 'black' },
};

export const PublicNavigator = () => {
  return (
    <PublicStack.Navigator screenOptions={screenOptions}>
      <PublicStack.Screen name="LoginFire" component={LogInFire} />
      <PublicStack.Screen name="VerifyEmail" component={VerifyEmail} />
    </PublicStack.Navigator>
  );
};
