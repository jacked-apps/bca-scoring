import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Text, Card, Avatar } from 'react-native-paper';
import React, { useState } from 'react';
import EmailInput from '../components/EmailInput';
import { postCheckEmail } from '../constants/posts';
import PasswordInput from '../components/PasswordInput';
import PasswordReset from '../components/PasswordReset';

const LogIn = () => {
  const [email, setEmail] = useState('shodbyed@gmail.com');
  const [password, setPassword] = useState();
  const [needPassword, setNeedPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const [isCurrent, setIsCurrent] = useState(true);
  const [isUpdateReady, setIsUpdateReady] = useState(false);

  const handleSendEmail = () => {
    postCheckEmail(email, setIsCurrent);
    setChecked(true);
  };
  const handleSendPassWord = () => {};
  const handleUpdatePassWord = () => {};

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
            {!isCurrent && <EmailInput setEmail={setEmail} checked={checked} />}
            {!isCurrent && checked && (
              <Text variant='labelLarge' style={{ color: 'red' }}>
                {email} is not associated with a current player. Please try
                again or contact Ed.
              </Text>
            )}
            {isCurrent && !needPassword && (
              <PasswordInput
                email={email}
                password={password}
                setPassword={setPassword}
                setNeedPassword={setNeedPassword}
              />
            )}
            {needPassword && (
              <PasswordReset
                email={email}
                password={password}
                setPassword={setPassword}
                setNeedPassword={setNeedPassword}
                setIsUpdateReady={setIsUpdateReady}
              />
            )}
          </Card.Content>
          <Card.Actions>
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
