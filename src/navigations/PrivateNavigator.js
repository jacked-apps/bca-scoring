import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions } from './PublicNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SecondPage from '../screens/SecondPage';
import EndScreen from '../screens/EndScreen';
import Loading from '../screens/Loading';
import Scoring from '../screens/Scoring';
import Roster from '../screens/Roster';
import TieRoster from '../screens/TieRoster';
import TieScoring from '../screens/TieScoring';
import TestScreen from '../screens/TestScreen';
import { Settings } from '../screens/Settings';
import { ProfileForm } from '../screens/ProfileForm';
import { Welcome } from '../welcome/Welcome';
import Home from '../home/Home';

const PrivateStack = createStackNavigator();

const privateScreenOptions = ({ navigation }) => ({
  ...screenOptions,
  headerRight: () => (
    <MaterialCommunityIcons
      style={{ marginRight: 10 }}
      name="cog"
      size={32}
      onPress={() => navigation.navigate('Settings')}
    />
  ),
});

export const PrivateNavigator = () => {
  return (
    <PrivateStack.Navigator
      screenOptions={privateScreenOptions}
      initialRouteName="Welcome"
    >
      <PrivateStack.Screen name="Home" component={Home} />
      <PrivateStack.Screen name="Welcome" component={Welcome} />
      <PrivateStack.Screen name="Loading" component={Loading} />
      <PrivateStack.Screen name="Roster" component={Roster} />
      <PrivateStack.Screen name="Scoring" component={Scoring} />
      <PrivateStack.Screen name="Tie Roster" component={TieRoster} />
      <PrivateStack.Screen name="Tie Scoring" component={TieScoring} />
      <PrivateStack.Screen name="Second Page" component={SecondPage} />
      <PrivateStack.Screen name="End Screen" component={EndScreen} />
      <PrivateStack.Screen name="Settings" component={Settings} />
      <PrivateStack.Screen name="ProfileForm" component={ProfileForm} />
      <PrivateStack.Screen name="Test" component={TestScreen} />
    </PrivateStack.Navigator>
  );
};
