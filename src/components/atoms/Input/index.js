import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {colors} from '../../../utils';

const Input = ({label, value, onChangeText}) => {
  const [border, setBorder] = useState(colors.border.default);

  const onFocusForm = () => {
    setBorder(colors.border.secondary);
  };

  const onBlurForm = () => {
    setBorder(colors.border.default);
  };

  return (
    <View style={styles.cardInput}>
      <Text style={styles.textLabel}>{label}</Text>
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
  textLabel: {
    fontSize: 16,
    marginBottom: 6,
    fontFamily: 'Nunito-regular',
    color: colors.text.default,
  },
  input: border => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    padding: 12,
    color: colors.border.default,
  }),
});
