import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ILRelic} from '../../assets/illustration';

export default function ShowData({navigation}) {
  return (
    <View style={styles.page}>
      <Image source={ILRelic} style={styles.image} />
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>Lukisan terkenal</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: 'black', flex: 1},
  image: {height: 400, width: '100%'},
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 20,
    marginTop: -20,
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
});
