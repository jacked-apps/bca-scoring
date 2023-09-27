import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { registerUser, sendVerificationEmail } from './Auth';
import { CustomTextInput } from '../components/CustomTextInput';
import { isValidEmail } from '../constants/functions';

export const Register = ({
  email,
  setEmail,
  password,
  setPassword,
  setRegister,
}) => {
  const [confirmPassword, setConfirmPassword] = useState('');

  const isButtonDisabled = !email || password !== confirmPassword;

  const handleRegister = async () => {
    // Email validity check
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const userResponse = await registerUser(email, password);
      // If registration is successful, shows success message and sends verification email
      console.log('full response', userResponse);
      await sendVerificationEmail(userResponse);

      alert('Registration successful! Check your email to verify it is you');
      setRegister(false);
    } catch (error) {
      console.error('Error during registration:', error.message);
      // Displays an error message to the user
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Create an Account</Text>

      <CustomTextInput
        icon='email'
        label='Email'
        autoCapitalize='none'
        onChangeText={setEmail}
      />
      <CustomTextInput
        label='Password'
        value={password}
        isPassword
        onChangeText={setPassword}
        autoCapitalize='none'
      />
      <CustomTextInput
        label='Confirm Password'
        value={confirmPassword}
        isPassword
        autoCapitalize='none'
        onChangeText={setConfirmPassword}
      />
      <Button
        style={{ marginTop: 15 }}
        mode='contained'
        disabled={isButtonDisabled}
        onPress={handleRegister}
      >
        Create Account
      </Button>
      <View style={styles.register}>
        <Text>Already have an account?</Text>
        <Button labelStyle={styles.text} onPress={() => setRegister(false)}>
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
  register: { marginTop: 20 },
  text: { fontSize: 20 },
});
