import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {connect, useSelector} from 'react-redux';
import {ScannerScreen, ShowDataScreen} from '../../pages';
import {colors} from '../../utils';

const Stack = createStackNavigator();

function ScannerStackScreen() {
  const languages = useSelector(state => state.languages);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScannerScreen"
        component={ScannerScreen}
        options={{
          title: languages.headerScannerPage.title,
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.text.default,
        }}
      />
      <Stack.Screen
        name="ShowDataScreen"
        component={ShowDataScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default connect()(ScannerStackScreen);
