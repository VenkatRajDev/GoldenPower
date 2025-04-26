import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Light} from '../../../../Theme/Presentation';
import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../Theme/Dimension';
import { Fontfamily, Fontsize } from '../../../../Theme/FontConfig';

const InputField = () => {
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);

  return (
    <View style={styles.container}>
      <TextInput
        value={userName}
        onChangeText={name => setUserName(name)}
        style={styles.inputs}
        placeholder="Username"
        placeholderTextColor={Light.PLACEHOLDER}
      />

      <View style={{gap: SCREEN_HIGHT * 0.02}}>
      <TextInput
        value={userId}
        onChangeText={id => setUserId(id)}
        style={styles.inputs}
        placeholder="UserId"
        placeholderTextColor={Light.PLACEHOLDER}
      />
      <Text style={styles.forgotPassword}>Forgot Password ? </Text>
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputs: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HIGHT * 0.09,
    borderWidth: 2,
    borderColor: Light.TEXTSECONDARY,
    borderRadius: 100 / 2,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
    color: Light.TEXTPRIMARY,
  },
  forgotPassword:{
    fontSize: Fontsize.TITLE,
    fontFamily: Fontfamily.MEDIUM,
    alignSelf:'flex-end',
    paddingHorizontal: SCREEN_WIDTH * 0.03
  }
});
