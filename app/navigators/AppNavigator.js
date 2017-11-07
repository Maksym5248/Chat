import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import AuthorizationScreen from "../screens/AuthorizationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChatListScreen from "../screens/ChatListScreen";
import CurrentChatScreen from "../screens/CurrentChat";

export const AppNavigator = StackNavigator({
  Authorization: { screen: AuthorizationScreen },
  ChatList: { screen: ChatListScreen },
  Profile: { screen: ProfileScreen },
  CurrentChat: { screen: CurrentChatScreen }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
