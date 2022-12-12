import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Dropdown({label, items, onValueChange}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNPickerSelect
        placeholder={{label: `Pilih ${label}`, value: null}}
        onValueChange={onValueChange}
        items={items}
        style={pickerSelectStyles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {color: 'black', fontSize: 16},
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'blue',
    padding: 12,
    color: 'black',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 0.5,
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
