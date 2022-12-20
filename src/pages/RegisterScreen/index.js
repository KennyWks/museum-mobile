import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Button,
  Dropdown,
  Gap,
  Input,
  Loading,
  Textarea,
} from '../../components';
import {postData} from '../../helpers/CRUD';
import {useForm} from '../../utils';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

export default function RegisterScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const [form, setForm] = useForm({
    nama_pengunjung: '',
    jk: '',
    alamat: '',
    no_hp: '',
  });

  const [loading, setLoading] = useState(false);
  const jobs = [
    {label: 'Not Working', value: 'Not Working'},
    {label: 'Taking care of households', value: 'Taking care of households'},
    {label: 'Students', value: 'Students'},
    {label: 'Teacher', value: 'Teacher'},
    {label: 'Civil Servant', value: 'Civil Servant'},
    {label: 'Army', value: 'Army'},
    {label: 'Police Officer', value: 'Police Officer'},
  ];

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
    <View style={{backgroundColor: '#030303', flex: 1}}>
      <View style={styles.page(tabBarHeight)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Name"
            value={form.nama_pengunjung}
            onChangeText={value => setForm('nama_pengunjung', value)}
          />
          <Gap height={5} />
          <Dropdown
            label="Gender"
            items={[
              {label: 'Male', value: 'Male'},
              {label: 'Female', value: 'Female'},
            ]}
            onValueChange={value => setForm('jk', value)}
          />
          <Dropdown
            label="Jobs"
            items={jobs}
            onValueChange={value => setForm('pekerjaan', value)}
          />
          <Textarea
            label="Address"
            numberOfLines={5}
            value={form.alamat}
            onChangeText={value => setForm('alamat', value)}
          />
          <Input
            label="Phone Number"
            value={form.no_hp}
            onChangeText={value => setForm('no_hp', value)}
          />
          <Gap height={10} />
          <Button onPress={onSave} title="Save" type="dark" />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  page: tabBarHeight => ({
    flex: 1,
    padding: 20,
    backgroundColor: '#030303',
    marginBottom: tabBarHeight + 15,
  }),
});
