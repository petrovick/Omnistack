import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TeamsActoins from "~/store/ducks/teams";

import Modal from "~/components/Modal";
import styles from "./styles";

class NewTeam extends Component {
  state = {
    newTeam: ""
  };

  handleSubmit = () => {
    const { createTeamRequest, onRequestClose } = this.props;
    const { newTeam } = this.state;

    createTeamRequest(newTeam);
    onRequestClose();
  };
  onRequestClosee = () => {
    console.tron.error("Close AQUI");
  };

  render() {
    const { visible, onRequestClose } = this.props;
    const { newTeam } = this.state;
    return (
      <Modal visible={visible} onRequestClose={onRequestClose}>
        <Text style={styles.label}>NOME</Text>
        <TextInput
          style={styles.input}
          autoFocus
          underlineColorAndroid="transparent"
          returnKeyType="send"
          onSubmitEditing={this.handleSubmit}
          value={newTeam}
          onChangeText={text => this.setState({ newTeam: text })}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Criar Time</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancel} onPress={onRequestClose}>
          <Text style={styles.cancelText}>CANCELAR</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(TeamsActoins, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(NewTeam);
