import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, View, TextInput, Button } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 200
  },
  input: {
    width: "80%"
  },
  button: {
    width: "20%"
  }
});



const CurrentChatInput = ({ user, dispatch }) => (
    <View style={styles.wrapper}>
        <TextInput style={styles.input} placeholder={"Введіть ім'я"} />
        <Button color={"#757575"} onPress={() => null} title={"Знайти"}/>
    </View>
);

CurrentChatInput.propTypes = {
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(CurrentChatInput);
