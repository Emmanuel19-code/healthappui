import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNav from "./stack";
import CustomBottom from "../components/customTabBottom";
import Profile from "../screens/Profile";
import Sleep from "../screens/Sleep";

const tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
        },
      }}
      tabBar={(props) => <CustomBottom {...props} />}
    >
      <tab.Screen
        name="home"
        component={StackNav}
        options={{
          headerShown: false,
        }}
      />
      <tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <tab.Screen
        name="subdash"
        component={StackNav}
        options={{
          headerShown: false,
        }}
      />
      <tab.Screen
        name="search"
        component={StackNav}
        options={{
          headerShown: false,
        }}
      />
      
    </tab.Navigator>
  );
};

export default BottomNav;
