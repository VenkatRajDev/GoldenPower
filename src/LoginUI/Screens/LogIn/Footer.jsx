import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../Theme/Dimension';
import {Light} from '../../../../Theme/Presentation';
import {Fontfamily, Fontsize} from '../../../../Theme/FontConfig';

const _arrowViewRound = 30

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logInButton}>
        <Text style={styles.logInButtonText}>LogIn</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or</Text>

      {/* customer registration path button */}
      <TouchableOpacity
        style={styles.customerLogButton}
        onPress={() => navigation.navigate('signUp')}>
        <Text style={styles.customerLogButtonText}>Continue as a customer</Text>

        <View style={styles.forwardArrow}>
          <Ionicons
            name="arrow-forward"
            size={Fontsize.BUTTONTEXT}
            color={Light.TEXTPRIMARY}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logInButton: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HIGHT * 0.08,
    backgroundColor: Light.SECOUNDARY,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  logInButtonText: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.MEDIUM,
    color: Light.BUTTONTEXTCOLOR,
  },
  or: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.REGULAR,
    color: Light.TEXTPRIMARY,
  },
  customerLogButton: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HIGHT * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Light.CARDBACKGROUND,
    elevation: 10,
    padding: SCREEN_WIDTH * 0.03,
    borderTopRightRadius: 100 / 2,
    borderBottomRightRadius: 100 / 2
  },
  customerLogButtonText: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.MEDIUM,
    color: Light.TEXTPRIMARY,
    bottom: 2,
  },
  forwardArrow: {
    width: _arrowViewRound,
    height: _arrowViewRound,
    borderRadius: _arrowViewRound / 2,
    backgroundColor: Light.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
