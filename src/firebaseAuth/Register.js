import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { registerUser, sendVerificationEmail } from './Auth';
import { CustomTextInput } from '../components/CustomTextInput';

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
    try {
      const userResponse = await registerUser(email, password);
      // If registration is successful, you can navigate the user to a different screen or show a success message.
      console.log('full response', userResponse);
      await sendVerificationEmail(userResponse);

      alert('Registration successful! Check your email to verify it is you');
      setRegister(false);
    } catch (error) {
      console.error('Error during registration:', error.message);
      // Display an error message to the user using an alert for simplicity.
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
  input: {
    marginVertical: 15,
    width: '85%',
  },
  register: { marginTop: 20 },
  text: { fontSize: 20 },
});
