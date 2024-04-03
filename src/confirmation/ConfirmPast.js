import { View, Text } from 'react-native';
import React from 'react';
import { VerifyDOB } from './VerifyDOB';
import { confirmStyles as styles } from './styles';

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
      <VerifyDOB pastPlayer={pastPlayer} navigation={navigation} />
    </View>
  );
};
