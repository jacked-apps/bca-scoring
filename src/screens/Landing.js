import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native-paper';
import { sendVerificationEmail } from 'bca-firebase-queries';
import { styles } from '../constants/StyleMaster';
import { getAuth } from '@firebase/auth';
import { LoadingSpinner } from '../components/LoadingSpinner';

const auth = getAuth();

export const Landing = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [tries, setTries] = useState(0);

  const refreshUser = async () => {
    const freshUser = auth.currentUser;
    if (freshUser) {
      await freshUser.reload();
      if (freshUser.emailVerified) {
        setUser(freshUser);
        navigation.navigate('Home');
      }
    }
  };

  useEffect(() => {
    // Start the interval
    const intervalId = setInterval(async () => {
      await refreshUser();
      setTries(prevTries => prevTries + 1);
    }, 10000);

    // Check if tries have reached 12 and then clear the interval
    if (tries >= 12) {
      clearInterval(intervalId);
      setTimedOut(true);
    }

    // Cleanup
    return () => {
      clearInterval(intervalId);
    };
  }, [tries]);

  const handleResendEmail = async () => {
    setDisableButton(true);
    await sendVerificationEmail(user);
    alert('A Verification E-mail has been sent');
    setDisableButton(false);
  };

  const handleRetry = async () => {
    setDisableButton(true);

    await refreshUser();

    if (!(user && user.emailVerified)) {
      alert(
        'Your Email is still unverified. Please follow the steps to verify and try again',
      );
    }
    setDisableButton(false);
  };

  if (!user) return <LoadingSpinner />;

  return (
    <View style={styles.container}>
      {!user.emailVerified && (
        <View style={{ marginTop: 50 }}>
          <View style={styles.headline}>
            <Text variant='headlineSmall' style={{ textAlign: 'center' }}>
              Please verify the email address '{user.email}' to proceed.
            </Text>
          </View>
          <Text variant='headlineSmall' style={{ textAlign: 'center' }}>
            Didn't receive an email?
          </Text>
          <Button
            style={{ width: 200, alignSelf: 'center', marginTop: 40 }}
            disabled={disableButton}
            mode='contained'
            onPress={handleResendEmail}
          >
            Resend Verification Email
          </Button>
          {timedOut && (
            <View style={{ marginTop: 50 }}>
              <Text variant='headlineSmall' style={{ textAlign: 'center' }}>
                You still have not verified your email. Please check your email
                for subject 'noreply', once you follow the link in the body of
                the email, it should tell you that your account has been
                verified. Please hit the retry button once this is done.
              </Text>
              <Button
                style={{ width: 200, alignSelf: 'center', marginTop: 40 }}
                disabled={disableButton}
                mode='contained'
                onPress={handleRetry}
              >
                Retry
              </Button>
            </View>
          )}
        </View>
      )}
    </View>
  );
};
