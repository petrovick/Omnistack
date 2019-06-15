import { NavigationActions } from "react-navigation";

let nav;

function setTopLevelNavigator(navigatorRef) {
  nav = navigatorRef;
}

function navigate(routeName, params) {
  console.tron.warn("navigate called");
  console.tron.warn(routeName);
  console.tron.warn(params);

  nav.dispatch(NavigationActions.navigate({ routeName, params }));
}

export default {
  setTopLevelNavigator,
  navigate
};
