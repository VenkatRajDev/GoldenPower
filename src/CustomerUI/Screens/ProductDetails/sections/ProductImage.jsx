import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../../Theme/Dimension';

const ProductImage = ({productDetails}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: productDetails.image}}
        style={{width: '95%', height: '100%'}}
      />
    </View>
  );
};

export default ProductImage;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HIGHT * 0.4,
    alignItems: 'center',
  },
});
