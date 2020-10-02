import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabNav from "./TabNav";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import { connect } from "react-redux";

const Stack = createStackNavigator();

class RootNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        {this.props.auth.user ? (
          <>
            <Stack.Screen
              name="TabNav"
              component={TabNav}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(RootNavigator);
