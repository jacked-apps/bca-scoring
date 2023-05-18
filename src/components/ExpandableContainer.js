import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;

const ExpandableContainer = ({ leftContent, centerContent, rightContent }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.leftSection, expanded && styles.expanded]}
      >
        <Text style={[styles.text, expanded && styles.expandedText]}>
          {leftContent}
        </Text>
      </TouchableOpacity>
      {expanded ? (
        <View style={[styles.centerSection, styles.expanded]}>
          <Text style={[styles.text, styles.expandedText]}>
            {centerContent}
          </Text>
        </View>
      ) : (
        <View style={styles.rightSection}>
          <Text style={styles.text}>{rightContent}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: '25%',
  },
  leftSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },
  rightSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 16,
  },
  expanded: {
    flex: 1,
    width: ScreenWidth * 0.8, // Adjust the width as needed
  },
  expandedText: {
    fontSize: 20,
  },
});

export default ExpandableContainer;
