import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ChatStack from "./ChatStack";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator backBehavior="order">
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Chats" component={ChatStack} />
    </Tab.Navigator>
  );
};

export default TabNav;
