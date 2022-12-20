import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GetStarted} from '../../pages';

const Stack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
