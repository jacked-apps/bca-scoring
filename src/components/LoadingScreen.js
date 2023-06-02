import React, { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from '../constants/StyleMaster';

const LoadingScreen = () => {
  const rotation = useRef(new Animated.Value(0)).current;
  let size = 100; // Declare as a variable instead of a constant

  useEffect(() => {
    startRotation();
  }, []);

  const startRotation = () => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 360,
        duration: 1000,
        useNativeDriver: false,
      }),
    ).start();
  };

  const spin = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.centerPage}>
      <Animated.Image
        source={require('../images/billiard.jpeg')}
        style={[
          {
            height: size,
            width: size,
            borderRadius: size,
            transform: [{ rotate: spin }],
          },
        ]}
      />
      <Text variant='displayMedium'>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
