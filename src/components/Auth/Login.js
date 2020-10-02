import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { loginUser } from "../../store/Actions/authActions";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    const { email, password } = this.state;
    const { auth, navigation, loginUser } = this.props;
    return (
      <View style={styles.container}>
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
          onPress={() => loginUser(email, password)}
          style={styles.button}
        >
          <Text>{auth.loading ? "Loading..." : "Login"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={styles.button}
        >
          <Text>Signup</Text>
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

const mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
