import { combineReducers } from "redux";
import { reducer as auth } from "./auth";
import { reducer as teams } from "./teams";
import { reducer as projects } from "./projects";
import { reducer as members } from "./members";
import { toastReducer as toast} from 'react-native-redux-toast'
export default combineReducers({
  auth,
  teams,
  projects,
  members,
  toast
});
