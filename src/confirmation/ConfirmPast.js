import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { VerifyDOB } from './VerifyDOB';

export const ConfirmPast = ({ route, navigation }) => {
  const { pastPlayer, currentUser } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Hello, {pastPlayer.firstName} {pastPlayer.lastName}!
        </Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>
          We have found information associated with
          <Text style={styles.subHeaderTextBold}> {currentUser.email}</Text>
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>
          Name: {pastPlayer.firstName} {pastPlayer.lastName}
        </Text>
        <Text style={styles.infoText}>City: {pastPlayer.city}</Text>
      </View>
      <VerifyDOB />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});
