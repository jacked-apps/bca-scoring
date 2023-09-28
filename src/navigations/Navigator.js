import React, { useEffect, useState } from 'react';
// package imports
import { observeAuthState } from '../firebaseAuth/Auth';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//public pages
import LogInFire from '../screens/LoginFire';
//private pages
import Home from '../screens/Home';
import SecondPage from '../screens/SecondPage';
import EndScreen from '../screens/EndScreen';
import Loading from '../screens/Loading';
import Scoring from '../screens/Scoring';
import Roster from '../screens/Roster';
import TieRoster from '../screens/TieRoster';
import TieScoring from '../screens/TieScoring';
import TestScreen from '../screens/TestScreen';
import { Settings } from '../screens/Settings';

const PrivateStack = createStackNavigator();
const PublicStack = createStackNavigator();

const screenOptions = {
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

// Navigation Stack for users not registered or logged in
const PublicNavigator = () => {
  return (
    <PublicStack.Navigator screenOptions={screenOptions}>
      <PublicStack.Screen name='LoginFire' component={LogInFire} />
    </PublicStack.Navigator>
  );
};

// Navigation Stack for users that is logged in and verified
const PrivateNavigator = () => {
  const navigation = useNavigation();

  const privateScreenOptions = {
    ...screenOptions,
    headerRight: () => (
      <MaterialCommunityIcons
        style={{ marginRight: 10 }}
        name='cog'
        size={32}
        onPress={() => navigation.navigate('Settings')}
      />
    ),
  };

  return (
    <PrivateStack.Navigator
      screenOptions={privateScreenOptions}
      initialRouteName='Home'
    >
      <PrivateStack.Screen name='Home' component={Home} />
      <PrivateStack.Screen name='Loading' component={Loading} />
      <PrivateStack.Screen name='Roster' component={Roster} />
      <PrivateStack.Screen name='Scoring' component={Scoring} />
      <PrivateStack.Screen name='Tie Roster' component={TieRoster} />
      <PrivateStack.Screen name='Tie Scoring' component={TieScoring} />
      <PrivateStack.Screen name='Second Page' component={SecondPage} />
      <PrivateStack.Screen name='End Screen' component={EndScreen} />
      <PrivateStack.Screen name='Settings' component={Settings} />
      <PrivateStack.Screen name='Test' component={TestScreen} />
    </PrivateStack.Navigator>
  );
};

export const Navigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleAuthChange = user => {
      setIsLoggedIn(!!user);
      console.log(user, isLoggedIn);
    };

    const unsubscribe = observeAuthState(handleAuthChange);

    return () => {
      unsubscribe();
    };
  }, []);

  return isLoggedIn ? <PrivateNavigator /> : <PublicNavigator />;
};
