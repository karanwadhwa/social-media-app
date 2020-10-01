import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import firebase from "firebase";

class FeedScreen extends Component {
  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(res => console.log("signed out", res));
  };

  render() {
    return (
      <View>
        <Text> Feeds Screen </Text>

        <TouchableOpacity
          onPress={this.logout}
          style={{
            margin: 30,
            padding: 24,
            backgroundColor: "pink",
            borderRadius: 4,
          }}
        >
          <Text>Signout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FeedScreen;
