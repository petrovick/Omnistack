import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AuthActions from "~/store/ducks/auth";

import styles from "./styles";

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired
  };
  state = {
    email: "diego@rocketseat.com.br",
    password: "123456"
  };

  handleSubmit = () => {
    console.tron.log("Entrou no submit");
    const { email, password } = this.state;
    const { signInRequest } = this.props;
    signInRequest(email, password);
    null;
  };

  render() {
    const { email, password } = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.container}
      >
        <View>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={text => this.setState({ email: text })}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            autoFocus
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={text => this.setState({ password: text })}
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="send"
            ref={el => {
              this.passwordInput = el;
            }}
            onSubmitEditing={this.handleSubmit}
          />

          <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(SignIn);
