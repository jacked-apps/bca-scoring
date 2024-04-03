import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { DatePickerComponent } from '../platformSpecificComponents/DatePickerComponent';
import { Button } from 'react-native-paper';
import { confirmStyles as styles } from './styles';
import { isToday } from 'date-fns';

export const VerifyDOB = ({ pastPlayer, navigation }) => {
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState('');

  const handleVerify = () => {
    // if there is an error disable the button
    if (error) {
      return;
    }
    // if the date is today handle error and return
    if (isToday(date)) {
      setError('You were not born today.');
      return;
    }
    // if there is no date handle error and return
    if (!date) {
      setError('Please enter your date of birth.');
      return;
    }
    // extract year month and date from the player
    const [year, month, day] = pastPlayer.dob.split('-');
    console.log('DOB:', year, month, day);
    // extract year month and date from the date
    const enteredYear = date.getFullYear();
    const enteredMonth = date.getMonth() + 1;
    const enteredDay = date.getDate();

    // check if the date entered matches the date on file
    if (
      enteredYear === Number(year) &&
      enteredMonth === Number(month) &&
      enteredDay === Number(day)
    ) {
      navigation.navigate('Update Profile');
    } else {
      setError(
        'This does not match DOB on file.  Either enter correct Date or contact your League Operator.'
      );
    }
  };

  return (
    <View style={styles.verifyContainer}>
      <View style={{}}>
        <Text style={styles.verifyPrompt}>
          Please enter your date of birth to verify this is you.
        </Text>
        <DatePickerComponent
          date={date}
          setDate={setDate}
          setError={setError}
        />
        {error && <Text style={styles.verifyError}>{error}</Text>}
      </View>
      <View style={styles.buttonView}>
        <Button
          style={styles.verifyButton}
          mode="contained"
          onPress={handleVerify}
        >
          Verify
        </Button>
      </View>
    </View>
  );
};
