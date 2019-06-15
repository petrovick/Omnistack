import React, { Component } from "react";
import PropTypes from "prop-types";
import SideMenu from "react-native-side-menu";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, TouchableOpacity, Text } from "react-native";

import { connect } from "react-redux";

import styles from "./styles";
import TeamSwitcher from "~/components/TeamSwitcher";
import Projects from "~/components/Projects";
import Members from "~/components/Members";

class Main extends Component {
  static propTypes = {
    activeTeam: PropTypes.shape({
      name: PropTypes.string
    })
  };
  static defaultProps = {
    activeTeam: null
  };
  state = {
    leftOpen: false,
    rightOpen: false
  };

  toggleMenu = (position, isOpen) => {
    this.setState({ [`${position}Open`]: isOpen });
  };

  render() {
    const { activeTeam } = this.props;
    const { leftOpen, rightOpen } = this.state;
    return (
      <View style={styles.backgroundWrapper}>
        <SideMenu
          isOpen={leftOpen}
          disableGestures
          onChange={isOpen => this.toggleMenu("left", isOpen)}
          openMenuOffset={70}
          menu={<TeamSwitcher />}
        >
          <SideMenu
            isOpen={rightOpen}
            disableGestures
            onChange={isOpen => this.toggleMenu("right", isOpen)}
            openMenuOffset={285}
            menuPosition="right"
            menu={<Members />}
          >
            <View style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => this.toggleMenu("left", true)}
                  hitSlop={{ top: 15, bottom: 15, left: 20, right: 20 }}
                >
                  <Icon name="menu" size={24} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.teamTitle}>
                  {activeTeam ? activeTeam.name : "Selecione um time"}
                </Text>
                <TouchableOpacity
                  onPress={() => this.toggleMenu("right", true)}
                  hitSlop={{ top: 15, bottom: 15, left: 20, right: 20 }}
                >
                  <Icon name="group" size={24} color="#FFF" />
                </TouchableOpacity>
              </View>
              <Projects />
            </View>
          </SideMenu>
        </SideMenu>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  activeTeam: state.teams.active
});
export default connect(mapStateToProps)(Main);
