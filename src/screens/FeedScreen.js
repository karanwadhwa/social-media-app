import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import firebase from "firebase";
import { connect } from "react-redux";
import { logoutUser } from "../store/Actions/authActions";

class FeedScreen extends Component {
  render() {
    return (
      <View>
        <Text> Feeds Screen </Text>

        <TouchableOpacity
          onPress={this.props.logoutUser}
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
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = { logoutUser };
export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
