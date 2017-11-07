import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: 200
  },
  wrapperButton: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      width: 200
  },
  input: {
    padding: 2,
    width: "100%",
    fontSize: 16
  }
});

// onPress={this.props.search}
class Search extends React.Component {
    state = {
        visibleFilter: false
    };

    render() {
        if (this.state.visibleFilter){
            return (
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} underlineColorAndroid={"transparent"} placeholder={"Введіть ім'я"} />
                    <TouchableOpacity onPress={() => this.setState({visibleFilter: false})}>
                        <Ionicons name="md-close-circle" size={36} color="black"/>
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View style={styles.wrapperButton}>
                <TouchableOpacity onPress={() => this.setState({visibleFilter: true})} >
                    <Feather name="search" size={36} color="black"/>
                </TouchableOpacity>
            </View>
        );
    }
}


Search.propTypes = {
  user: PropTypes.object.isRequired,
  search: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  search: () => console.log("search")
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
