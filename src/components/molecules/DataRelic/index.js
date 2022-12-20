import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DataRelic = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};
export default DataRelic;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginLeft: 5,
    marginRight: 5,
  },
  label: {fontSize: 14, marginBottom: 5, color: '#F5E8E4', fontWeight: '700'},
  value: {fontSize: 14, color: '#F5E8E4', textAlign: 'justify'},
});
