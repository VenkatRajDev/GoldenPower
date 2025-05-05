import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BORDER_RADIUS,
  SCREEN_HIGHT,
  SCREEN_WIDTH,
} from '../../../Theme/Dimension';
import {useTheme} from '../../../ThemeProvider';
import {Fontfamily, Fontsize} from '../../../Theme/FontConfig';

const _marginSpacing = SCREEN_WIDTH * 0.02;

const _containerWidth = SCREEN_WIDTH * 0.45;
const _containerHeight = SCREEN_HIGHT * 0.1;

const BrandCard = ({brandInfo, navigation}) => {
  const {THEME} = useTheme();
  const {id, image} = {...brandInfo};

  return id?.empty === true ? (
    <View style={[styles.container, {elevation: 0}]} />
  ) : (
    <Pressable
      onPress={() => {
        navigation.push('productsByEachBrand', {BrandDetails: brandInfo});
      }}
      style={[
        styles.container,
        {
          backgroundColor: THEME.CARDBACKGROUND,
        },
      ]}>
      <Image
        source={{uri: image}}
        style={{width: _containerWidth * 0.5, height: _containerHeight * 0.8}}
        borderRadius={BORDER_RADIUS}
      />
      <Text
        numberOfLines={4}
        adjustsFontSizeToFit
        style={[
          styles.brandTitle,
          {width: _containerWidth * 0.4, color: THEME.TEXTPRIMARY},
        ]}>
        Explore Luminous
      </Text>
    </Pressable>
  );
};

export default BrandCard;

const styles = StyleSheet.create({
  container: {
    margin: _marginSpacing,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: BORDER_RADIUS,
    width: _containerWidth,
    height: _containerHeight,
    flexDirection: 'row',
    paddingHorizontal: SCREEN_WIDTH * 0.02,
  },
  brandTitle: {
    fontsize: Fontsize.BODYTEXT,
    fontFamily: Fontfamily.MEDIUM,
    textAlign: 'center',
  },
});
