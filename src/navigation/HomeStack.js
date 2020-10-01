import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FeedScreen from "../screens/FeedScreen";

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={FeedScreen} />
    </Stack.Navigator>
  );
};

export default ChatStack;
