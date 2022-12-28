import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {connect, useSelector} from 'react-redux';
import {ChangeURLScreen, GetStarted} from '../../pages';
import {colors} from '../../utils';

const Stack = createStackNavigator();

function HomeStackScreen() {
  const languages = useSelector(state => state.languages);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangeURLScreen"
        component={ChangeURLScreen}
        options={{
          title: languages.headerChangeURLPage.title,
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.text.default,
        }}
      />
    </Stack.Navigator>
  );
}

export default connect()(HomeStackScreen);
