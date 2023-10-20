import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar, AppRegistry } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { Navigator } from './src/navigations/Navigator';
import { styles } from './src/constants/StyleMaster';
import { name as appName } from './app.json';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.fullContainer}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
