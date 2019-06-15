import { call, put } from "redux-saga/effects";

import api from "~/services/api";
import TeamsActions from "../ducks/teams";
import { AsyncStorage } from "react-native";

export function* getTeams() {
  const response = yield call(api.get, "teams");

  yield put(TeamsActions.getTeamsSuccess(response.data));
}

export function* createTeam({ name }) {
  try {
    const response = yield call(api.post, "teams", { name });

    yield put(TeamsActions.createTeamSuccess(response.data));
    yield put(TeamsActions.closeTeamModal());
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

export function* setActiveTeam({ team }) {
  yield call([AsyncStorage, "setItem"], "@Omni:team", JSON.stringify(team));
}
