import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const LoginScreen = props => {
  console.log(props);
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("TabNav")}
        style={{
          margin: 30,
          padding: 24,
          backgroundColor: "pink",
          borderRadius: 4,
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
