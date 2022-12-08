import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Gap, Header, Input} from '../../components';

export default function Register({navigation}) {
  const [nama, setNama] = useState('');
  const [jk, setJK] = useState('');
  const [alamat, setAlamat] = useState('');
  const [NoHP, setNoHP] = useState('');

  const onSave = () => {};

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Input
          label="Nama"
          value={nama}
          onChangeText={value => setNama(value)}
        />
        <Input
          label="Jenis Kelamin"
          value={jk}
          onChangeText={value => setJK(value)}
        />
        <Input
          label="Alamat"
          value={alamat}
          onChangeText={value => setAlamat(value)}
        />
        <Input
          label="Nomor HP"
          value={NoHP}
          onChangeText={value => setNoHP(value)}
        />
        <Gap height={10} />
        <Button
          onPress={() => {
            alert('ok');
          }}
          title="Save"
          type="darkk"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 25,
  },
});
