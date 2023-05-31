import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Button, Text, Card, Avatar } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import EmailInput from '../components/EmailInput';
import { postCheckEmail, postValidate, postUpdate } from '../constants/posts';
import PasswordInput from '../components/PasswordInput';
import PasswordReset from '../components/PasswordReset';
import { useIsFocused } from '@react-navigation/native';
import { setResponses } from '../constants/functions';

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [needPassword, setNeedPassword] = useState();
  const [checked, setChecked] = useState();
  const [loading, setLoading] = useState();
  const [isCurrent, setIsCurrent] = useState();
  const [isUpdateReady, setIsUpdateReady] = useState();
  const [status, setStatus] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (status && isFocused) {
      setResponses(status, navigation);
    }
  }, [status, isFocused]);

  const handleClearEmail = () => {
    setEmail('');
    setIsCurrent(false);
    setChecked(false);
  };

  const handleSendEmail = async () => {
    setLoading(true);
    setChecked(true);
    await postCheckEmail(email, setIsCurrent);
    setLoading(false);
  };

  const handleSendPassWord = () => {
    postValidate(email, password, setStatus);
  };

  const handleUpdatePassWord = () => {
    postUpdate(email, password, setStatus);
  };

  const leftContent = (
    <Avatar.Icon
      icon='billiards'
      style={{ backgroundColor: 'black', marginRight: 20 }} // Customize the background color and margin
    />
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.cardContainer}>
        <Card style={styles.loginCard}>
          <Card.Title
            style={styles.cardTitle}
            title='Billiards Plaza'
            titleStyle={styles.title}
            subtitleStyle={styles.subtitle}
            subtitle='BCA League'
            left={() => leftContent}
          />
          <Card.Content>
            {!isCurrent && (
              <EmailInput
                email={email}
                setEmail={setEmail}
                setChecked={setChecked}
              />
            )}
            {!isCurrent && checked && (
              <Text variant='labelLarge' style={{ color: 'red' }}>
                {loading
                  ? 'Loading'
                  : `${email} is not associated with a current player. Please try
                again or contact Ed.`}
              </Text>
            )}
            {isCurrent && !needPassword && (
              <PasswordInput
                email={email}
                password={password}
                setPassword={setPassword}
                setNeedPassword={setNeedPassword}
                loading={loading}
              />
            )}
            {needPassword && (
              <PasswordReset
                email={email}
                password={password}
                setPassword={setPassword}
                setNeedPassword={setNeedPassword}
                setIsUpdateReady={setIsUpdateReady}
                loading={loading}
              />
            )}
          </Card.Content>
          <Card.Actions>
            {email && checked && (
              <Button mode='contained' onPress={handleClearEmail}>
                Clear E-mail
              </Button>
            )}
            {!isCurrent && (
              <Button onPress={handleSendEmail}>Enter Email</Button>
            )}
            {isCurrent && !needPassword && (
              <Button onPress={handleSendPassWord}>Enter Password</Button>
            )}
            {needPassword && (
              <Button disabled={!isUpdateReady} onPress={handleUpdatePassWord}>
                Update Password
              </Button>
            )}
          </Card.Actions>
        </Card>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '90%',
    flex: 1,
    justifyContent: 'center',
  },
  loginCard: {
    width: '90%',
    padding: 10,
  },
  cardTitle: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  title: {
    marginLeft: 20,
    fontSize: 25,
  },
  subtitle: {
    marginLeft: 20,
    fontSize: 20,
  },
  avatar: {
    color: 'black',
    backGroundColor: 'black',
  },
});
