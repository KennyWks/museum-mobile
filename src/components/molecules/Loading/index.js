import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export default function Scanner({navigation}) {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color="blue" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    color: 'blue',
  },
});
