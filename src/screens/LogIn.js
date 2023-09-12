import { View, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Button, Text, Card, Avatar } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import EmailInput from '../components/EmailInput';
import { postCheckEmail, postValidate, postUpdate } from '../constants/posts';
import PasswordInput from '../components/PasswordInput';
import PasswordReset from '../components/PasswordReset';
import { useIsFocused } from '@react-navigation/native';
import {
  setResponses,
  popUpAlert,
  checkExemptEmails,
} from '../constants/functions';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { styles } from '../constants/StyleMaster';

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [prevEmail, setPrevEmail] = useState();
  const [password, setPassword] = useState();
  const [needPassword, setNeedPassword] = useState();
  const [checked, setChecked] = useState();
  const [loading, setLoading] = useState();
  const [isCurrent, setIsCurrent] = useState(false);
  const [isUpdateReady, setIsUpdateReady] = useState();
  const [status, setStatus] = useState();
  const [statusChanged, setStatusChanged] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (status && isFocused) {
      const response = setResponses(status, navigation);
      setLoading(false);
      popUpAlert(response, navigation);
      setStatusChanged(false);
    }
  }, [status, isFocused, statusChanged]);

  const handleClearEmail = () => {
    setEmail('');
    setIsCurrent(false);
    setChecked(false);
  };

  const handleSendEmail = async () => {
    setLoading(true);
    setChecked(true);
    const exempt = checkExemptEmails(email);

    if (exempt) {
      console.log('exempt is true');
      setIsCurrent(true);
      setPrevEmail(email);
      setLoading(false);
      return;
    }

    try {
      await postCheckEmail(email, setIsCurrent);
      setPrevEmail(email);
    } catch (error) {
      console.error('Error when checking email:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isCurrent) {
      setPrevEmail(''); // Clear previous email if the current email is 'current'
    } else {
      setEmail(''); // Clear the email if it's not current
    }
  }, [isCurrent]);

  const handleSendPassWord = async () => {
    setLoading(true);
    await postValidate(email, password, setStatus);
    setStatusChanged(true);
  };

  const handleUpdatePassWord = async () => {
    setLoading(true);
    await postUpdate(email, password, setStatus);
    setStatusChanged(true);
  };

  const leftContent = (
    <View>
      <Image
        source={require('./billiard.jpeg')}
        style={{ height: 50, width: 50, borderRadius: 50 }}
      />
    </View>
  );

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View
          style={{
            height: '80%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card style={styles.loginCard}>
            <Card.Title
              style={styles.cardTitle}
              title='Billiards Plaza'
              titleStyle={styles.cardTitleText}
              subtitleStyle={styles.cardSubtitleText}
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
                <Text
                  variant='labelLarge'
                  style={{ textAlign: 'center', color: 'red' }}
                >
                  {loading
                    ? 'Loading'
                    : `${prevEmail} is not associated with a current player. Please try again or contact Ed.`}
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
              {loading && <LoadingSpinner />}
            </Card.Content>
            <Card.Actions>
              {email && checked && (
                <Button
                  disabled={loading}
                  mode='contained'
                  onPress={handleClearEmail}
                >
                  Clear E-mail
                </Button>
              )}
              {!isCurrent && (
                <Button disabled={loading} onPress={handleSendEmail}>
                  Enter Email
                </Button>
              )}
              {isCurrent && !needPassword && (
                <Button onPress={handleSendPassWord}>Enter Password</Button>
              )}
              {needPassword && (
                <Button
                  disabled={!isUpdateReady}
                  onPress={handleUpdatePassWord}
                >
                  Update Password
                </Button>
              )}
            </Card.Actions>
          </Card>
        </View>
      </KeyboardAvoidingView>
      {loading && <LoadingSpinner />}
    </>
  );
};

export default LogIn;
