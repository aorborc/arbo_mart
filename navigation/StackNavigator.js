// navigation/StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../pages/WelcomeScreen';
import SignInScreen from '../pages/SignInScreen';
import SignUpScreen from '../pages/SignUpScreen';
import OtpScreen from '../pages/OtpScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: 'Sign In',headerShown: false  }}
      />
      <Stack.Screen
        name="OtpPage"
        component={OtpScreen}
        options={{ title: 'Sign Up',headerShown: false  }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
