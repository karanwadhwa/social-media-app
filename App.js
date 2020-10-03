import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { AppState } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigation";
import { store, persistor } from "./src/store";

import { PersistGate } from "redux-persist/integration/react";
import { updateUserStatus } from "./src/fbCRUD";

class App extends React.Component {
  state = {
    appState: AppState.currentState,
  };

  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    const { appState } = this.state;
    console.log("handleAppStateChange", appState, nextAppState);
    if (appState.match(/inactive|background/) && nextAppState === "active") {
      updateUserStatus("online");
    } else if (
      appState.match(/inactive|active/) &&
      nextAppState === "background"
    ) {
      updateUserStatus("offline");
    }
    this.setState({ appState: nextAppState });
  };

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
