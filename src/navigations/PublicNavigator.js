import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { publicRoutes } from './routes';

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
      {publicRoutes.map((route) => (
        <PublicStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </PublicStack.Navigator>
  );
};
