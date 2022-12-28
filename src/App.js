import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {Splash} from './pages';
import FlashMessage from 'react-native-flash-message';
import {MenuProvider} from 'react-native-popup-menu';

//redux toolkit
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducer/globalReducer';
import thunk from 'redux-thunk';

export default function App() {
  const [view, setView] = useState(<Splash />);
  const storeRedux = createStore(rootReducer, applyMiddleware(thunk));

  useEffect(() => {
    setTimeout(() => {
      setView(<TabNavigator />);
    }, 3000);
  }, []);

  return (
    <>
      <Provider store={storeRedux}>
        <NavigationContainer>
          <MenuProvider>{view}</MenuProvider>
        </NavigationContainer>
        <FlashMessage position="top" />
      </Provider>
    </>
  );
}
