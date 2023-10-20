import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, SafeAreaView } from 'react-native';
import { Navigator } from './src/navigations/Navigator';
import { styles } from './src/constants/StyleMaster';

import 'react-native-gesture-handler';

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
