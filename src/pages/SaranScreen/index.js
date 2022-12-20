import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function SaranScreen() {
  return (
    <View style={styles.page}>
      <Text style={{textAlign: 'center'}}>Saran</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
