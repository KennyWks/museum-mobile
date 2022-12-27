import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MiIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  HomeStackScreen,
  RegisterStackScreen,
  ScannerStackScreen,
  SaranStackScreen,
} from '../router';
import {colors} from '../utils';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
          title: 'Home',
          tabBarIcon: () => (
            <MiIcon name="home-outline" size={23} color={colors.text.default} />
          ),
        }}
      />
      <Tab.Screen
        name="ScannerStackScreen"
        component={ScannerStackScreen}
        options={{
          title: 'Scanner',
          tabBarIcon: () => (
            <MiIcon name="qrcode-scan" size={23} color={colors.text.default} />
          ),
        }}
      />
      <Tab.Screen
        name="RegisterStackScreen"
        component={RegisterStackScreen}
        options={{
          title: 'Register',
          tabBarIcon: () => (
            <MiIcon
              name={'account-plus-outline'}
              size={23}
              color={colors.text.default}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SaranStackScreen"
        component={SaranStackScreen}
        options={{
          title: 'Recommendation',
          tabBarIcon: () => (
            <MiIcon
              name={'chat-alert-outline'}
              size={23}
              color={colors.text.default}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
