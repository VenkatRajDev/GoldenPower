import {Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../../ThemeProvider';
import {Fontsize} from '../../../Theme/FontConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BackButton = () => {
  const navigation = useNavigation();
  const {THEME} = useTheme();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Ionicons
        name="chevron-back"
        size={Fontsize.HEADING - 5}
        color={THEME.TEXTPRIMARY}
      />
    </Pressable>
  );
};

export default BackButton;
