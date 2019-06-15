import React, { Component } from "react";

import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MembersActions from "~/store/ducks/members";

import styles from "./styles";

class Members extends Component {
  componentDidMount() {
    const { getMembersRequest, teamActive } = this.props;
    if (teamActive) {
      getMembersRequest();
    }
  }

  render() {
    const { members } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>MEMBROS</Text>
        <FlatList
          style={styles.memberList}
          data={members.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.memberContainer}>
              <Text style={styles.memberName}>{item.user.name}</Text>
              <TouchableOpacity
                onPress={() => {}}
                hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
              >
                <Icon name="settings" size={20} color="#b0b0b0" />
              </TouchableOpacity>
            </View>
          )}
          ListFooterComponent={() => (
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Convidar</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members,
  teamActive: state.teams.active
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MembersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members);
