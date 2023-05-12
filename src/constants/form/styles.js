import { StyleSheet } from 'react-native';
import { Colors, DefaultTheme } from 'react-native-paper';

export const formStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    minWidth: '100%',
    maxHeight: 60,
    minHeight: 60,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },

  dialog: {
    marginHorizontal: 12,
  },

  label: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, .5)',
  },

  focused: {
    borderColor: 'blue',
    borderWidth: 2,
    color: 'light-blue',
  },

  error: {
    color: DefaultTheme.colors.error,
    borderColor: DefaultTheme.colors.error,
  },

  input: {
    marginBottom: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
  },

  container: {
    height: 'auto',
  },
});
