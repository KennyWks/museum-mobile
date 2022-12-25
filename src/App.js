import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {Splash} from './pages';
import FlashMessage from 'react-native-flash-message';
import {MenuProvider} from 'react-native-popup-menu';

export default function App() {
  const [view, setView] = useState(<Splash />);

  useEffect(() => {
    setTimeout(() => {
      setView(<TabNavigator />);
    }, 3000);
  }, []);

  return (
    <>
      <NavigationContainer>
        <MenuProvider>{view}</MenuProvider>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
}
