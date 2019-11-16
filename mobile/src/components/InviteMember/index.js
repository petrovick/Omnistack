import React, { Component } from "react";

import { View , Text, TextInput, TouchableOpacity} from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MembersActions from "~/store/ducks/members";
import Modal from '~/components/Modal'
import styles from './styles';

class InviteMember extends Component {
  state = {
    email: ''
  }

  handleSubmit = () => {
    const {inviteMemberRequest, onRequestClose} = this.props;
    const {email } = this.state
    inviteMemberRequest(email);
    onRequestClose();
    this.setState({email: ''})
  }

  render() {
    const {visible, onRequestClose} = this.props;
    const {email} = this.state;
    return <Modal visible={visible} onRequestClose={onRequestClose}>
      <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          autoFocus
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="send"
          onSubmitEditing={this.handleSubmit}
          value={email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>CONVIDAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancel} onPress={onRequestClose}>
          <Text style={styles.cancelText}>CANCELAR</Text>
        </TouchableOpacity>
    </Modal>
  }
}

//const mapStateToProps = state => ({});

 const mapDispatchToProps = dispatch =>
   bindActionCreators(MembersActions, dispatch);


export default connect(
  null,//mapStateToProps
  mapDispatchToProps
)(InviteMember);
