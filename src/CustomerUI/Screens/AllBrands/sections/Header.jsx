import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import {
  BORDER_RADIUS,
  SCREEN_HIGHT,
  SCREEN_WIDTH,
} from '../../../../../Theme/Dimension';
import BackButton from '../../../components/BackButton';

const Header = ({THEME}) => {
  return (
    <View style={[styles.titleContainer, {backgroundColor: THEME.BACKGROUND}]}>
      <BackButton />
      <Text style={[styles.title, {color: THEME.TEXTPRIMARY}]}>
        Explore Brands
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: SCREEN_WIDTH * 0.035,
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HIGHT * 0.1,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  title: {
    fontSize: Fontsize.SUB,
    fontFamily: Fontfamily.SEMIBOLD,
  },
});
