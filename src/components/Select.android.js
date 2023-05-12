import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import {
  Paragraph,
  IconButton,
  List,
  Dialog,
  Portal,
} from 'react-native-paper';
import { formStyles } from '../constants/form/styles';

const styles = StyleSheet.create({
  dialog: {
    marginHorizontal: 12,
  },
  container: {
    minWidth: '100%',
    paddingLeft: 5,
  },
  hidden: {
    width: 0,
    opacity: 0,
  },
});

export const Select = ({
  prompt,
  options,
  onChange,
  onBlur,
  value,
  name,
  error,
  placeholder,
}) => {
  const [focused, setFocused] = useState(false);
  const focusRef = useRef(null);
  let sVal;

  if (value) {
    switch (typeof value) {
      case 'string':
      case 'number':
        sVal = value;
        break;
      default:
        sVal = value.label;
        break;
    }
  }

  const takeFocus = () => {
    // focusRef.current.focus();
    setFocused(true);
  };

  const handleChange = val => () => {
    onChange(val);
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur();
  };

  return (
    <Pressable onPress={takeFocus} onPressIn={() => console.log('pressed')}>
      <View
        style={
          focused
            ? StyleSheet.compose(formStyles.inputContainer, formStyles.focused)
            : formStyles.inputContainer
        }
      >
        <Paragraph style={formStyles.label}>{sVal || placeholder}</Paragraph>
        <IconButton icon='menu-down' style={formStyles.label} />
        <Portal>
          <Dialog
            visible={focused}
            onDismiss={handleBlur}
            style={styles.dialog}
          >
            <Dialog.Content>
              <ScrollView>
                {options.map(o => (
                  <List.Item
                    key={`opt-${o.value}`}
                    onPress={handleChange(o.value)}
                    title={o.label}
                  />
                ))}
              </ScrollView>
            </Dialog.Content>
          </Dialog>
        </Portal>
      </View>
    </Pressable>
  );
};
