import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fontfamily, Fontsize } from '../../../../Theme/FontConfig'
import { SCREEN_HIGHT, SCREEN_WIDTH } from '../../../../Theme/Dimension'

const Heading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetText}>Lets Register{'\n'}Account</Text>
      <Text style={styles.greetText2}>Hello customer,{'  '}you have{'\n'}a greatfull journey </Text>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
  container:{
    padding: SCREEN_WIDTH * 0.05,
    gap: SCREEN_HIGHT * 0.01,
  },
  greetText:{
    fontSize: Fontsize.HEADING,
    fontFamily: Fontfamily.SEMIBOLD
  },
  greetText2:{
    fontSize: Fontsize.SUB - 5,
    fontFamily: Fontfamily.LIGHT
  }
})