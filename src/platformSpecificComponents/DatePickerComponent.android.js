// react
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// functions
import { onDateChange, handleTextInputChange } from './datePicker/shared';

// icon
import { MaterialCommunityIcons } from '@expo/vector-icons';

// styles
import { datePickerStyles } from './DatePickerComponent.ios';
import { readableDate } from '../constants/dateFunctions';

export const DatePickerComponent = ({ date, setDate, setError }) => {
  // State
  const [show, setShow] = useState(false);
  const [dateInput, setDateInput] = useState('');

  const setters = { setDate, setDateInput, setShow, setError };

  return (
    <View style={datePickerStyles.container}>
      <View style={datePickerStyles.inputContainer}>
        <TextInput
          style={datePickerStyles.input}
          onChangeText={(text) => handleTextInputChange(text, setters)}
          value={dateInput} // must be a string
          placeholder="MM/DD/YYYY"
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
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date} // must be a date object
          mode="date"
          display="default"
          onChange={(event, selectedDate) =>
            onDateChange(event, selectedDate, setters)
          }
        />
      )}
    </View>
  );
};
