import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BORDER_RADIUS, SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../../Theme/Dimension';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import { Light } from '../../../../../Theme/Presentation';

const _boxWidth = SCREEN_WIDTH * 0.9;
const _boxHeight = SCREEN_HIGHT * 0.3;

const SuggestionCard = ({THEME}) => {
  return (
    <View style={[styles.container, {backgroundColor: THEME.CARDBACKGROUND}]}>
      
      <View style={{gap: SCREEN_WIDTH * 0.01}}>
        <Text style={[styles.title, {color: THEME.TEXTPRIMARY}]}>
          Hey Username
        </Text>

        <Text style={[styles.msgTitle, {color: THEME.TEXTPRIMARY}]}>
         Tell Us What You Have, We`ll Suggest What You Need
        </Text>

        <Text style={[styles.msg,{color: THEME.TEXTSECONDARY}]}>
          Pick your favorite product and place your order in seconds!
        </Text>
      </View>

      <TouchableOpacity style={[styles.getSuggestionButton,{backgroundColor: THEME.SECOUNDARY}]}>
        <Text style={[styles.getSuggestionButtonText,{color: THEME.BUTTONTEXTCOLOR}]}>Get Suggestion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuggestionCard;

const styles = StyleSheet.create({
  container: {
    width: _boxWidth,
    height: _boxHeight,
    padding: SCREEN_WIDTH * 0.04,
    marginTop: SCREEN_HIGHT * 0.02,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    elevation: 10
  },
  title: {
    fontSize: Fontsize.SUB,
    fontFamily: Fontfamily.SEMIBOLD,
  },
  msgTitle: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.MEDIUM,
  },
  msg: {
    fontSize: Fontsize.BODYTEXT,
    fontFamily: Fontfamily.LIGHT,
  },
  getSuggestionButton: {
    width: _boxWidth * 0.9,
    height: _boxHeight * 0.2,
    backgroundColor: 'pink',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: BORDER_RADIUS
  },
  getSuggestionButtonText:{
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.MEDIUM
  }
});
