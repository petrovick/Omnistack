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
