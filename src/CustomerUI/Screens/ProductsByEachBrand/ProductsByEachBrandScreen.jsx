import {FlatList, View, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {productData} from '../../../../Data/Product';
import Card from '../../components/Card';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../../../ThemeProvider';

import Header from './sections/Header';
import FilterTags from './sections/FilterTags';
import {SCREEN_HIGHT} from '../../../../Theme/Dimension';

const ProductsByEachBrandScreen = ({route}) => {
  const navigation = useNavigation();
  const {THEME, isDarkMode} = useTheme();
  const {BrandDetails} = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: THEME.BACKGROUND}}>
      <FlatList
        data={productData}
        renderItem={({item}) => (
          <Card cardInfo={item} navigation={navigation} />
        )}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => (
          <>
            <Header
              THEME={THEME}
              navigation={navigation}
              BrandDetails={BrandDetails}
              isDarkMode={isDarkMode}
            />
            <View style={styles.headerTagSection}>
              <FilterTags THEME={THEME} />
            </View>
          </>
        )}
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ProductsByEachBrandScreen;

const styles = StyleSheet.create({
  headerTagSection: {
    height: SCREEN_HIGHT * 0.1,
    gap: SCREEN_HIGHT * 0.01,
    justifyContent: 'center',
  },
});
