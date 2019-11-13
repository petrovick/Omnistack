import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';
import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    console.tron.log('Chegou no SignIn');
    console.tron.log(email);
    console.tron.log(password);
    const response = yield call(api.post, 'sessions', { email, password });
    console.tron.log(response);
    localStorage.setItem('@Omni:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push('/'));
  } catch (err) {
    console.log('catch(err) {');
    console.log(err);
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail/senha',
      }),
    );
  }
}
