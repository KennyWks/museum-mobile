import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RegisterScreen} from '../../pages';
import {colors} from '../../utils';

const Stack = createStackNavigator();

export default function RegisterStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Form Register',
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.text.default,
        }}
      />
    </Stack.Navigator>
  );
}
