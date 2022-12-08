import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button} from '../../components';

export default function Scanner({navigation}) {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Scanner Page</Text>
      <Button
        onPress={() => {
          navigation.replace('ShowData');
        }}
        title="Scan"
        type="darkk"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {fontSize: 20, fontWeight: '600', color: '#112340'},
});
