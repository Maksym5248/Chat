import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { EvilIcons } from "@expo/vector-icons";


const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 2,
    borderRadius: 5,
    backgroundColor: "#2A49A5"
  }
});



const ButtonFacebook = ({ onPress }) =>  (
        <TouchableOpacity onPress={onPress} style={styles.wrapper}>
            <EvilIcons name="sc-facebook" size={36} color="white" />
        </TouchableOpacity>
);

ButtonFacebook.defaultProps = {

};

ButtonFacebook.propTypes = {
    onPress: PropTypes.func
};

export default ButtonFacebook;
