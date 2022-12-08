import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Please Scan QR Code for get more relic details.
        </Text>
      </View>
      <View>
        <Button
          onPress={() => {
            navigation.navigate('Scanner');
          }}
          title="Scanner"
          type="dark"
        />
        <Gap height={10} />
        <Button
          onPress={() => {
            navigation.navigate('Register');
          }}
          title="Register"
          type="darkk"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {padding: 40, justifyContent: 'space-between', flex: 1},
  title: {fontSize: 28, fontWeight: '600', color: 'black', marginTop: 30},
});
