import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../components/Avatar/index";
import connect from "react-redux/es/connect/connect";
let color = "#F5FCFF";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 5
    }
});


class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: "Особистий профіль"
    };

    render() {
        const { user } = this.props;
        return (
            <View style={styles.container}>
                <Avatar src={user.photoURL} size={250}/>
                <Text style={styles.text}>
                    {user.displayName}
                </Text>
                <Text style={styles.text}>
                    {user.email}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(ProfileScreen);

