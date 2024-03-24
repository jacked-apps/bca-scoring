import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, SafeAreaView } from 'react-native';
import { Navigator } from './src/navigations/Navigator';
import { styles } from './src/constants/StyleMaster';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import 'react-native-gesture-handler';
import { query } from '@firebase/firestore';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.fullContainer}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
