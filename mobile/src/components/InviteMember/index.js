import React, { Component } from "react";

import { View } from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MembersActions from "~/store/ducks/members";

// import { Container } from './styles';

class InviteMember extends Component {
  render() {
    return <View />;
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

import MembersActions from "~/store/ducks/members";
export default connect(
  mapStateToProps
  // mapDispatchToProps
)(InviteMember);
