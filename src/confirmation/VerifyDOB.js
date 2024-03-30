import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { DatePickerComponent } from '../components/DatePickerComponent';

export const VerifyDOB = () => {
  return (
    <View>
      <Text>Please enter your date of birth to verify this is you.</Text>
      <DatePickerComponent />
    </View>
  );
};
const styles = StyleSheet.create({});
