// native imports
import { View, Text, TouchableOpacity } from 'react-native';

// components
import LoadingScreen from '../components/LoadingScreen';

// firebase
import { getCurrentUser } from 'bca-firebase-queries';
import {
  useFetchCurrentUserById,
  useFetchPastPlayerById,
} from 'bca-firebase-queries';

// styles
import { styles } from './styles';

export const Update = ({ navigation, route }) => {
  // get user/player information
  const authUser = getCurrentUser();
  const { data: pastPlayer, isLoading: loadingPastPlayer } =
    useFetchPastPlayerById(authUser.email);
  const {
    data: currentUser,
    isLoading: loadingCurrentUser,
    isError: currentUserError,
    refetch: refetchCurrentUser,
  } = useFetchCurrentUserById(authUser.uid);

  // handle errors
  if (loadingPastPlayer || loadingCurrentUser) {
    return <LoadingScreen />;
  }
  if (currentUserError) {
    return (
      <View>
        <TouchableOpacity onPress={refetchCurrentUser}>
          <Text>Error Fetching current player info: try again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Welcome!</Text>
    </View>
  );
};
//export default Welcome2;
