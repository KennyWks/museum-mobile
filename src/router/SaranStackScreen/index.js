import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {connect, useSelector} from 'react-redux';
import {SaranScreen} from '../../pages';
import {colors} from '../../utils';

const Stack = createStackNavigator();

function SaranStackScreen() {
  const languages = useSelector(state => state.languages);

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

export default connect()(SaranStackScreen);
