import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../constants/StyleMaster';
import { Button } from 'react-native-paper';
import { getCurrentUser, sendVerificationEmail } from './Auth';

export const VerifyEmail = ({ navigation }) => {
  const [newSent, setNewSent] = useState(false);
  const [verified, setVerified] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: null,
    });
  }, [navigation]);
  const handleResend = () => {
    const user = getCurrentUser();
    sendVerificationEmail(user);

    // Shows text explaining the resent email for 10 seconds
    setNewSent(true);
    setTimeout(() => {
      setNewSent(false);
    }, 10000); // 10000 milliseconds = 10 seconds
  };

  const handleLogin = () => {
    navigation.navigate('LoginFire');
  };

  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <Text style={[styles.centerText, styles.largeFont]}>
          Thank you for registering your account!
        </Text>
        <Text style={[styles.centerText, styles.mediumFont]}>
          Before you can login you must verify your email address. We have sent
          you an email with a verification link.
        </Text>
        <Text style={[styles.centerText, styles.mediumFont]}>
          Please check your inbox and follow the link to complete the
          verification process.
        </Text>
        <View style={{ margin: 20 }}>
          <Text style={[styles.centerText, styles.mediumFont]}>
            When finish proceed to Log In
          </Text>
          <Button
            onPress={handleLogin}
            mode='contained'
            style={{ width: 200, alignSelf: 'center' }}
            labelStyle={{ fontSize: 25, lineHeight: 30 }}
          >
            Log in
          </Button>
          {verified && (
            <Text
              style={[
                styles.centerText,
                { alignSelf: 'center', fontSize: 30, color: 'red' },
              ]}
            >
              Please verify your email and try again
            </Text>
          )}
        </View>
        <View style={{ margin: 20 }}>
          <Text style={[styles.centerText, styles.mediumFont]}>
            Didn't receive an email?
          </Text>
          <Button
            onPress={handleResend}
            labelStyle={{ fontSize: 20, color: '#003366' }}
          >
            Resend Verification
          </Button>
          {newSent && (
            <Text style={{ alignSelf: 'center', fontSize: 30, color: 'red' }}>
              New Verification Sent
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};
