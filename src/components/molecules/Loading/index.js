import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

export default function Scanner() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={colors.loading.logo} />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.loading.background,
    width: '100%',
    height: '100%',
  },
  loadingText: {
    fontSize: 18,
    color: colors.text.default,
  },
});
