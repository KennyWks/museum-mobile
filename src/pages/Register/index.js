import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Dropdown, Gap, Header, Input, Loading} from '../../components';
import {postData} from '../../helpers/CRUD';
import {useForm} from '../../utils';

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
      const result = await postData('/api/kunjungan', form);
      const {message, success} = result.data;
      if (success) {
        setForm('reset');
        showMessage({
          message: message,
          type: 'success',
        });
      }
    } catch (error) {
      const data = error.response.data.errors;
      handleEachMessage(data);
    }
    setLoading(false);
  };

  const handleEachMessage = data => {
    if (data.nama_pengunjung) {
      showMessage({
        message: data.nama_pengunjung[0],
        type: 'danger',
      });
    }

    setTimeout(() => {
      if (data.jk) {
        showMessage({
          message: data.jk[0],
          type: 'danger',
        });
      }
    }, 3000);

    setTimeout(() => {
      if (data.alamat) {
        showMessage({
          message: data.alamat[0],
          type: 'danger',
        });
      }
    }, 6000);

    setTimeout(() => {
      if (data.no_hp) {
        showMessage({
          message: data.no_hp[0],
          type: 'danger',
        });
      }
    }, 9000);
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
          <Gap height={5} />
          <Dropdown
            label="Jenis Kelamin"
            items={[
              {label: 'Laki-laki', value: 'laki-laki'},
              {label: 'Perempuan', value: 'perempuan'},
            ]}
            onValueChange={value => setForm('jk', value)}
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
