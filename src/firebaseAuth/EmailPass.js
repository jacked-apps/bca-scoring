import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { loginUser } from './Auth';
import { CustomTextInput } from '../components/CustomTextInput';

export const EmailPass = ({
  email,
  setEmail,
  setPassword,
  password,
  setRegister,
  navigation,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [disableLogButton, setDisableLogButton] = useState(false);

  const handleLogin = async () => {
    const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    if (!emailValid) {
      alert('Please enter a valid email address.');
      return;
    }
    setDisableLogButton(true);

    try {
      const userResponse = await loginUser(email, password);
      // Once login is successful, you can use userResponse as needed.
      // For simplicity, I'm just going to show an alert with the user's email.
      console.log('userResponse', userResponse);
      alert(`Logged in as ${userResponse.email}`);
      navigation.navigate('Landing');
    } catch (error) {
      // Handle any login errors here
      console.error('Error during login:', error.message);
      alert(error.message);
    } finally {
      setDisableLogButton(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Log in</Text>

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
      <Button
        mode='contained'
        disabled={disableLogButton}
        onPress={handleLogin}
      >
        Log in
      </Button>
      <View style={styles.register}>
        <Text>Don't have an account yet?</Text>
        <Button labelStyle={styles.text} onPress={() => setRegister(true)}>
          Register
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
