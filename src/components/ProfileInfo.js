import { View } from 'react-native';
import { Text } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../firebaseAuth/Auth';
import { fetchCurrentUserInfo } from '../constants/fireFetches';

export const ProfileInfo = () => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
    dob: '',
  });

  useEffect(() => {
    const fetchAndSetProfileData = async () => {
      const user = getCurrentUser(); // Assuming this function returns user object with an ID
      if (user) {
        console.log('ProfileInfo', user.email);
        const userData = await fetchCurrentUserInfo(user);
        if (userData) {
          setProfileData(userData);
        }
      }
    };

    fetchAndSetProfileData();
  }, []); // leave dependency blank so this only runs once

  return (
    <View>
      <Text variant='headlineMedium'>First Name: {profileData.firstName}</Text>
      <Text variant='headlineMedium'>Last Name: {profileData.lastName}</Text>
      <Text variant='headlineMedium'>Nickname: {profileData.nickname}</Text>
      <Text variant='headlineMedium'>E-mail: {profileData.email}</Text>
      <Text variant='headlineMedium'>Address: {profileData.address}</Text>
      <Text variant='headlineMedium'>City: {profileData.city}</Text>
      <Text variant='headlineMedium'>Zip: {profileData.zip}</Text>
      <Text variant='headlineMedium'>Phone: {profileData.phone}</Text>
      <Text variant='headlineMedium'>D.O.B.: {profileData.dob}</Text>
    </View>
  );
};
