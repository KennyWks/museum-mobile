import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SaranScreen} from '../../pages';
import {colors} from '../../utils';

const Stack = createStackNavigator();

export default function SaranStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SaranScreen"
        component={SaranScreen}
        options={{
          title: 'Recommendations',
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.text.default,
        }}
      />
    </Stack.Navigator>
  );
}
