import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-native";
import { NavigationActions } from "react-navigation";

const ButtonToLogScreen = ({ loginScreen }) => (
  <Button
    title={"Авторизація"}
    onPress={() => loginScreen()}
  />
);
ButtonToLogScreen.propTypes = {
  loginScreen: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: "Authorization" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonToLogScreen);
