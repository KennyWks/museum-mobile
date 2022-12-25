import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Dropdown({label, data, onValueChange}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNPickerSelect
        placeholder={{label: `Select ${label}`, value: null}}
        onValueChange={onValueChange}
        items={data}
        style={pickerSelectStyles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {color: '#F5E8E4', fontSize: 16},
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F5E8E4',
    padding: 12,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 4,
    color: '#F5E8E4',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 0.5,
    borderRadius: 8,
    color: '#F5E8E4',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
