import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SaranScreen} from '../../pages';

const Stack = createStackNavigator();

export default function SaranStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SaranScreen"
        component={SaranScreen}
        options={{title: 'Saran'}}
      />
    </Stack.Navigator>
  );
}
