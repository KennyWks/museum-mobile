import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SaranScreen} from '../../pages';
import {colors, languages} from '../../utils';

const Stack = createStackNavigator();

export default function SaranStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SaranScreen"
        component={SaranScreen}
        options={{
          title: languages.formRecommendations.titleHeaderPage,
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.text.default,
        }}
      />
    </Stack.Navigator>
  );
}
