import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScannerScreen, ShowDataScreen} from '../../pages';
import {colors} from '../../utils';

const Stack = createStackNavigator();

export default function ScannerStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScannerScreen"
        component={ScannerScreen}
        options={{
          title: 'Scan QR Code',
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
