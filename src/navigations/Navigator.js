import React, { useEffect, useState } from 'react';
// package imports
import { observeAuthState } from '../firebaseAuth/Auth';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../components/LoadingScreen';
//public pages
import { PublicNavigator } from './PublicNavigator';
//private pages
import { PrivateNavigator } from './PrivateNavigator';

const RootStack = createStackNavigator();

const RootNavigator = ({ isLoggedIn }) => {
  return (
    <RootStack.Navigator
      initialRouteName={isLoggedIn ? 'Private' : 'Public'}
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
    >
      <RootStack.Screen
        name='Private'
        component={PrivateNavigator}
        options={{ path: 'private' }}
      />
      <RootStack.Screen
        name='Public'
        component={PublicNavigator}
        options={{ path: 'public' }}
      />
    </RootStack.Navigator>
  );
};

export const Navigator = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleAuthChange = user => {
      if (user && user.emailVerified) {
        setIsLoggedIn(!!user);
      }
      setLoading(false);
    };

    const unsubscribe = observeAuthState(handleAuthChange);

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <LoadingScreen />; // You'll need to create or import this component
  }

  return <RootNavigator isLoggedIn={isLoggedIn} />;
};
