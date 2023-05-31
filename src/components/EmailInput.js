import { StyleSheet, View, Keyboard } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import React from 'react';

const EmailInput = ({ email, setEmail, setChecked }) => {
  const handleChange = value => {
    setChecked(false);
    setEmail(value);
  };
  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Log in</Text>
      <Text variant='bodyLarge'>Enter email</Text>

      <TextInput
        style={styles.input}
        label='Email'
        value={email}
        autoCapitalize='none'
        onChangeText={value => handleChange(value)}
      />
    </View>
  );
};

export default EmailInput;

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
});
