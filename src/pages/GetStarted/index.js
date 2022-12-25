import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Linking,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {getData, ApiURL} from '../../helpers/CRUD';
import {IconNavigation, PopupMenu, Loading} from '../../components';
import moment from 'moment';
import 'moment/locale/id';

export default function GetStarted({navigation}) {
  const tabBarHeight = useBottomTabBarHeight();
  // const [results, setResult] = useState([]);
  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshingEvents, setRefreshingEvents] = React.useState(false);
  const [refreshingArticles, setRefreshingArticles] = React.useState(false);

  useEffect(() => {
    // fetchRequest();
    setLoading(true);
    getArticles();
    getEvents();
    setLoading(false);
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
  };

  const onRefreshEvents = React.useCallback(() => {
    setRefreshingEvents(true);
    getEvents();
    setRefreshingEvents(false);
  }, []);

  const onRefreshArticles = React.useCallback(() => {
    setRefreshingArticles(true);
    getArticles();
    setRefreshingArticles(false);
  }, []);

  return (
    <>
      {!loading && (
        <View style={styles.container}>
          <View style={styles.iconMenu}>
            <PopupMenu
              options={[
                {label: 'Indonesia', value: 'indonesia'},
                {label: 'English', value: 'english'},
              ]}
              label={
                <IconNavigation name="translate" size={25} color="white" />
              }
              onSelect={value => console.log('translate', value)}
            />
            <PopupMenu
              options={[
                {label: 'Server 1', value: '192.168.1.1'},
                {label: 'Server 2', value: '192.168.1.3'},
              ]}
              label={
                <IconNavigation name="dots-vertical" size={25} color="white" />
              }
              onSelect={value => console.log('server', value)}
            />
          </View>
          <View style={styles.content}>
            {/* Start Events Section */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Events</Text>
            </View>
            <View style={styles.listCardSatu}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshingEvents}
                    onRefresh={onRefreshEvents}
                  />
                }>
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
                        <Text style={styles.titleCard}>
                          {val.nama_kegiatan}
                        </Text>
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
              <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshingArticles}
                    onRefresh={onRefreshArticles}
                  />
                }>
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
        </View>
      )}
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#030303',
    flex: 1,
  },
  iconMenu: {
    height: '5%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    paddingHorizontal: 20,
  },
  content: {
    height: '95%',
    width: '100%',
  },
  titleContainer: {
    justifyContent: 'flex-start',
    marginLeft: 20,
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
