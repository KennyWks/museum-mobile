import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText}) => {
  const [border, setBorder] = useState('#F5E8E4');

  const onFocusForm = () => {
    setBorder('#F5C7A9');
  };

  const onBlurForm = () => {
    setBorder('#F5E8E4');
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
    color: '#F5E8E4',
  },
  input: border => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    padding: 12,
    color: '#F5E8E4',
  }),
});
