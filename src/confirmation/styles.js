import { StyleSheet } from 'react-native';

export const confirmStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ced1',
    borderRadius: 15,
    marginTop: 2,
    alignItems: 'center',
  },
  header: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  subHeader: {
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeaderText: {
    fontSize: 20,
    color: '#000',
  },
  subHeaderTextBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  info: {
    height: 100,
    width: '90%',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 17,
    color: '#000',
  },
  verifyContainer: {
    width: '90%',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 35,
  },
  verifyPrompt: {
    fontSize: 18,
    marginBottom: 15,
  },
  verifyLabel: {
    fontSize: 15,
  },
  verifyError: {
    fontSize: 15,
    color: 'red',
  },
  verifyButton: {
    alignSelf: 'center',
    width: '30%',
    marginTop: 15,
  },
});
