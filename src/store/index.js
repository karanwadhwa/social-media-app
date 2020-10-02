import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import reactotron from "../../ReactotronConfig";
import rootReducer from "./Reducers";

import { authListener } from "./Actions/authActions";

import "../../firebaseInstance";

const middlewares = [];

middlewares.push(applyMiddleware(ReduxThunk));

// Enable Reactotron in development mode only
if (__DEV__) {
  const reactotronMiddleware = reactotron.createEnhancer();
  // Creating Reactotron "data capturer"
  middlewares.push(reactotronMiddleware);
  // And pushing it to the middlewares array
}

const persistConfig = {
  key: "yet-another-social-app",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};

export const store = createStore(
  persistedReducer,
  initialState,
  compose(...middlewares)
);

store.dispatch(authListener());

export const persistor = persistStore(store);
