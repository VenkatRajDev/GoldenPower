import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  BORDER_RADIUS,
  SCREEN_HIGHT,
  SCREEN_WIDTH,
} from '../../../../../Theme/Dimension';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OrderButtons = ({THEME, isDarkMode}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.wishListButton, {backgroundColor: THEME.TEXTPRIMARY}]}>
        <Text style={[styles.buttonsText, {color: THEME.CARDBACKGROUND}]}>
          Add to Wish
        </Text>
        <Ionicons
          name="heart-circle-outline"
          size={Fontsize.BUTTONTEXT + 5}
          color={THEME.CARDBACKGROUND}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.orderButton, {backgroundColor: THEME.ACCENT}]}>
        <Text
          style={[
            styles.buttonsText,
            {color: THEME.BUTTONTEXTCOLOR, fontSize: Fontsize.BUTTONTEXT},
          ]}>
          Order Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: SCREEN_HIGHT * 0.01,
    justifyContent: 'center',
  },
  wishListButton: {
    width: SCREEN_WIDTH * 0.35,
    height: SCREEN_HIGHT * 0.065,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    paddingHorizontal: SCREEN_WIDTH * 0.025,
    right: SCREEN_WIDTH * 0.01,
  },
  orderButton: {
    width: SCREEN_WIDTH * 0.55,
    height: SCREEN_HIGHT * 0.065,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    left: SCREEN_WIDTH * 0.02,
  },
  buttonsText: {
    fontSize: Fontsize.BUTTONTEXT - 2,
    fontFamily: Fontfamily.MEDIUM,
  },
});
