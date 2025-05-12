import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import {useTheme} from '../../../../ThemeProvider';

import ProductHeader from './sections/ProductHeader';
import ProductImage from './sections/ProductImage';
import ProductInfo from './sections/ProductInfo';
import OrderButtons from './sections/OrderButtons';

const ProductDetailsScreen = ({route, navigation}) => {
  const {THEME} = useTheme();
  const {productDetails} = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: THEME.BACKGROUND}}>
      <ProductHeader THEME={THEME} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductImage
          productDetails={productDetails}
          THEME={THEME}
          navigation={navigation}
        />
        <ProductInfo THEME={THEME} productDetails={productDetails} />
        <OrderButtons THEME={THEME} productDetails={productDetails} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
