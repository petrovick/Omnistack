import React, {Fragment} from "react";
import { Provider } from "react-redux";
import {Toast } from 'react-native-redux-toast'
import "~/config/ReactotronConfig";
import "~/config/StatusBarConfig";

import store from "./store";
import App from "./App";

const Root = () => (
  <Provider store={store}>
    <Fragment>
    <App />
    <Toast />
    </Fragment>
  </Provider>
);

export default Root;
