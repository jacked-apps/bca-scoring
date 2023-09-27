import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function CustomTextInput({ icon, label, isPassword, ...props }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.wrapper}>
        <TextInput
          style={[styles.input, props.style]}
          secureTextEntry={isPassword && !isPasswordVisible}
          {...props}
        />

        {icon && !isPassword && (
          <MaterialCommunityIcons
            name={icon}
            size={28}
            color='black'
            style={styles.icon}
          />
        )}
        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <MaterialCommunityIcons
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={28}
              color='black'
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    width: '85%',
    borderWidth: 1, // add border if needed
    borderColor: 'grey',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#e6e1f9',
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    fontSize: 24,
  },
  label: {
    marginBottom: -15,
    fontSize: 16,
  },
});
