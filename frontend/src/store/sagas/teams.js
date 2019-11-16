import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';

import TeamsActions from '../ducks/teams';

export function* getTeams() {
  try {
    const response = yield call(api.get, 'teams');

    yield put(TeamsActions.getTeamsSuccess(response.data));
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

export function* createTeam({ name }) {
  try {
    const response = yield call(api.post, 'teams', { name });

    yield put(TeamsActions.createTeamSuccess(response.data));
    yield put(TeamsActions.closeTeamModal());
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Erro na operacao',
        message: 'Houve um erro, tente novamente',
      }),
    );
  }
}
