import React, { Component } from 'react';
import api from '~/services/api';
import TeamSwitcher from '~/components/TeamSwitcher';
import { Container } from './styles';
import Projects from '~/components/Projects';

const Main = () => (
  <Container>
    <TeamSwitcher />
    <Projects />

  </Container>
);
export default Main;
