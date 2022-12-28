import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {connect, useSelector} from 'react-redux';
import {RegisterScreen} from '../../pages';
import {colors} from '../../utils';

const Stack = createStackNavigator();

function RegisterStackScreen() {
  const languages = useSelector(state => state.languages);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: languages.formVisitors.titleHeaderPage,
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.text.default,
        }}
      />
    </Stack.Navigator>
  );
}

export default connect()(RegisterStackScreen);
