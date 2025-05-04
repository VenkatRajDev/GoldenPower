import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {
  SCREEN_WIDTH,
  SCREEN_HIGHT,
  BORDER_RADIUS,
} from '../../../Theme/Dimension';
import {useTheme} from '../../../ThemeProvider';
import {Fontfamily, Fontsize} from '../../../Theme/FontConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';

const _containerHeight = SCREEN_HIGHT * 0.3;
const _containerWidth = SCREEN_WIDTH * 0.45;
const _marginSpacing = SCREEN_WIDTH * 0.02;

const commonTextStyle = {
  fontSize: Fontsize.BODYTEXT,
  fontFamily: Fontfamily.MEDIUM,
  lineHeight: 18,
};

const _roundHeartViewDeminsion = 35;

const Card = ({cardInfo, navigation}) => {
  const {THEME} = useTheme();
  const {id, name, image, price, description} = {...cardInfo};
  const beforeOfferPrice = useRef(parseInt(price) + 500); // temporary value

  return id?.empty === true ? (
    <View style={[styles.container, {elevation: 0}]} />
  ) : (
    <Pressable
      style={[styles.container, {backgroundColor: THEME.CARDBACKGROUND}]}
      onPress={() =>
        navigation.push('productDetails', {productDetails: cardInfo})
      }>
      <Image
        source={{uri: image}}
        style={{width: _containerWidth * 0.8, height: _containerHeight * 0.4}}
      />

      <View style={styles.contentContainer}>
        <Text
          numberOfLines={2}
          style={[
            commonTextStyle,
            {color: THEME.TEXTPRIMARY, fontFamily: Fontfamily.LIGHT},
          ]}>
          Luminous Inverter & Battery Combo
        </Text>

        <Text
          style={{
            ...commonTextStyle,
            textDecorationLine: 'line-through',
            color: THEME.PLACEHOLDER,
          }}>
          ${beforeOfferPrice.current}
          <Text
            style={{
              ...commonTextStyle,
              fontSize: Fontsize.BODYTEXT + 2,
              textDecorationLine: 'none',
              color: THEME.TEXTPRIMARY,
            }}>
            {' '}
            ${price}
          </Text>
        </Text>
      </View>

      <View
        style={{
          width: _containerWidth,
          paddingHorizontal: _containerWidth * 0.04,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={[styles.wishListButton]}>
          <Ionicons
            name="heart-circle"
            size={Fontsize.SUB + 10}
            color={THEME.TEXTPRIMARY}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.orderButton, {backgroundColor: THEME.PRIMARY}]}>
          <Text
            style={[styles.orderButtonText, {color: THEME.BUTTONTEXTCOLOR}]}>
            Order
          </Text>
          <Ionicons
            name="arrow-forward"
            size={Fontsize.BUTTONTEXT}
            color={THEME.BUTTONTEXTCOLOR}
          />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: _containerWidth,
    height: _containerHeight,
    alignItems: 'center',
    margin: _marginSpacing,
    borderRadius: BORDER_RADIUS,
    elevation: 5,
    padding: SCREEN_WIDTH * 0.03,
  },
  contentContainer: {
    paddingHorizontal: SCREEN_WIDTH * 0.01,
    marginTop: SCREEN_HIGHT * 0.01,
    gap: SCREEN_WIDTH * 0.01,
    flex: 1,
  },
  wishListButton: {
    width: _roundHeartViewDeminsion,
    height: _roundHeartViewDeminsion,
    borderRadius: _roundHeartViewDeminsion / 2,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderButton: {
    width: _containerWidth * 0.65,
    height: _containerHeight * 0.15,
    borderRadius: BORDER_RADIUS - 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SCREEN_WIDTH * 0.02,
    alignItems: 'center',
  },
  orderButtonText: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.MEDIUM,
  },
});
