import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import * as firebase from "firebase";

const loginWithEmailPassword = (email, password) => {
  console.log(firebase);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => console.log("firebase email password auth failed: ", err));
};

const LoginScreen = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={email => setEmail(email)}
        style={styles.input}
      />
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={password => setPassword(password)}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => loginWithEmailPassword(email, password)}
        style={styles.button}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
  },
  input: {
    width: "100%",
    marginVertical: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 4,
  },
  button: {
    width: "100%",
    margin: 30,
    padding: 16,
    backgroundColor: "pink",
    borderRadius: 4,
    alignItems: "center",
  },
});
