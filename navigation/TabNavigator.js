import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import HomeStack from "./HomeStack";
import CategoriesScreen from "../pages/Categories";
import CollectionScreen from "../pages/Collection";
import CartScreen from "../pages/Cart";

// Import your images
const homeLight = require("../assets/icons/Home Light.png");
const homeDark = require("../assets/icons/Home Dark.png");
const categoriesLight = require("../assets/icons/Categories Light.png");
const categoriesDark = require("../assets/icons/Categories Dark.png");
const collectionLight = require("../assets/icons/Collection Light.png");
const collectionDark = require("../assets/icons/Collection Dark.png");
const cartLight = require("../assets/icons/Order Again Light.png");
const cartDark = require("../assets/icons/Order Again Dark.png");

// Create Tab Navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === "Home") {
            iconSource = focused ? homeDark : homeLight;
          } else if (route.name === "Categories") {
            iconSource = focused ? categoriesDark : categoriesLight;
          } else if (route.name === "Collection") {
            iconSource = focused ? collectionDark : collectionLight;
          } else if (route.name === "Order Again") {
            iconSource = focused ? cartDark : cartLight;
          }

          return (
            <Image
              source={iconSource}
              style={{ width: 27, height: 27, resizeMode: "contain" }}
            />
          );
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        headerShown: false, // Hide header for tabs
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Collection" component={CollectionScreen} />
      <Tab.Screen name="Order Again" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
