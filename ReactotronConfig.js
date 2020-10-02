import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import AsyncStorage from "@react-native-community/async-storage";

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .connect(); // let's connect!

console.tron = Reactotron.log;

export default reactotron;
