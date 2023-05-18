import { StyleSheet, Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: height * 0.28,
    flexDirection: 'row',
  },
  homeView: {
    margin: 1,
    backgroundColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 10,
    width: width * 0.5,
  },
  awayView: {
    margin: 1,
    backgroundColor: 'lightblue',
    borderWidth: 2,
    borderRadius: 10,
    width: width * 0.5,
  },

  teamContainer: {
    padding: 5,
  },
  teamName: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  teamNameText: {
    fontSize: height * 0.022,
    alignSelf: 'center',
  },
  home: {
    marginVertical: height * 0.008,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    fontSize: 18,
  },
  toWinTie: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  toWinTieText: {
    fontSize: height * 0.02,
  },
  nameWins: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.006,
    marginHorizontal: width * 0.04,
  },
  nameWinsText: {
    fontSize: height * 0.018,
  },
  playerName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.006,
    marginHorizontal: width * 0.04,
  },
  playerNameText: {
    fontSize: height * 0.02,
  },
  need: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  needText: {
    fontSize: height * 0.018,
  },
});
