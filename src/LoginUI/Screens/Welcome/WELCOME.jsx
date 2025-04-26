import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {Light} from '../../../../Theme/Presentation';
import {BORDER_RADIUS, SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../Theme/Dimension';
import {Fontfamily, Fontsize} from '../../../../Theme/FontConfig';

const WELCOME = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View style={{top: SCREEN_WIDTH * 0.03}}>
        <Text style={styles.appWelcomeText}>
          Welcome to
          <Text
            style={{color: Light.SECOUNDARY, fontSize: Fontsize.HEADING + 5,}}>
            {' '}
            GoldenPower
          </Text>
        </Text>

        <Text style={styles.msgText}>
          Powering Reliability, Energizing Tomorrow!
        </Text>
      </View>

      <View style={styles.welcomeImageContainer}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../../../../assets/welcomeIllustration/Welcomealt.png')}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('logIn')}
        style={styles.getStartedButton}>
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>

      <StatusBar barStyle="dark-content" backgroundColor={Light.BACKGROUND} />
    </View>
  );
};

export default WELCOME;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Light.BACKGROUND,
  },
  appWelcomeText: {
    fontSize: Fontsize.HEADING,
    fontFamily: Fontfamily.SEMIBOLD,
    color: Light.TEXTPRIMARY,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  msgText: {
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.LIGHT,
    color: Light.TEXTPRIMARY,
  },
  welcomeImageContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HIGHT * 0.55,
  },
  getStartedButton: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HIGHT * 0.07,
    backgroundColor: Light.ACCENT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    elevation: 10,
  },
  getStartedButtonText: {
    fontSize: Fontsize.BUTTONTEXT,
    Fontfamily: Fontfamily.MEDIUM,
    color: Light.TEXTPRIMARY,
  },
});
