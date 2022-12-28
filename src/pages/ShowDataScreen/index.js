import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DataRelic, Loading} from '../../components';
import {getData} from '../../helpers/CRUD';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {ImageSlider} from 'react-native-image-slider-banner';
import {colors, languages} from '../../utils';

export default function ShowDataScreen({navigation, route}) {
  const {koleksi_id} = route.params;

  const tabBarHeight = useBottomTabBarHeight();
  const [koleksi, setKoleksi] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataKoleksi();
  }, []);

  const getDataKoleksi = async () => {
    setKoleksi([]);
    setLoading(true);
    try {
      const result = await getData(`/api/getKoleksi/${koleksi_id}`);
      setKoleksi(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  return (
    <>
      {!loading && (
        <View style={styles.imageContent}>
          <ImageSlider
            data={koleksi.image}
            autoPlay={true}
            timer={3000}
            closeIconColor={colors.text.default}
            key={koleksi.koleksi_id}
          />
          <View style={styles.textContent(tabBarHeight)}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{koleksi.nama_koleksi}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <DataRelic
                label={languages.showDataPage.subDataRelicHeader.label1}
                value={koleksi.nama_kategori}
              />
              <DataRelic
                label={languages.showDataPage.subDataRelicHeader.label2}
                value={koleksi.deskripsi}
              />
            </ScrollView>
          </View>
        </View>
      )}
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  imageContent: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  image: {
    height: 400,
    width: '100%',
    borderRadius: 5,
  },
  textContent: tabBarHeight => ({
    flex: 1,
    backgroundColor: colors.dark,
    marginBottom: tabBarHeight + 5,
  }),
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  titleText: {
    fontSize: 18,
    color: colors.text.default,
    fontWeight: '800',
  },
});
