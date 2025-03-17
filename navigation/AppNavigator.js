// navigation/AppNavigator.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigator from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import AccountScreenNavigator from "./AccountStack";
const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {/* First show onboarding stack */}
        <AppStack.Screen name="Onboarding" component={StackNavigator} />
        {/* Then show bottom tab after login */}
        <AppStack.Screen name="MainTabs" component={TabNavigator} />
        <AppStack.Screen name="AccountScreen" component={AccountScreenNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;