import React, { Component } from "react";
import api from "~/services/api";
import TeamSwitcher from "~/components/TeamSwitcher";
import { Container } from "./styles";
const Main = () => (
  <Container>
    <TeamSwitcher />
  </Container>
);
export default Main;
