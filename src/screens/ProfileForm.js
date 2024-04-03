import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../constants/StyleMaster';
import { useForm } from 'react-hook-form';
import { fetchPastPlayerData, updateUserProfile } from 'bca-firebase-queries';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from '../constants/schema';
import { ControlledInput } from '../components/ControlledInput';
import { InfoPopup } from '../components/InfoPopup';
import {
  nicknameInfo,
  dobInfo,
  emailChange,
  phoneFormat,
} from '../constants/InfoBlurbs';

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
  const hasPast = pastPlayerData?.firstName;

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchPastPlayerData(email);
        if (data) {
          setPastPlayerData(data);
          // if we have data here populate the fields with known data
          const fields = [
            'firstName',
            'lastName',
            'address',
            'city',
            'zip',
            'phone',
            'dob',
          ];
          fields.forEach(field => {
            if (data[field]) {
              setValue(field, data[field]);
            }
          });
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

  const onSubmit = async data => {
    try {
      await updateUserProfile(userId, data);
      console.log('User data updated', data);
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  const onError = errors => {
    console.log('form errors', errors);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.centerText, styles.largeFont]}>
        Hello {hasPast ? pastPlayerData.firstName : 'New Player'}!
      </Text>
      {!hasPast && (
        <Text style={[styles.centerText, styles.mediumFont]}>
          Please Enter your information
        </Text>
      )}
      {hasPast && (
        <Text style={[styles.centerText, styles.mediumFont]}>
          Please Check and Update your information
        </Text>
      )}
      <ScrollView style={{ marginBottom: 40 }}>
        <View style={{ margin: 15 }}>
          <View
            style={{
              flexDirection: 'row',
              height: 24,
              alignItems: 'flex-end',
            }}
          >
            <Text style={{ fontSize: 16 }}>Email</Text>
            <InfoPopup info={emailChange} />
          </View>
          <Text style={{ fontSize: 24 }}>{email}</Text>
        </View>
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
          info={phoneFormat}
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
          info={dobInfo}
        />
        <ControlledInput
          label='Nickname (optional)'
          control={control}
          name='nickname'
          errors={errors}
          info={nicknameInfo}
        />
        <Button
          style={[styles.button, { alignSelf: 'center' }]}
          mode='contained'
          onPress={handleSubmit(onSubmit, onError)}
        >
          Submit
        </Button>
      </ScrollView>
    </View>
  );
};
