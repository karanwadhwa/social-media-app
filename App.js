import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigation";
import { store, persistor } from "./src/store";

import "./firebaseInstance";
import { PersistGate } from "redux-persist/integration/react";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <RootNavigator />
            <StatusBar style="auto" />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#465A62",
    alignItems: "center",
    justifyContent: "center",
  },
});
