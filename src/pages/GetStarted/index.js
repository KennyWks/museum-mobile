import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Linking,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {getData, ApiURL} from '../../helpers/CRUD';
import {Loading} from '../../components';
import moment from 'moment';
import 'moment/locale/id';

export default function GetStarted({navigation}) {
  const tabBarHeight = useBottomTabBarHeight();
  // const [results, setResult] = useState([]);
  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetchRequest();
    getArticles();
    getEvents();
  }, []);

  // const fetchRequest = async () => {
  //   const data = await fetch(
  //     `https://api.unsplash.com/search/photos?page=1&query=museum&client_id=FFXaGqhfuZToC9Ou3mrdOxHUQvNkol58lxAyQQmh4lo&per_page=5`,
  //   );
  //   const dataJ = await data.json();
  //   const imageData = dataJ.results;
  //   setResult(imageData);
  // };

  const getArticles = async () => {
    setLoading(true);
    try {
      const resultArticles = await getData('/api/getArtikel');
      setArticles(resultArticles.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getEvents = async () => {
    try {
      const resultEvents = await getData('/api/getKegiatan');
      setEvents(resultEvents.data.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      {!loading && (
        <View style={styles.page}>
          {/* Start Events Section */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Events</Text>
          </View>
          <View style={styles.listCardSatu}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {events.map((val, i) => (
                <TouchableHighlight
                  key={i}
                  onPress={() => {
                    Linking.openURL('https://www.google.com');
                  }}>
                  <View style={styles.cardItem}>
                    <View style={styles.cardImage}>
                      <Image
                        style={styles.image}
                        // source={{
                        //   uri: val.urls.small,
                        // }}
                        source={{uri: ApiURL + val.gambar + '?' + new Date()}}
                      />
                    </View>
                    <View style={styles.cardDetail}>
                      <Text style={styles.titleShadow}>
                        {moment(val.created_at)
                          .locale('en')
                          .format('MMMM DD, YYYY')}
                      </Text>
                      <Text style={styles.titleCard}>{val.nama_kegiatan}</Text>
                      <Text style={styles.titleShadow}>{val.keterangan}</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              ))}
            </ScrollView>
          </View>
          {/* End Events Section */}

          {/* Start Berita section */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Articles</Text>
          </View>
          <View style={styles.listCardDua(tabBarHeight)}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {articles.map((val, i) => (
                <TouchableHighlight
                  key={i}
                  onPress={() => {
                    Linking.openURL('https://www.google.com');
                  }}>
                  <View style={styles.cardBerita}>
                    <Text style={styles.newsTitle}>{val.judul}</Text>
                    <Text style={styles.newsPublishTime}>
                      Published at{' : '}
                      {moment(val.created_at)
                        .locale('en')
                        .format('ddd, DD MMMM YYYY')}
                    </Text>
                  </View>
                </TouchableHighlight>
              ))}
            </ScrollView>
          </View>
          {/* End Berita section */}
        </View>
      )}
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#030303',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 20,
    paddingTop: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#F5E8E4',
    marginVertical: 10,
    letterSpacing: 5,
  },
  listCardSatu: {
    backgroundColor: '#030303',
    flex: 5,
    marginLeft: 20,
    marginRight: 5,
  },
  listCardDua: tabBarHeight => ({
    backgroundColor: '#030303',
    flex: 5,
    marginLeft: 20,
    marginRight: 10,
    maxHeight: 700,
    marginBottom: tabBarHeight + 15,
  }),
  cardBerita: {
    marginBottom: 10,
  },
  cardItem: {
    flex: 3,
    flexDirection: 'row',
    marginHorizontal: 2,
    marginVertical: 15,
    maxHeight: 800,
  },
  cardImage: {
    flex: 2,
    maxHeight: 120,
    flexDirection: 'column',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
  },
  cardDetail: {
    flex: 3,
    height: '100%',
    flexDirection: 'column',
    paddingLeft: 10,
  },
  titleCard: {
    fontSize: 20,
    fontWeight: '600',
    maxWidth: 150,
    color: '#F5E8E4',
    marginVertical: 10,
  },
  titleShadow: {
    fontSize: 15,
    fontWeight: '500',
    maxWidth: 200,
    color: '#bdbbbb',
  },
  newsTitle: {
    fontSize: 17,
    fontWeight: '700',
    maxWidth: 600,
    color: '#F5E8E4',
    marginVertical: 8,
  },
  newsPublishTime: {
    fontSize: 12,
    fontWeight: '500',
    color: '#bdbbbb',
  },
});
