import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../../Theme/Dimension';

const title = {
  fontSize: Fontsize.BUTTONTEXT,
  fontFamily: Fontfamily.MEDIUM,
};

const ProductInfo = ({THEME, productDetails}) => {
  console.log(productDetails);
  const oldPrice = productDetails?.price + 5000;
  return (
    <View style={styles.container}>
      <Text style={[styles.productTitle, {color: THEME.TEXTPRIMARY}]}>
        Luminus Battery and Inventor Combos from best selling goods and services
      </Text>
      <Text style={[styles.oldPrice, {color: THEME.TEXTSECONDARY}]}>
        {oldPrice}
        <Text style={[styles.currentPrice, {color: THEME.TEXTPRIMARY}]}>
          {' '}
          {productDetails.price}
        </Text>
      </Text>
      <View style={{gap: SCREEN_HIGHT * 0.01}}>
        <Text style={[styles.description, {color: THEME.TEXTSECONDARY}]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea atque
          nostrum minus voluptatum nulla rerum, natus sit. Ab unde omnis,
          voluptas qui, placeat asperiores maiores expedita eaque quasi,
          eligendi deleniti!
        </Text>
      </View>
      <View style={{marginTop: SCREEN_HIGHT * 0.01}}>
        <Text style={{...title, color: THEME.TEXTPRIMARY}}>Brand: Luminus</Text>
        <Text style={{...title, color: THEME.TEXTPRIMARY}}>
          Recommend: Home & Office
        </Text>
      </View>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  container: {
    padding: SCREEN_WIDTH * 0.03,
    gap: SCREEN_HIGHT * 0.01,
    paddingHorizontal: SCREEN_WIDTH * 0.045,
  },
  productTitle: {
    fontSize: Fontsize.TITLE,
    fontFamily: Fontfamily.MEDIUM,
  },
  oldPrice: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.REGULAR,
    textDecorationLine: 'line-through',
  },
  currentPrice: {
    textDecorationLine: 'none',
    fontSize: Fontsize.BUTTONTEXT + 5,
    fontFamily: Fontfamily.MEDIUM,
  },
  description: {
    fontSize: Fontsize.BUTTONTEXT - 2,
    fontFamily: Fontfamily.REGULAR,
    lineHeight: SCREEN_WIDTH * 0.05,
  },
});
