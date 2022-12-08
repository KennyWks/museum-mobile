import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText}) => {
  const [border, setBorder] = useState('blue');

  const onFocusForm = () => {
    setBorder('deepskyblue');
  };

  const onBlurForm = () => {
    setBorder('blue');
  };

  return (
    <View style={styles.cardInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  cardInput: {
    marginTop: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontFamily: 'Nunito-regular',
    color: 'black',
  },
  input: border => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    padding: 12,
    color: 'black',
  }),
});
