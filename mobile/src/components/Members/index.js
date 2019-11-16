import React, { Component } from "react";
import Can from '~/components/Can'
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MembersActions from "~/store/ducks/members";
import InviteMember from '~/components/InviteMember'
import RoleUpdater from '~/components/RoleUpdater'
import styles from "./styles";

class Members extends Component {

  state ={
    isInviteModalOpen: false,
    isRoleModalOpen: false,
    memberEdit: null
  }
  componentDidMount() {
    const { getMembersRequest, teamActive } = this.props;
    if (teamActive) {
      getMembersRequest();
    }
  }

  toogleInviteModalOpen = () =>{
    this.setState({
      isInviteModalOpen: true
    })
  }

  toogleInviteModalClosed = () => {
    this.setState({
      isInviteModalOpen: false
    })
  }

  toogleRoleModalOpen = (member) =>{
    this.setState({
      isRoleModalOpen: true,
      memberEdit: member
    })
  }

  toogleRoleModalClosed = () => {
    this.setState({
      isRoleModalOpen: false,
      memberEdit: null
    })
  }

  render() {
    const { members } = this.props;
    const {isInviteModalOpen, isRoleModalOpen, memberEdit} = this.state;
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

              <Can checkRole="administrator">
                <TouchableOpacity
                  onPress={() => this.toogleRoleModalOpen(item)}
                  hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                >
                  <Icon name="settings" size={20} color="#b0b0b0" />
                </TouchableOpacity>
              </Can>
            </View>
          )}
          ListFooterComponent={() => (
            <Can checkPermission="invites_create">
              <TouchableOpacity style={styles.button} onPress={this.toogleInviteModalOpen}>
                <Text style={styles.buttonText}>Convidar</Text>
              </TouchableOpacity>
            </Can>
          )}
        />
        {
          memberEdit &&
          (
            <RoleUpdater visible={isRoleModalOpen} onRequestClose={this.toogleRoleModalClosed} member={memberEdit}/>
          )
        }
        <Can checkPermission="invites_create">
          <InviteMember visible={isInviteModalOpen} onRequestClose={this.toogleInviteModalClosed} />
        </Can>
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
