import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { connect } from "react-redux";
import { signupUser } from "../../store/Actions/authActions";

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
    const { name, email, password } = this.state;
    const { signupUser, auth, navigation } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="name"
          value={name}
          onChangeText={name => this.setState({ name })}
          style={styles.input}
        />
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={email => this.setState({ email })}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={password => this.setState({ password })}
          style={styles.input}
        />
        {!!auth.error && <Text style={styles.error}>{auth.error}</Text>}
        <TouchableOpacity
          onPress={() => signupUser(name, email, password)}
          style={styles.button}
        >
          <Text>{auth.loading ? "Loading..." : "Signup"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
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

const mapDispatchToProps = { signupUser };

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
  error: {
    color: "red",
    fontWeight: "bold",
    paddingVertical: 10,
  },
  button: {
    marginVertical: 15,
    backgroundColor: "#f9f9f9",
    width: "100%",
    padding: 14,
    alignItems: "center",
  },
});
