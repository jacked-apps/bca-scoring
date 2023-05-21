import { StyleSheet, Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  scrollContainer: {
    hight: height,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    height: height,
  },
  leftColumn: {
    backgroundColor: '#FF0000',
    width: width * 0.43,
  },
  centerColumn: {
    backgroundColor: '#00FF00',
    width: width * 0.14,
  },
  rightColumn: {
    backgroundColor: '#0000FF',
    width: width * 0.43,
  },
  playerButton: {
    backgroundColor: '#5dd6f5',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 5,
    marginBottom: 10,
    height: height * 0.08,
  },
  playerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 8,
  },
});
