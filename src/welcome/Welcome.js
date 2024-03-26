import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../constants/StyleMaster';
import { getCurrentUser } from '../firebaseAuth/Auth';
import { fetchCurrentUserInfo } from '../constants/fireFetches';
export const Welcome = ({ navigation }) => {
  const user = getCurrentUser();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false); //this should be true when i begin to implement it

  console.log('Welcome', userData);

  useEffect(() => {
    if (user) {
      const fetchInfo = async () => {
        data = await fetchCurrentUserInfo(user.uid);
        if (!data.firstName) {
          navigation.navigate('ProfileForm', {
            userId: user.uid,
            email: user.email,
          });
          return;
        }
        setUserData(data);
      };
      fetchInfo();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.centerText, styles.mediumFont]}>{user.email}</Text>
    </View>
  );
};
