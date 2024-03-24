import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { getCurrentUser } from '../firebaseAuth/Auth';
import { fetchCurrentUserInfo } from '../constants/fireFetches';
import { useFetchPastPlayerById } from '../firebase/playerFetchHooks';

export const ProfileInfo = () => {
  const user = getCurrentUser();
  const {
    data: pastPlayer,
    isLoading,
    error,
  } = useFetchPastPlayerById(user.email);

  console.log('ProfileInfo PastPlayer', pastPlayer);

  return (
    <View>
      <Text variant="headlineMedium">First Name: {pastPlayer.firstName}</Text>
      <Text variant="headlineMedium">Last Name: {pastPlayer.lastName}</Text>
      <Text variant="headlineMedium">Nickname: {pastPlayer.nickname}</Text>
      <Text variant="headlineMedium">E-mail: {pastPlayer.email}</Text>
      <Text variant="headlineMedium">Address: {pastPlayer.address}</Text>
      <Text variant="headlineMedium">City: {pastPlayer.city}</Text>
      <Text variant="headlineMedium">Zip: {pastPlayer.zip}</Text>
      <Text variant="headlineMedium">Phone: {pastPlayer.phone}</Text>
      <Text variant="headlineMedium">D.O.B.: {pastPlayer.dob}</Text>
    </View>
  );
};
