import { StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Light } from '../../../../Theme/Presentation'
import { SCREEN_HIGHT } from '../../../../Theme/Dimension'

import Heading from './Heading'
import InputField from './InputField'
import Footer from './Footer'


// sign into the customer existing account 
const SIGNIN = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Heading/>
        <InputField/>
        <Footer navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SIGNIN

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Light.BACKGROUND
  },
  scrollContainer:{
    height: SCREEN_HIGHT,
  }
})