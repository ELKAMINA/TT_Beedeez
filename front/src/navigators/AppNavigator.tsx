import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './utils';
import {SCREENS} from './screens';
import {Auth} from '../screens/Authentication/Auth';
import {Main} from '../screens/Main/Main';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.SIGNUP}>
      <Stack.Screen name={SCREENS.SIGNUP} options={{title: 'Sign up'}}>
        {() => <Auth authMode="Sign up" />}
      </Stack.Screen>
      <Stack.Screen name={SCREENS.SIGNIN} options={{title: 'Sign in'}}>
        {() => <Auth authMode="Sign in" />}
      </Stack.Screen>
      <Stack.Screen name={SCREENS.MAIN} component={Main} />
    </Stack.Navigator>
  );
};

const linking = {
  prefixes: [],
  config: {
    screens: {
      [SCREENS.LOGIN]: 'login',
    },
  },
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} linking={linking} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
