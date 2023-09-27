import { View, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Card } from 'react-native-paper';
import React, { useState } from 'react';
import { styles } from '../constants/StyleMaster';
import { Register } from '../firebaseAuth/Register';
import { EmailPass } from '../firebaseAuth/EmailPass';

const LogInFire = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const leftContent = (
    <View>
      <Image
        source={require('../../assets/billiard.jpeg')}
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
              {!register && (
                ///  EMAIL PASSWORD CHECK PAGE
                <EmailPass
                  email={email}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  password={password}
                  setRegister={setRegister}
                  navigation={navigation}
                />
              )}

              {register && (
                // REGISTER NEW ACCOUNT
                <Register
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  setRegister={setRegister}
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
