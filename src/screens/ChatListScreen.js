import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

class ChatListScreen extends Component {
  render() {
    return (
      <View>
        <Text> Chat List Screen </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Chat")}
          style={{
            margin: 30,
            padding: 24,
            backgroundColor: "pink",
            borderRadius: 4,
          }}
        >
          <Text>Chat</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ChatListScreen;
