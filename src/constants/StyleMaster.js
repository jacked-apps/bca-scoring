import { StyleSheet, Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ced1',
    borderRadius: 15,
    marginTop: 2,
  },
  containerCentered: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '90%',
    flex: 1,
    justifyContent: 'center',
  },
  loginCard: {
    width: '90%',
    padding: 10,
  },
  cardTitle: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  cardTitleText: {
    marginLeft: 20,
    fontSize: 25,
  },
  cardSubtitleText: {
    marginLeft: 20,
    fontSize: 20,
  },
  homeScroll: {
    height: height,
    backgroundColor: '#00ced1',
  },
  homeTable: {
    flex: 1,
    backgroundColor: '#00ced1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
    backgroundColor: '#483d8b',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  fullContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  headline: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  rowSubtitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.02,
    marginHorizontal: width * 0.25,
  },
  teamBlockContainer: {
    width: width * 0.95,
  },
  teamBlockTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  rowPlayer: {
    width: width * 0.6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.2,
  },
  lineup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.15,
  },
  rowSelect: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: width * 0.1,
    marginVertical: width * 0.03,
  },
  selectBox: {
    backgroundColor: 'linen',
    borderColor: 'black',
    borderWidth: 2,
    width: width * 0.5,
  },
  selectInput: { fontSize: 18 },
  centerPage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.8,
  },
  rowSingleSelect: {
    marginVertical: height * 0.02,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.92,
  },
  left: {
    position: 'absolute',
    left: 0,
  },
  right: {
    position: 'absolute',
    right: 0,
  },
  center: {
    maxWidth: width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  centerText: {
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  singlePickButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  scoreboardContainer: {
    height: height * 0.25,
    flexDirection: 'row',
  },
  scoreboardHomeView: {
    backgroundColor: 'lightgray',
    borderWidth: 2,
    width: width * 0.4,
  },
  scoreboardAwayView: {
    backgroundColor: 'lightblue',
    borderWidth: 2,
    width: width * 0.4,
  },
  scoreboardStats: {
    backgroundColor: 'yellow',
    borderWidth: 2,
    width: width * 0.2,
  },
  scoreTeamContainer: {
    padding: 5,
  },
});
