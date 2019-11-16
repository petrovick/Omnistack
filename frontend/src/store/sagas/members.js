import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';

import MembersActions from '../ducks/members';

export function* getMembers() {
  try {
    const response = yield call(api.get, 'members');

    yield put(MembersActions.getMembersSuccess(response.data));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao buscar teams',
        message: 'Verifique sua internet',
      }),
    );
  }
}

export function* updateMember({ id, roles }) {
  try {
    yield call(api.put, `members/${id}`, { roles: roles.map(role => role.id) });
    yield put(toastrActions.add({
      type: 'success',
      title: 'Membro atualizado',
      message: 'O membro foi atualizado com sucesso.',
    }));
  } catch (err) {
    yield put(toastrActions.add({
      type: 'error',
      title: 'Erro na operacao',
      message: 'Houve um erro, tente novamente',
    }));
  }
}

export function* inviteMember({ email }) {
  try {
    yield call(api.post, 'invites', { invites: [email] });
    yield put(toastrActions.add({
      type: 'success',
      title: 'Convite enviado',
      message: 'Enviamos um convite ao usuario para participar do time.',
    }));
  } catch (err) {
    yield put(toastrActions.add({
      type: 'error',
      title: 'Erro na operacao',
      message: 'Houve um erro, tente novamente!',
    }));
  }
}
