// navigation/StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../pages/WelcomeScreen';
import SignInScreen from '../pages/onBoarding/SignInScreen';
import SignUpScreen from '../pages/onBoarding/SignUpScreen';
import OtpScreen from '../pages/onBoarding/OtpScreen';
import PanScreen from '../pages/onBoarding/PanScreen';
import BusinessDetailScreen from '../pages/onBoarding/BusinessDetailScreen';
import BusinessAddressScreen from '../pages/onBoarding/BusinessAddressScreen'; 
import PanDetailsScreen from '../pages/onBoarding/PanDetailsScreen';
import PhotoUploadScreen from '../pages/onBoarding/PhotoUploadScreen';
import RegVerifyScreen from '../pages/onBoarding/RegVerifyScreen';
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
        options={{ headerShown: false  }}
      />
       <Stack.Screen
        name="PanPage"
        component={PanScreen}
        options={{ headerShown: false  }}
      />
          <Stack.Screen
        name="BusinessDetialsPage"
        component={BusinessDetailScreen}
        options={{ headerShown: false  }}
      />
       <Stack.Screen
        name="AddressPage"
        component={BusinessAddressScreen}
        options={{ headerShown: false  }}
      />
   
       <Stack.Screen
        name="PanDetailsPage"
        component={PanDetailsScreen}
        options={{ headerShown: false  }}
      />
       <Stack.Screen
        name="PhotoUploadPage"
        component={PhotoUploadScreen}
        options={{ headerShown: false  }}
      />
       <Stack.Screen
        name="RegVerifyPage"
        component={RegVerifyScreen}
        options={{ headerShown: false  }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
