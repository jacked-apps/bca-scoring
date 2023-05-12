import { StyleSheet, Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 5,
    width: width * 0.45,
    marginHorizontal: 10,
  },
  safeArea: {
    marginHorizontal: 5,
  },
  headline: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  rowSubtitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.02,
    marginHorizontal: width * 0.25,
  },
  rowPlayer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.25,
  },
  centerPage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.8,
  },
});
