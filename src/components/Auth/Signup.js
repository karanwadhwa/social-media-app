import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { connect } from "react-redux";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="name"
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          style={styles.input}
        />
        <TextInput
          placeholder="email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          style={styles.input}
        />
        <Text></Text>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
          style={styles.button}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

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
    marginVertical: 15,
    backgroundColor: "#f9f9f9",
    width: "100%",
    padding: 14,
    alignItems: "center",
  },
});
