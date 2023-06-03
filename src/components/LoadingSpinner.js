import React, { useEffect } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';

export const LoadingSpinner = ({ visible, children }) => {
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      startSpinning();
    }
  }, [visible]);

  const startSpinning = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (!visible) {
    return <View style={styles.container}>{children}</View>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <Animated.Image
        style={[styles.spinner, { transform: [{ rotate: spin }] }]}
        source={require('../images/billiard.jpeg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ced1',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
  },
});
