import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GetStarted, Splash, Scanner, ShowData, Register} from '../pages';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen
        name="ShowData"
        component={ShowData}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
