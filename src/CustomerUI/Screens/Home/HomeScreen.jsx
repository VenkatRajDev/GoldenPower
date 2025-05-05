import {View, Text, ScrollView, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {useTheme} from '../../../../ThemeProvider';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SAFE_PADDING_BOTTOM} from '../../../../Theme/Dimension';

import Header from './sections/Header';
import Search from './sections/Search';
import SuggestionCard from './sections/SuggestionCard';
import ProductRecommend from './sections/ProductRecommend';

const HomeScreen = () => {
  const {THEME, isDarkMode} = useTheme();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: THEME.BACKGROUND}}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Header THEME={THEME} />
        <Search THEME={THEME} />
        <SuggestionCard THEME={THEME} />
        <ProductRecommend THEME={THEME} />
      </ScrollView>

      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={THEME.BACKGROUND}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: SAFE_PADDING_BOTTOM,
  },
});
