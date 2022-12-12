import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DataRelic, Gap, Loading} from '../../components';
import {getData, ApiURL} from '../../helpers/CRUD';

export default function ShowData({navigation, route}) {
  const {koleksi_id} = route.params;

  const [koleksi, setKoleksi] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataKoleksi();
  }, []);

  const getDataKoleksi = async () => {
    setKoleksi([]);
    setLoading(true);
    try {
      const result = await getData(`/api/getDataKoleksi/${koleksi_id}`);
      setKoleksi(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      {!loading && (
        <View style={styles.page}>
          <Image
            style={styles.image}
            source={{uri: ApiURL + koleksi.foto + '?' + new Date()}}
          />
          <View style={styles.content}>
            <ScrollView>
              <View style={styles.titleContent}>
                <Text style={styles.titleText}>{koleksi.nama_koleksi}</Text>
              </View>
              <Gap height={10} />
              <DataRelic label="Tahun" value={koleksi.tahun} />
              <DataRelic label="Kategori" value={koleksi.nama_kategori} />
              <DataRelic label="Deskripsi" value={koleksi.deskripsi} />
            </ScrollView>
            <Gap height={10} />
          </View>
        </View>
      )}
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: 'black', flex: 1},
  image: {
    height: 400,
    width: '100%',
    resizeMode: 'cover',
  },
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
