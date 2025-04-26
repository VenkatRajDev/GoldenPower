import {StyleSheet, View, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../Theme/Dimension';
import {Light} from '../../../../Theme/Presentation';
import {Fontsize} from '../../../../Theme/FontConfig';

const InputField = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        style={[styles.inputField]}
        placeholder="Email / Username"
        onChangeText={input => setEmail(input)}
        placeholderTextColor={Light.PLACEHOLDER}
        selectionColor={Light.SECOUNDARY}
      />

      <View>
        <TextInput
          value={password}
          style={[styles.inputField]}
          placeholder="Password"
          onChangeText={input => setPassword(input)}
          placeholderTextColor={Light.PLACEHOLDER}
          secureTextEntry={showPassword}
          selectionColor={Light.SECOUNDARY}
        />
        <Pressable
          style={styles.eye}
          onPress={() => setShowPassword(!showPassword)}
          hitSlop={{right: 10, left: 10, top: 10, bottom: 10}}>
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={Fontsize.TITLE}
            color={Light.TEXTPRIMARY}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  inputField: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HIGHT * 0.09,
    borderRadius: 100 / 2,
    padding: SCREEN_WIDTH * 0.05,
    borderWidth: 2,
    borderColor: Light.TEXTSECONDARY,
    color: Light.TEXTPRIMARY,
  },
  eye: {
    position: 'absolute',
    top: '35%',
    right: '8%',
  },
});
