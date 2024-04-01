// react
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// react native paper
import { Button } from 'react-native-paper';

// functions
import { onDateChange, handleTextInputChange } from './datePicker/shared';
import { readableDate } from '../constants/dateFunctions';

// icon
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const DatePickerComponent = ({ date, setDate, setError }) => {
  // state
  const [dateInput, setDateInput] = useState('');
  const [show, setShow] = useState(false);

  const setters = { setDate, setDateInput, setShow, setError };

  return (
    <View>
      {!show && (
        <View style={datePickerStyles.inputContainer}>
          <TextInput
            style={datePickerStyles.input}
            onChangeText={(text) => handleTextInputChange(text, setters)}
            value={dateInput} // Must be a string
            placeholder="MM-DD-YYYY"
          />
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={datePickerStyles.icon}
          >
            <MaterialCommunityIcons
              name="calendar-month"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      )}

      {show && (
        <View>
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date} // must be a date object
            onChange={(event, selectedDate) =>
              onDateChange(event, selectedDate, setters)
            }
          />
          <View style={datePickerStyles.buttonView}>
            <Button
              style={datePickerStyles.button}
              mode="contained"
              onPress={() => setShow(false)}
            >
              Cancel
            </Button>
            <Button
              style={datePickerStyles.button}
              mode="contained"
              onPress={() => setShow(false)}
            >
              Set
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export const datePickerStyles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 20,
  },
  buttonView: {
    borderColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
    width: '90%',
    alignSelf: 'center',
  },

  button: {
    marginTop: 12,
    width: '40%',
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    alignItems: 'center',
  },

  icon: {
    marginLeft: 10,
  },
});
