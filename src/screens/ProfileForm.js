import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../constants/StyleMaster';
import { fetchPastPlayerData } from '../constants/fireFetches';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from '../constants/schema';
import { ControlledInput } from '../components/ControlledInput';

export const ProfileForm = ({ route }) => {
  const { userId, email } = route.params;
  const { control, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zip: '',
      phone: '',
      dob: '',
      email: '',
      nickname: '',
    },
  });
  const [pastPlayerData, setPastPlayerData] = useState(null);
  const [isNewPlayer, setIsNewPlayer] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchPastPlayerData(email);
        if (data) {
          setPastPlayerData(data);
          // if we have data here populate the fields with known data
          setValue('firstName', data.firstName);
          setValue('lastName', data.lastName);
          setValue('address', data.address);
          setValue('city', data.city);
          setValue('zip', data.zip);
          setValue('phone', data.phone);
          setValue('dob', data.dob);
        } else {
          setIsNewPlayer(true);
        }
      } catch (error) {
        console.error('Error fetching past player data: ', error);
        setIsNewPlayer(true);
      }
    };

    fetch();
  }, []);
  console.log('Player form', pastPlayerData);
  return (
    <View style={styles.container}>
      <Text style={[styles.centerText, styles.largeFont]}>
        Hello{' '}
        {pastPlayerData && pastPlayerData.firstName
          ? pastPlayerData.firstName
          : 'New Player'}
        !
      </Text>
      {!pastPlayerData && (
        <Text style={[styles.centerText, styles.mediumFont]}>
          Please Enter your information
        </Text>
      )}
      {pastPlayerData && pastPlayerData.firstName && (
        <Text style={[styles.centerText, styles.mediumFont]}>
          Please Check and Update your information
        </Text>
      )}
      <ScrollView>
        <ControlledInput
          label='First Name'
          control={control}
          name='firstName'
          errors={errors}
        />
        <ControlledInput
          label='Last Name'
          control={control}
          name='lastName'
          errors={errors}
        />
        <ControlledInput
          label='Phone Number'
          control={control}
          name='phone'
          errors={errors}
        />
        <ControlledInput
          label='Address'
          control={control}
          name='address'
          errors={errors}
        />
        <ControlledInput
          label='City'
          control={control}
          name='city'
          errors={errors}
        />
        <ControlledInput
          label='Zip'
          control={control}
          name='zip'
          errors={errors}
        />
        <ControlledInput
          label='Date of birth'
          control={control}
          name='dob'
          errors={errors}
        />
        <ControlledInput
          label='Nickname (optional)'
          control={control}
          name='nickname'
          errors={errors}
        />
      </ScrollView>
    </View>
  );
};
