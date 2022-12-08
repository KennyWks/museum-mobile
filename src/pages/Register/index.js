import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {useForm} from '../../utils';
import {postData} from '../../helpers/CRUD';
import {showMessage, hideMessage} from 'react-native-flash-message';

export default function Register() {
  const [form, setForm] = useForm({
    nama_pengunjung: '',
    jk: '',
    alamat: '',
    no_hp: '',
  });

  const [loading, setLoading] = useState(false);

  const onSave = async () => {
    setLoading(true);
    try {
      const result = await postData('/kunjungan', form);
      setForm('reset');
      showMessage({
        message: 'Berhasil',
        type: 'success',
      });
    } catch (error) {
      console.log(error);
      showMessage({
        message: 'Gagal',
        type: 'danger',
      });
    }
    setLoading(false);
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <Input
            label="Nama"
            value={form.nama_pengunjung}
            onChangeText={value => setForm('nama_pengunjung', value)}
          />
          <Input
            label="Jenis Kelamin"
            value={form.jk}
            onChangeText={value => setForm('jk', value)}
          />
          <Input
            label="Alamat"
            value={form.alamat}
            onChangeText={value => setForm('alamat', value)}
          />
          <Input
            label="Nomor HP"
            value={form.no_hp}
            onChangeText={value => setForm('no_hp', value)}
          />
          <Gap height={10} />
          <Button onPress={onSave} title="Save" type="darkk" />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 25,
  },
});
