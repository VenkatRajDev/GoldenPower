import {StyleSheet, View, TextInput,} from 'react-native';
import React, { useCallback, useState } from 'react';
import { SCREEN_HIGHT, SCREEN_WIDTH } from '../../../../Theme/Dimension';
import { Light } from '../../../../Theme/Presentation';

const Fields = ['Name', 'Email', 'PhoneNumber', 'Address'];

const InputField = () => {

    const [customerInputs,setCustomerInputs] = useState({
        Name: null,
        Email: null,
        PhoneNumber: null,
        Address: null
    })

    const handleInputs = useCallback((fields,text) => {
        return setCustomerInputs((previous) => {
            return {...previous, [fields]: text}
        })
    },[customerInputs])

  return (
    <View 
     style={styles.container}>
      {Fields.map((fields, index) => {
        return <TextInput 
        key={index.toString()}
        value={customerInputs[fields]}
        placeholder={fields}
        placeholderTextColor={Light.PLACEHOLDER}
        onChangeText={(text) => handleInputs(fields,text)}
        style={styles.inputs}
        keyboardType={fields === 'PhoneNumber' ? 'number-pad' : 'default'}
        multiline={fields === 'Address' ? true : false}
        />;
      })}
    </View 
    >
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical: SCREEN_HIGHT * 0.01
  },
  inputs:{
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HIGHT * 0.09,
    borderWidth: 2,
    borderRadius: 100 / 2,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    borderColor: Light.TEXTSECONDARY,
    color: Light.TEXTPRIMARY
  }
});
