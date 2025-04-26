import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../Theme/Dimension';
import {Light} from '../../../../Theme/Presentation';
import {Fontfamily, Fontsize} from '../../../../Theme/FontConfig';

const Footer = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={{alignItems:'center',gap: SCREEN_HIGHT * 0.06}}>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.registerNowPath}>
        Don't have an account ?
        <Text
          style={{textDecorationLine: 'underline', color: Light.SECOUNDARY}}
          onPress={() => navigation.goBack()}>
          {' '}
          Register Now
        </Text>
      </Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: 'center',
  },
  signInButton: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HIGHT * 0.08,
    backgroundColor: Light.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 / 2,
    elevation: 10
  },
  signInText: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.MEDIUM,
    color: Light.BUTTONTEXTCOLOR,
  },
  registerNowPath: {
    fontSize: Fontsize.TITLE,
    fontFamily: Fontfamily.MEDIUM,
    color: Light.TEXTPRIMARY,
  },
});
