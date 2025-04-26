import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Fontfamily, Fontsize} from '../../../../Theme/FontConfig';
import {SCREEN_WIDTH} from '../../../../Theme/Dimension';
import {Light} from '../../../../Theme/Presentation';


const Heading = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.welcomeText}>Login to your account</Text>

        <Ionicons
          name="happy-outline"
          size={Fontsize.HEADING + 15}
          color={Light.TEXTPRIMARY}
        />
      </View>
      <Text style={styles.subWelcomeText}>
        Or create{'\n'}A new account as a customer
      </Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    padding: SCREEN_WIDTH * 0.05,
  },
  welcomeText: {
    fontSize: Fontsize.HEADING + 5,
    fontFamily: Fontfamily.SEMIBOLD,
    width: '70%',
    color: Light.TEXTPRIMARY,
  },
  subWelcomeText: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.LIGHT,
    color: Light.TEXTPRIMARY,
  },
});
