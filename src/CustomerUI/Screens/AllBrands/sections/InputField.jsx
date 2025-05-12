import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Fontsize, Fontfamily} from '../../../../../Theme/FontConfig';
import {
  SCREEN_WIDTH,
  SCREEN_HIGHT,
  BORDER_RADIUS,
} from '../../../../../Theme/Dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';

const _inputWidth = SCREEN_WIDTH * 0.9;
const _inputHeight = SCREEN_HIGHT * 0.07;

const InputField = ({THEME}) => {
  return (
    <View>
      <TextInput
        style={[
          styles.input,
          {backgroundColor: THEME.CARDBACKGROUND, color: THEME.TEXTPRIMARY},
        ]}
        placeholder="Search your favoriote Brands"
        placeholderTextColor={THEME.PLACEHOLDER}
        onFocus={() => console.log(`Input is focus`)}
        onBlur={() => console.log(`Input is unfocused`)}
      />
      <Ionicons
        name="search"
        style={styles.searchIcon}
        size={Fontsize.SUB - 5}
        color={THEME.TEXTPRIMARY}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    width: _inputWidth,
    height: _inputHeight,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: SCREEN_WIDTH * 0.12,
    fontSize: Fontsize.BODYTEXT,
    fontFamily: Fontfamily.MEDIUM,
    marginBottom: SCREEN_HIGHT * 0.02,
  },
  searchIcon: {
    position: 'absolute',
    top: _inputHeight * 0.3,
    left: _inputWidth * 0.04,
  },
});
