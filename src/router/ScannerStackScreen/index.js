import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScannerScreen, ShowDataScreen} from '../../pages';

const Stack = createStackNavigator();

export default function ScannerStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScannerScreen"
        component={ScannerScreen}
        options={{title: 'Scan QR Code'}}
      />
      <Stack.Screen
        name="ShowDataScreen"
        component={ShowDataScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
