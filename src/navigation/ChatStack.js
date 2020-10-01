import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ChatListScreen from "../screens/ChatListScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ChatList" component={ChatListScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default ChatStack;
