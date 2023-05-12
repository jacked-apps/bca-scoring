import React, { Fragment } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActionSheetIOS,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  pickerLabel: {
    paddingLeft: 4,
  },
  textField: {
    height: 46,
    minWidth: '100%',
    paddingLeft: 14,
    paddingTop: 12,
    borderBottomColor: Colors.grey300,
    borderBottomWidth: 1,
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, .5)',
  },
  error: {
    borderColor: Colors.red500,
    color: Colors.red500,
  },
});

export const Select = ({
  name,
  placeholder,
  error,
  onChange,
  onBlur,
  value,
  options,
}) => {
  const opts = options.concat([
    {
      label: 'Cancel',
      value: null,
      key: 'cancel',
    },
  ]);

  const computeFieldStyle = () =>
    error
      ? StyleSheet.flatten([styles.textField, styles.error])
      : styles.textField;

  const show = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: opts.map(op => op.label),
        cancelButtonIndex: opts.length - 1,
      },
      index => {
        if (index !== opts.length - 1) {
          const val = opts[index].value;
          onChange(val);
        } else if (onBlur) {
          onBlur();
        }
      },
    );
  };

  const getLabelFromValue = val => {
    const op = opts.filter(o => o.value === val)[0];
    return op?.label;
  };

  return (
    <Fragment>
      <TouchableOpacity onPress={show}>
        <View style={computeFieldStyle()}>
          <Text style={styles.text}>
            {getLabelFromValue(value) || placeholder}
          </Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};
