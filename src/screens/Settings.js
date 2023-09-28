import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import React, { useState } from 'react';
//import { styles } from '../constants/StyleMaster';
import Accordion from 'react-native-collapsible/Accordion';
import { LogOutButton } from '../components/LogOutButton';
import { ProfileInfo } from '../components/ProfileInfo';

const dataArray = [
  { title: 'Log out', content: <LogOutButton /> },
  { title: 'Profile', content: <ProfileInfo /> },
  { title: 'Another', content: <ProfileInfo /> },
];
//TODO  add better styling to this mess but it works and im happy with it for now
export const Settings = () => {
  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = (section, _, isActive) => {
    return (
      <View style={isActive ? styles.activeHeader : styles.inactiveHeader}>
        <Text variant='headlineLarge'>{section.title}</Text>
      </View>
    );
  };

  const renderContent = (section, _) => {
    return <View style={styles.content}>{section.content}</View>;
  };

  return (
    <View style={styles.container}>
      <Accordion
        sections={dataArray}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={setActiveSections}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ced1',
    borderRadius: 15,
    marginTop: 2,
  },
  content: { marginHorizontal: 20 },
  activeHeader: {
    margin: 20,
  },
  inactiveHeader: {
    margin: 20,
  },
});
