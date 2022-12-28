import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MiIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  HomeStackScreen,
  RegisterStackScreen,
  SaranStackScreen,
  ScannerStackScreen,
} from '../router';
import {colors} from '../utils';
//redux toolkit
import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.dark,
          borderRadius: 20,
          marginBottom: 10,
          marginTop: 5,
          height: 60,
          position: 'absolute',
          marginHorizontal: 10,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          padding: 10,
          borderRadius: 20,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveBackgroundColor: colors.secondary,
        tabBarActiveTintColor: colors.text.default,
      }}>
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
          title: props.languages.tabNavigationMenu.home,
          tabBarIcon: () => (
            <MiIcon name="home-outline" size={23} color={colors.text.default} />
          ),
          unmountOnBlur: true,
        }}
        listeners={({navigation}) => ({
          blur: () => navigation.setParams({params: undefined}),
        })}
      />
      <Tab.Screen
        name="ScannerStackScreen"
        component={ScannerStackScreen}
        options={{
          title: props.languages.tabNavigationMenu.scanner,
          tabBarIcon: () => (
            <MiIcon name="qrcode-scan" size={23} color={colors.text.default} />
          ),
          unmountOnBlur: true,
        }}
        listeners={({navigation}) => ({
          blur: () => navigation.setParams({params: undefined}),
        })}
      />
      <Tab.Screen
        name="RegisterStackScreen"
        component={RegisterStackScreen}
        options={{
          title: props.languages.tabNavigationMenu.register,
          tabBarIcon: () => (
            <MiIcon
              name={'account-plus-outline'}
              size={23}
              color={colors.text.default}
            />
          ),
          unmountOnBlur: true,
        }}
        listeners={({navigation}) => ({
          blur: () => navigation.setParams({params: undefined}),
        })}
      />
      <Tab.Screen
        name="SaranStackScreen"
        component={SaranStackScreen}
        options={{
          title: props.languages.tabNavigationMenu.recommendations,
          tabBarIcon: () => (
            <MiIcon
              name={'chat-alert-outline'}
              size={23}
              color={colors.text.default}
            />
          ),
          unmountOnBlur: true,
        }}
        listeners={({navigation}) => ({
          blur: () => navigation.setParams({params: undefined}),
        })}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    languages: state.languages,
  };
};

export default connect(mapStateToProps)(TabNavigator);
