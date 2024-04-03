import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions } from './PublicNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { privateRoutes } from './routes';

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
import { Update } from '../UpdateProfile/Update';

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
      {privateRoutes.map((route) => (
        <PrivateStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </PrivateStack.Navigator>
  );
};
