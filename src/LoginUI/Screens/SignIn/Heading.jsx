import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fontfamily, Fontsize} from '../../../../Theme/FontConfig';
import { SCREEN_WIDTH } from '../../../../Theme/Dimension';
import { Light } from '../../../../Theme/Presentation';

const Heading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetText}>Lets Sign you in</Text>
      <Text style={styles.greetText2}>Welcome back , {'\n'}You have been missed</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    padding: SCREEN_WIDTH * 0.05,
  },
  greetText: {
    fontSize: Fontsize.HEADING,
    fontFamily: Fontfamily.SEMIBOLD,
    color: Light.TEXTPRIMARY
  },
  greetText2:{
    fontSize: Fontsize.BUTTONTEXT + 2,
    fontFamily: Fontfamily.LIGHT,
    color: Light.TEXTPRIMARY
  }
});
