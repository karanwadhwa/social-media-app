import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabNav from "./TabNav";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
