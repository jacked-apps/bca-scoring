import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import React, { useState, useEffect } from 'react';

const PasswordReset = ({
  email,
  password,
  setPassword,
  setNeedPassword,
  setIsUpdateReady,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [secondPassword, setSecondPassword] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(true);

  useEffect(() => {
    if (password) {
      setIsPasswordValid(false);
      password.length >= 8 && setIsPasswordValid(true);
      password.length >= 20 && setIsPasswordValid(false);
    }
    if (password && secondPassword) {
      setIsPasswordMatch(false);
      password === secondPassword && setIsPasswordMatch(true);
    }
  }, [password, secondPassword]);

  useEffect(() => {
    setIsUpdateReady(false);
    if (isPasswordMatch && isPasswordValid) {
      setIsUpdateReady(true);
    }
  }, [isPasswordMatch, isPasswordValid]);

  const handleCancel = () => {
    setNeedPassword(false);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleTogglePassword2Visibility = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Enter New Password</Text>
      <Text variant='bodyLarge'>{email}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label='Password'
          value={password}
          autoCapitalize='none'
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          right={
            <TextInput.Icon
              name='eye'
              color='black'
              onPress={handleTogglePasswordVisibility}
            />
          }
        />
      </View>
      {!isPasswordValid && (
        <Text>Password must be between 8 and 20 characters</Text>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label='Password 2'
          autoCapitalize='none'
          value={secondPassword}
          onChangeText={setSecondPassword}
          secureTextEntry={!showPassword2}
          right={
            <TextInput.Icon
              name='eye'
              color='black'
              onPress={handleTogglePassword2Visibility}
            />
          }
        />
      </View>
      {!isPasswordMatch && <Text>Passwords must match</Text>}
      <Button onPress={handleCancel}>I remember my password</Button>
    </View>
  );
};

export default PasswordReset;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    width: '85%',
  },
  input: {
    flex: 1,
  },
  eyeIconContainer: {
    marginLeft: 10,
  },
});
