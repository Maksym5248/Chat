import { NavigationActions } from "react-navigation";
import { AppNavigator } from "../navigators/AppNavigator";

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams("ChatList");
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams("Authorization");
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

const navReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case "Login":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case "Logout":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Authorization" }),
        state
      );
      break;
    case "CurrentChat":
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: "CurrentChat" }),
            state
        );
        break;
    case "Profile":
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: "Profile" }),
            state
        );
        break;
      default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;

