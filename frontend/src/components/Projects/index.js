import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProjectActions from '~/store/ducks/projects';
import MembersActions from '~/store/ducks/members';
import { Container, Project } from './styles';
import Button from '~/styles/components/Button';
import Modal from '~/components/Modal';
import Members from '~/components/Members';
import Can from '~/components/Can';

class Projects extends Component {
  static propTypes = {
    getProjectsRequest: PropTypes.func.isRequired,
    openProjectModal: PropTypes.func.isRequired,
    closeProjectModal: PropTypes.func.isRequired,
    openMembersModal: PropTypes.func.isRequired,
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }),
    projects: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })),
      projectModalOpen: PropTypes.bool,
    }).isRequired,
    members: PropTypes.shape({
      membersModalOpen: PropTypes.bool,
    }).isRequired,
  };

  static defaultProps = {
    activeTeam: null,
  }

  state ={
    newProject: '',
  }

  componentDidMount() {
    const { getProjectsRequest, activeTeam } = this.props;
    if (activeTeam) {
      getProjectsRequest();
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCreateProject = (e) => {
    e.preventDefault();
    const { createProjectRequest } = this.props;
    const { newProject } = this.state;
    createProjectRequest(newProject);
  }


  render() {
    const {
      activeTeam, closeProjectModal, openProjectModal, projects, openMembersModal, members,
    } = this.props;
    const { newProject } = this.state;

    if (!activeTeam) return null;
    return (
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Can checkPermission="projects_create">
              <Button onClick={openProjectModal}>+ Novo</Button>
            </Can>
            <Button onClick={openMembersModal}>Membros</Button>
          </div>
        </header>
        {projects.data.map(project => (

          <Project key={project.id}>
            <p>{project.title}</p>
          </Project>
        ))}

        { projects.projectModalOpen && (
          <Modal>
            <h1>Criar Projeto</h1>
            <form onSubmit={this.handleCreateProject}>
              <span>Nome</span>
              <input value={newProject} name="newProject" onChange={this.handleInputChange} />
              <Button size="big" type="submit">Salvar</Button>
              <Button onClick={closeProjectModal} size="small" color="grey">Fechar</Button>
            </form>
          </Modal>
        )}

        {members.membersModalOpen && (
        <Members />
        )}
      </Container>

    );
  }
}

const mapStateToProps = state => ({
  activeTeam: state.teams.active,
  members: state.members,
  projects: state.projects,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProjectActions, ...MembersActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
