import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Avatar from "../Avatar/index";
import Search from "../Search/Search";
import logOut from "../../api/authorization/logOut";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    padding: 2,
    paddingLeft: 5,
    backgroundColor: "#848ba3",
    justifyContent: "space-between",
    alignItems: "flex-end"
  }
});



const ChatListHeader = ({ user, goToProfile, logOut, auth }) => {

    if (auth.isLoggedIn === false) {
        return <View />;
    }
    return(
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={goToProfile}>
                <Avatar size={50} src={user.photoURL}/>
            </TouchableOpacity>
            <Search/>
            <TouchableOpacity onPress={logOut}>
                <MaterialCommunityIcons name="exit-to-app" size={36}/>
            </TouchableOpacity>
        </View>
    )
};

ChatListHeader.propTypes = {
  user: PropTypes.object.isRequired,
  goToProfile: PropTypes.func,
  logOut: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  goToProfile: () => dispatch({type: "Profile"}),
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatListHeader);
