import React, { useEffect } from 'react';
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

// functions
import {
  comparePlayers,
  getCumulativeStats,
} from '../constants/compareFunctions';

// styles
import { styles } from '../constants/StyleMaster';

export const Welcome = ({ navigation }) => {
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

  useEffect(() => {
    if (
      !loadingCurrentUser &&
      !loadingPastPlayer &&
      !currentUserError &&
      pastPlayer &&
      currentUser
    ) {
      routeUsers(currentUser, pastPlayer);
    }
  }, [
    currentUser,
    pastPlayer,
    loadingCurrentUser,
    loadingPastPlayer,
    currentUserError,
  ]);

  // handle errors
  // if (loadingPastPlayer || loadingCurrentUser) {
  //   return <LoadingScreen />;
  // }
  if (currentUserError) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={refetchCurrentUser}>
          <Text>Error Fetching current player info: try again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const routeUsers = (current, past) => {
    // No first name on current user means this is their first time logging in
    // No past player means we have no data about them.
    // Send them to the application form
    if (!current.firstName && !past) {
      navigation.navigate('Profile Form');
      return;
    }
    // First time logging in BUT played before. We have info.
    // Send them to a page to confirm this is their Information
    if (!current.firstName && past) {
      navigation.navigate('Confirm', { pastPlayer, currentUser });
      return;
    }
    // established user without pastPlayer information should not happen
    // Send them to a screen to connect to the appropriate pastPlayer document
    if (current.firstName && !past) {
      //TODO create a connect to past player page
      //navigation.navigate('ConnectToPast');
      return;
    }
    if (current.firstName && past) {
      // TODO create a compare function to make sure these two documents have the same
      // information and reference each other properly
      // this will be important to do on each login to ensure handicaps get updated
      const { isConsistent, errors } = comparePlayers(pastPlayer, currentUser);
      console.log('WelcomePage comparePlayers', isConsistent, errors);
      return;
      if (!isConsistent) {
        //TODO create a page to display errors and allow user to correct them
        //navigation.navigate('FixErrors');
        return;
      }
      if (isConsistent) {
        navigation.navigate('Home');
        return;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.centerText, styles.mediumFont]}>
        Welcome, {currentUser.firstName || currentUser.email}
      </Text>
    </View>
  );
};
