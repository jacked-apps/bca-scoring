import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-paper';

export const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const readableDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const handleDatePicked = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setSelectedDate(currentDate);
  };

  // TODO - pass in the Ok button onPress function
  return (
    <View>
      <Text>Please enter your date of birth to verify this is you.</Text>
      {show && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={selectedDate}
          onChange={handleDatePicked}
        />
      )}
      <TouchableWithoutFeedback onPress={() => setShow(true)}>
        <View>
          <Text style={styles.input}>{readableDate(selectedDate)}</Text>
        </View>
      </TouchableWithoutFeedback>

      {show && (
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => setShow(false)}
        >
          Ok
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginTop: 8,
    fontSize: 24,
  },
  button: {
    marginTop: 12,
    width: '30%',
    alignSelf: 'center',
  },
});
