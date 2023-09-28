import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { CustomTextInput } from '../components/CustomTextInput';
import { LOGIN_MODES } from './Auth';
import { isValidEmail } from '../constants/functions';
import { resetPassword } from './Auth';

export const ResetPassword = ({ email, setEmail, setMode }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleReset = async () => {
    if (!isValidEmail(email)) {
      alert('Please enter a valid Email address.');
      return;
    }

    setIsButtonDisabled(true);

    try {
      await resetPassword(email);
      alert(
        'An Email has been sent to reset your password.  Please check your Email for further instructions',
      );
      setMode(LOGIN_MODES.LOGIN);
    } catch (error) {
      alert(`Error sending a reset Email: ${error.message}`);
      console.error(error);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Reset Password</Text>

      <CustomTextInput
        icon='email'
        label='Email'
        autoCapitalize='none'
        onChangeText={setEmail}
      />
      <Text style={styles.centerText}>
        Enter your email address. An Email will be sent to you with instructions
        to reset your password
      </Text>

      <Button
        style={{ marginTop: 15 }}
        labelStyle={styles.text}
        mode='contained'
        disabled={isButtonDisabled}
        onPress={handleReset}
      >
        Reset Password
      </Button>
      <View style={styles.register}>
        <Button
          style={styles.button}
          labelStyle={styles.text}
          onPress={() => setMode(LOGIN_MODES.LOGIN)}
        >
          Back to Log in
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: { textAlign: 'center', width: '80%', marginVertical: 10 },
  text: { fontSize: 20 },
  button: { marginVertical: 10 },
});
