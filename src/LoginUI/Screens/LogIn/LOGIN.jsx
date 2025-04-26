import {StatusBar, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Light} from '../../../../Theme/Presentation';
import { SCREEN_HIGHT } from '../../../../Theme/Dimension';

import Heading from './Heading';
import InputField from './InputField';
import Footer from './Footer';

const LOGIN = () => {
  console.log(SCREEN_HIGHT)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}>
        <Heading />
        <InputField />
        <Footer />
      </ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor={Light.BACKGROUND} />
    </SafeAreaView>
  );
};

export default LOGIN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Light.BACKGROUND,
  },
  scrollView:{
    minHeight: SCREEN_HIGHT,
  }
});
