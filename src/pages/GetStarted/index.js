import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import moment from 'moment';
import 'moment/locale/id';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Linking,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {IconNavigation, Loading, PopupMenu} from '../../components';
import {getData} from '../../helpers/CRUD';
import {colors} from '../../utils';
//redux toolkit
import {connect, useDispatch, useSelector} from 'react-redux';
import ActionType from '../../redux/reducer/globalActionType';
import {showMessage} from 'react-native-flash-message';

function GetStarted({navigation}) {
  const tabBarHeight = useBottomTabBarHeight();
  // const [results, setResult] = useState([]);
  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshingEvents, setRefreshingEvents] = React.useState(false);
  const [refreshingArticles, setRefreshingArticles] = React.useState(false);

  const languages = useSelector(state => state.languages);
  const ApiURL = useSelector(state => state.url);
  const dispatch = useDispatch();

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
      const resultArticles = await getData(`${ApiURL}/api/getArtikel`);
      setArticles(resultArticles.data.data);
    } catch (error) {
      // console.log(error);
      handleErrorMessage('Something Error!');
    }
  };

  const getEvents = async () => {
    try {
      const resultEvents = await getData(`${ApiURL}/api/getKegiatan`);
      setEvents(resultEvents.data.data);
    } catch (error) {
      // console.log(error);
      handleErrorMessage('Something Error!');
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

  const handleErrorMessage = message => {
    showMessage({
      message: message,
      type: 'danger',
    });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconMenu}>
          <PopupMenu
            options={[
              {label: 'Indonesian', value: 'indonesian'},
              {label: 'English', value: 'english'},
            ]}
            label={
              <IconNavigation
                name="translate"
                size={25}
                color={colors.text.default}
              />
            }
            onSelect={value => {
              setLoading(true);
              dispatch({type: ActionType.CHANGE_LANGUAGE, option: value});
              setLoading(false);
            }}
          />
          <PopupMenu
            options={[
              {
                label: languages.popupMenu.label,
                value: languages.popupMenu.label,
              },
            ]}
            label={
              <IconNavigation
                name="dots-vertical"
                size={25}
                color={colors.text.default}
              />
            }
            onSelect={() => {
              navigation.replace('ChangeURLScreen');
            }}
          />
        </View>

        {!loading && (
          <View style={styles.content}>
            {/* Start Events Section */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {languages.homePage.cardTitle.events}
              </Text>
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
                      Linking.openURL(`${ApiURL}/event/${val.kegiatan_id}`);
                    }}>
                    <View style={styles.cardItem}>
                      <View style={styles.cardImage}>
                        <Image
                          style={styles.image}
                          // source={{
                          //   uri: val.urls.small,
                          // }}
                          source={{
                            uri: ApiURL + val.gambar + '?' + new Date(),
                          }}
                        />
                      </View>
                      <View style={styles.cardDetail}>
                        <Text style={styles.titleShadow}>
                          {moment(val.created_at)
                            .locale('en')
                            .format('MMMM DD, YYYY')}
                        </Text>
                        <Text style={styles.titleCardEvents}>
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
              <Text style={styles.title}>
                {languages.homePage.cardTitle.articles}
              </Text>
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
                      Linking.openURL(`${ApiURL}/artikel/${val.artikel_id}`);
                    }}>
                    <View style={styles.cardNews}>
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
      </View>
      {loading && <Loading />}
    </>
  );
}
export default connect()(GetStarted);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
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
    color: colors.text.default,
    marginVertical: 10,
    letterSpacing: 5,
  },
  listCardSatu: {
    backgroundColor: colors.dark,
    flex: 5,
    marginLeft: 20,
    marginRight: 5,
  },
  listCardDua: tabBarHeight => ({
    backgroundColor: colors.dark,
    flex: 5,
    marginLeft: 20,
    marginRight: 10,
    maxHeight: 700,
    marginBottom: tabBarHeight + 15,
  }),
  cardNews: {
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
  titleCardEvents: {
    fontSize: 20,
    fontWeight: '600',
    maxWidth: 150,
    color: colors.text.default,
    marginVertical: 10,
  },
  titleShadow: {
    fontSize: 15,
    fontWeight: '500',
    maxWidth: 200,
    color: colors.midDark,
  },
  newsTitle: {
    fontSize: 17,
    fontWeight: '700',
    maxWidth: 600,
    color: colors.text.default,
    marginVertical: 8,
  },
  newsPublishTime: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.midDark,
  },
});
