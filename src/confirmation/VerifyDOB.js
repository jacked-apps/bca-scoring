import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import { DatePickerComponent } from '../platformSpecificComponents/DatePickerComponent';
import { readableDate } from '../constants/dateFunctions';

export const VerifyDOB = () => {
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState('');
  return (
    <View>
      <Text>Please enter your date of birth to verify this is you.</Text>
      <DatePickerComponent date={date} setDate={setDate} setError={setError} />
      <Text>You entered: {readableDate(date)}</Text>
      {error && <Text>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({});
