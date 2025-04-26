import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../Theme/Dimension';
import {Light} from '../../../../Theme/Presentation';
import {Fontfamily, Fontsize} from '../../../../Theme/FontConfig';

const Footer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* signIn path button */}
      <Text style={styles.signInPathText}>
        Already have an account ?
        <Text
         onPress={() => navigation.navigate('signIn')}
          style={{textDecorationLine: 'underline', color: Light.SECOUNDARY}}>
          {' '}
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  signUpButton: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HIGHT * 0.08,
    borderRadius: 100 / 2,
    backgroundColor: Light.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    top: SCREEN_HIGHT * 0.01,
    elevation: 10

  },
  signUpButtonText: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.MEDIUM,
    color: Light.BUTTONTEXTCOLOR,
  },
  signInPathText: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.MEDIUM,
    color: Light.TEXTPRIMARY,
  },
});
