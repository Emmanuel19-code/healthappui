import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashbaord from "../screens/Dashbaord";
import Sleep from "../screens/Sleep";
import Summary from "../screens/Summary";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="dashboard"
        component={Dashbaord}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sleep"
        component={Sleep}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="summary"
        component={Summary}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
