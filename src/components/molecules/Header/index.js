import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Form Register</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {width: '100%', alignItems: 'center', margin: 10},
  textHeader: {color: 'black', fontSize: 20, fontWeight: '800'},
});
