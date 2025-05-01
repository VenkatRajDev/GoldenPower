import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { SCREEN_WIDTH} from '../../../../../Theme/Dimension';
import { Fontfamily, Fontsize } from '../../../../../Theme/FontConfig';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({THEME}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,{color: THEME.TEXTPRIMARY}]}>Explore Products</Text>
      <Ionicons name='filter' size={Fontsize.SUB} color={THEME.TEXTPRIMARY}/>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: SCREEN_WIDTH * 0.05,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  title:{
    fontSize: Fontsize.SUB,
    fontFamily: Fontfamily.SEMIBOLD
  }
});
