import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RegisterScreen} from '../../pages';

const Stack = createStackNavigator();

export default function RegisterStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{title: 'Form Register'}}
      />
    </Stack.Navigator>
  );
}
