import { View, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Card } from 'react-native-paper';
import React, { useState } from 'react';
import { styles } from '../constants/StyleMaster';
import { Register } from '../firebaseAuth/Register';
import { EmailPass } from '../firebaseAuth/EmailPass';
import { LOGIN_MODES } from '../firebaseAuth/Auth';
import { ResetPassword } from '../firebaseAuth/ResetPassword';

const LogInFire = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState(LOGIN_MODES.LOGIN);

  const leftContent = (
    <View>
      <Image
        source={require('../../assets/billiard.jpeg')}
        style={{ height: 50, width: 50, borderRadius: 50 }}
      />
    </View>
  );
  const navigateToVerifyEmail = () => {
    navigation.navigate('VerifyEmail');
  };
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.containerCentered}>
          <Card style={styles.loginCard}>
            <Card.Title
              style={styles.cardTitle}
              title='Billiards Plaza (fire)'
              titleStyle={styles.cardTitleText}
              subtitleStyle={styles.cardSubtitleText}
              subtitle='BCA League'
              left={() => leftContent}
            />
            <Card.Content>
              {mode === LOGIN_MODES.LOGIN && (
                //  EMAIL PASSWORD CHECK PAGE
                <EmailPass
                  email={email}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  password={password}
                  setMode={setMode}
                  navigation={navigation}
                />
              )}

              {mode === LOGIN_MODES.REGISTER && (
                // REGISTER NEW ACCOUNT
                <Register
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  setMode={setMode}
                  navigateToVerifyEmail={navigateToVerifyEmail}
                />
              )}
              {mode === LOGIN_MODES.RESET_PASSWORD && (
                // REGISTER NEW ACCOUNT
                <ResetPassword
                  email={email}
                  setEmail={setEmail}
                  setMode={setMode}
                />
              )}
            </Card.Content>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default LogInFire;
