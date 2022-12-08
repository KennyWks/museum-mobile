import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ILRelic} from '../../assets/illustration';
import {DataRelic, Gap} from '../../components';

export default function ShowData({navigation}) {
  return (
    <View style={styles.page}>
      <Image source={ILRelic} style={styles.image} />
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.titleContent}>
            <Text style={styles.titleText}>Lukisan terkenal</Text>
          </View>
          <Gap height={10} />
          <DataRelic label="Lukisan satu" value="Detail Lukisan satu" />
          <DataRelic label="Lukisan dua" value="Detail Lukisan dua" />
          <DataRelic label="Lukisan tiga" value="Detail Lukisan tiga" />
          <DataRelic label="Lukisan tiga" value="Detail Lukisan tiga" />
          <DataRelic label="Lukisan tiga" value="Detail Lukisan tiga" />
          <DataRelic label="Lukisan tiga" value="Detail Lukisan tiga" />
        </ScrollView>
        <Gap height={10} />
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
  },
  titleContent: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
  },
});
