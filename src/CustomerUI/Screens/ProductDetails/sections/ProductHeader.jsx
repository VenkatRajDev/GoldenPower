import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  BORDER_RADIUS,
  SCREEN_HIGHT,
  SCREEN_WIDTH,
} from '../../../../../Theme/Dimension';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import BackButton from '../../../components/BackButton';

const ProductHeader = ({THEME, navigation}) => {
  return (
    <View style={[styles.container]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: SCREEN_WIDTH * 0.05,
        }}>
        <BackButton />
        <Text style={[styles.title, {color: THEME.TEXTPRIMARY}]}>
          Luminous Product
        </Text>
      </View>
    </View>
  );
};

export default ProductHeader;

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS,
    padding: SCREEN_WIDTH * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: Fontsize.SUB - 2,
    fontFamily: Fontfamily.SEMIBOLD,
  },
  searchBar: {
    width: SCREEN_WIDTH * 0.65,
    height: SCREEN_HIGHT * 0.06,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
    borderWidth: 1,
  },
});
