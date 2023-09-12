import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/LogIn';
import Home from '../screens/Home';
import SecondPage from '../screens/SecondPage';
import EndScreen from '../screens/EndScreen';
import Loading from '../screens/Loading';
import Scoring from '../screens/Scoring';
import Roster from '../screens/Roster';
import TieRoster from '../screens/TieRoster';
import TieScoring from '../screens/TieScoring';
import TestScreen from '../screens/TestScreen';
import { View } from 'react-native';

const Stack = createStackNavigator();
// returns Navigator, Screen, Group

export function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
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
      }}
      initialRouteName='Login'
    >
      <Stack.Screen name='Login' component={LogIn} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Loading' component={Loading} />
      <Stack.Screen name='Roster' component={Roster} />
      <Stack.Screen name='Scoring' component={Scoring} />
      <Stack.Screen name='Tie Roster' component={TieRoster} />
      <Stack.Screen name='Tie Scoring' component={TieScoring} />
      <Stack.Screen name='Second Page' component={SecondPage} />
      <Stack.Screen name='End Screen' component={EndScreen} />
      <Stack.Screen name='Test' component={TestScreen} />
    </Stack.Navigator>
  );
}
