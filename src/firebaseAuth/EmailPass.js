import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { loginUser } from './Auth';
import { CustomTextInput } from '../components/CustomTextInput';
import { isValidEmail } from '../constants/functions';
import { LOGIN_MODES } from './Auth';
export const EmailPass = ({
  email,
  setEmail,
  setPassword,
  password,
  setMode,
  navigation,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [disableLogButton, setDisableLogButton] = useState(false);

  const handleLogin = async () => {
    if (!isValidEmail(email)) {
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
      navigation.navigate('Home');
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
        style={{ marginVertical: 10 }}
        labelStyle={styles.text}
        onPress={() => setMode(LOGIN_MODES.RESET_PASSWORD)}
      >
        Forgot Password?
      </Button>
      <Button
        style={{ width: '60%' }}
        mode='contained'
        disabled={disableLogButton}
        onPress={handleLogin}
        labelStyle={{ fontSize: 20 }}
      >
        Log in
      </Button>
      <View style={styles.register}>
        <Text>Don't have an account yet?</Text>
        <Button
          labelStyle={styles.text}
          onPress={() => setMode(LOGIN_MODES.REGISTER)}
        >
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
