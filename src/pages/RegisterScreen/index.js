import React, {useEffect, useState} from 'react';
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
  DropdownWithSearch,
} from '../../components';
import {getData, postData} from '../../helpers/CRUD';
import {colors, useForm} from '../../utils';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

export default function RegisterScreen() {
  useEffect(() => {
    getCountries();
    getGenderAndJobsOptionLanguage();
  }, []);

  const tabBarHeight = useBottomTabBarHeight();
  const [countryCode, setCountryCode] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [gender, setGender] = useState([]);
  const [students, setStudents] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    nama_pengunjung: '',
    jk: '',
    asal_negara: '',
    propinsi: '',
    kab_kota: '',
    pekerjaan: '',
    sekolah: '',
    alamat: '',
    no_hp: '',
  });

  const getGenderAndJobsOptionLanguage = async () => {
    let condition = 'indonesian';
    if (condition === 'english') {
      setGender([
        {label: 'Male', value: 'Male'},
        {label: 'Female', value: 'Female'},
      ]);
    } else {
      setGender([
        {label: 'Laki-laki', value: 'Laki-laki'},
        {label: 'Perempuan', value: 'Perempuan'},
      ]);
    }
    try {
      const result = await getData(`/api/getPekerjaan/${condition}`);
      setJobs(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCountries = async () => {
    setLoading(true);
    try {
      const result = await getData('/api/getCountries');
      setCountries(result.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getStates = async value => {
    setLoading(true);
    try {
      const result = await getData(`/api/getStates/${value}`);
      setStates(result.data);
      setCities([]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getCities = async value => {
    setLoading(true);
    try {
      const result = await getData(`/api/getCities/${countryCode}/${value}`);
      setCities(result.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

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
        getCountries();
        setStates([]);
        setCities([]);
      }
    } catch (error) {
      console.log(error);
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
    <View style={styles.container}>
      <View style={styles.page(tabBarHeight)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Name"
            value={form.nama_pengunjung}
            onChangeText={value => setForm('nama_pengunjung', value)}
          />
          <Gap height={5} />
          <DropdownWithSearch
            label={'Countries'}
            data={countries}
            onValueChange={(label, value) => {
              setForm('asal_negara', label);
              getStates(value);
              setCountryCode(value);
            }}
          />
          <Gap height={5} />
          <DropdownWithSearch
            label="States/Provinces"
            data={states}
            onValueChange={(label, value) => {
              setForm('propinsi', label);
              getCities(value);
            }}
          />
          <Gap height={5} />
          <DropdownWithSearch
            label="Cities/Regions"
            data={cities}
            onValueChange={(label, value) => {
              setForm('kab_kota', label);
            }}
          />
          <Textarea
            label="Address"
            numberOfLines={5}
            value={form.alamat}
            onChangeText={value => setForm('alamat', value)}
          />
          <Gap height={5} />
          <Dropdown
            label="Gender"
            data={gender}
            onValueChange={value => setForm('jk', value)}
          />
          <Gap height={5} />
          <DropdownWithSearch
            label="Jobs"
            data={jobs}
            onValueChange={value => {
              if (value === 'Students' || value === 'Pelajar/Mahasiswa') {
                setStudents(true);
              } else {
                setStudents(false);
              }
              setForm('pekerjaan', value);
            }}
          />
          {students && (
            <Input
              label="School/University"
              value={form.sekolah}
              onChangeText={value => setForm('sekolah', value)}
            />
          )}
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
  container: {backgroundColor: colors.dark, flex: 1},
  page: tabBarHeight => ({
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 3,
    backgroundColor: colors.dark,
    marginBottom: tabBarHeight + 15,
  }),
});
