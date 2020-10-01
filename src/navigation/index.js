import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase";

import TabNav from "./TabNav";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

class RootNavigator extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log("firebase auth state changed", user);
      this.setState({ user });
    });
  }

  render() {
    return (
      <Stack.Navigator>
        {this.state.user ? (
          <>
            <Stack.Screen
              name="TabNav"
              component={TabNav}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    );
  }
}

export default RootNavigator;
