import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";


const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row"
    },
    containerInput: {
        flex: 6,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    send: {
        flex: 1
    },
    input: {
        flex: 5
    },
    icon: {
        flex: 1
    }
});


class InputMessage extends React.Component {
    state = {
        message: ""
    };
    render() {
        const { user, dispatch } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.containerInput}>
                    <TouchableOpacity onPress={() => null}>
                        <MaterialIcons style={styles.icon} name="photo-camera" size={36}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} onPress={() => null}>
                        <FontAwesome name="photo" size={36}/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder={"Введіть повідомлення"}
                        onChangeText={(text) => this.setState({...this.state, message: text})}
                        value={this.state.message}
                    />
                </View>
                <TouchableOpacity onPress={() => null}>
                    <FontAwesome name="send" size={48}/>
                </TouchableOpacity>
            </View>
        );
    }
}

InputMessage.propTypes = {
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    upKeyboard: PropTypes.func
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(InputMessage);
