import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../../../../ThemeProvider';
import {SAFE_PADDING_BOTTOM, SCREEN_HIGHT} from '../../../../Theme/Dimension';

import {inventorData, batterys, combosData} from './tempData';

import Header from './sections/Header';
import BrandsRecommend from './sections/BrandsRecommend';
import Recommendation from './sections/Recommendation';

const RecommendTitles = [
  {id: 1, title: 'Inventors', products: [...inventorData]},
  {id: 2, title: 'Batterys', products: [...batterys]},
  {id: 3, title: 'Combos', products: [...combosData]},
];

const ShopScreen = () => {
  const {THEME} = useTheme();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: THEME.BACKGROUND}}>
      <ScrollView contentContainerStyle={[styles.scrollContainer]}>
        <Header THEME={THEME} />
        <BrandsRecommend THEME={THEME} />
        {RecommendTitles.map((elements, index) => {
          return (
            <Recommendation
              THEME={THEME}
              title={elements.title}
              products={elements.products}
              key={elements.id.toString()}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: SAFE_PADDING_BOTTOM,
    gap: SCREEN_HIGHT * 0.01
  },
});
