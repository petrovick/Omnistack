import React from 'react';

import { Container, SignForm } from '../styles';
// import { Container } from './styles';

const SignIn = () => (
  <Container>
    <SignForm>
      <h1>Boas vindas</h1>

      <span>E-Mail</span>
      <input type="email" name="email" />

      <span>Senha</span>
      <input type="password" name="password" />
    </SignForm>
  </Container>
);

export default SignIn;

/*
import React, { Component } from 'react';

import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import AuthActions from '~/store/ducks/auth'


import Button from '~/styles/components/Button';

import { Container, SignForm } from '../styles';

class SignIn extends Component {
    static propTypes = {
        signInRequest: PropTypes.func.isRequired
    }

    state = {
        email: '',
        password: ''
    }

    handleInputChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();//Previnir de redirecionar pra próxima página

        const {email, password} = this.state;
        const {signInRequest} = this.props;

        signInRequest(email, password)
    }

    render() {
        const {email, password} = this.state
        return (
            <Container>
            <SignForm onSubmit={(e) => {this.handleSubmit(e)}}>
              <h1>Boas vindas</h1>

              <span>E-Mail</span>
              <input type="email" name="email" value={email} onChange={this.handleInputChange}/>

              <span>Senha</span>
              <input type="password" name="password" value={password} onChange={this.handleInputChange}/>

              <Button size="big" type="submit">Entrar</Button>
            </SignForm>
          </Container>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(AuthActions, dispatch)

export default connect(null, mapDispatchToProps)(SignIn)
*/
