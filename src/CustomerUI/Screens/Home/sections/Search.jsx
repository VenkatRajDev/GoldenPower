import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SCREEN_HIGHT, SCREEN_WIDTH,BORDER_RADIUS} from '../../../../../Theme/Dimension';
import { Fontfamily, Fontsize } from '../../../../../Theme/FontConfig';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Light } from '../../../../../Theme/Presentation';

const Search = ({THEME}) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={[styles.searchBarButton,{outlineColor: THEME.PLACEHOLDER}]}>
        <Ionicons name="search" size={Fontsize.SUB} color={THEME.TEXTPRIMARY}/>
        <Text style={[styles.searchBarButtonText,{color: THEME.TEXTPRIMARY}]}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.filterContainer,{outlineColor: THEME.PLACEHOLDER}]}>
        <Ionicons name="filter" size={Fontsize.SUB + 2} color={THEME.TEXTPRIMARY}/>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    padding: SCREEN_WIDTH * 0.05,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  searchBarButton: {
    width: SCREEN_WIDTH * 0.67,
    height: SCREEN_HIGHT * 0.07,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    borderRadius: BORDER_RADIUS,
    flexDirection:"row",
    alignItems:"center",
    gap: SCREEN_WIDTH * 0.05,
    outlineWidth: 2
  },
  searchBarButtonText: {
    fontSize: Fontsize.SUB - 5,
    fontFamily: Fontfamily.MEDIUM
  },
  filterContainer:{
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_HIGHT * 0.07,
    borderRadius: BORDER_RADIUS,
    justifyContent:'center',
    alignItems:'center',
    outlineWidth: 2
  }
});
