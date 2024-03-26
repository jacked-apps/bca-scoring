import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import React, { useState } from 'react';

const PasswordInput = ({ email, password, setPassword, setNeedPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleNoPassword = () => {
    setNeedPassword(true);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Enter Password</Text>
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
      <Button onPress={handleNoPassword}>I don't have a password yet</Button>
    </View>
  );
};

export default PasswordInput;

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
