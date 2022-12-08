import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'dark' ? 'black' : 'blue',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  title: {fontSize: 16, fontWeight: '600', color: 'white', textAlign: 'center'},
});
