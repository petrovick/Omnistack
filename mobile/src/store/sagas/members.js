import {Alert} from 'react-native'
import { call, put } from "redux-saga/effects";
import api from "~/services/api";
import MembersActions from "../ducks/members";
import {ToastActionsCreators} from 'react-native-redux-toast'
export function* getMembers() {
  const response = yield call(api.get, "members");

  yield put(MembersActions.getMembersSuccess(response.data));
}

export function* updateMember({ id, roles }) {
  try {
    yield call(api.put, `members/${id}`, { roles: roles.map(role => role.id) });
    yield put(ToastActionsCreators.displayInfo('Membro atualizado'));
  }
  catch (err)
  {
    Alert.alert('Title', 'Erro');
    yield put(ToastActionsCreators.displayError('Erro ao atualizar o membro.'));
    console.log(`Error: ${err}`);
  }
}

export function* inviteMember({ email }) {
  try {
    yield call(api.post, "invites", { invites: [email] });
    yield put(ToastActionsCreators.displayInfo('Convite realizado'));
  } catch (err) {
    yield put(ToastActionsCreators.displayError('Erro ao realizar o convite.'));
    console.log(`Error: ${err}`);
  }
}
