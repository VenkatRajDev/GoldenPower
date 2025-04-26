import {StyleSheet, ScrollView,StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Light} from '../../../../Theme/Presentation';
import {SCREEN_HIGHT} from '../../../../Theme/Dimension';

import Heading from './Heading';
import InputField from './InputField';
import Footer from './Footer';

// Creating a new account for the customer
const SIGNUP = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Heading />
        <InputField />
        <Footer navigation={navigation}/>
      </ScrollView>

      <StatusBar barStyle="dark-content" backgroundColor={Light.BACKGROUND} />
    </SafeAreaView>
  );
};

export default SIGNUP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Light.BACKGROUND,
  },
  scrollContainer: {
    minHeight: SCREEN_HIGHT,
  },
});
