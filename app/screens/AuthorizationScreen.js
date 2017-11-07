import React from "react";
import PropTypes from "prop-types";

import { Button, StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from "react-native";
import logIn from "../api/authorization/logIn";
import logInWithFacebook from "../api/authorization/logInWithFacebook";
import ButtonFacebook from "../components/ButtonFacebook/ButtonFacebook";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
    wrapper: {
    justifyContent: "center",
    width: 250
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  buttonContainer: {
    justifyContent: "space-between",
    height: 80
  },
  input: {
    borderColor: "black",
    padding: 3,
    marginBottom: 5,
    fontSize: 18
  }
});

class AuthorizationScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    render(){
        const { dispatch } = this.props.navigation;

        return(
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                    <View style={styles.wrapper}>
                        <Text style={styles.welcome}>
                            Увійти в чат
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder={"Введіть email"}
                            onChangeText={(text) => this.setState({...this.state, email:text})}
                            value={this.state.email}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={"Введіть пароль"}
                            onChangeText={(text) => this.setState({...this.state, password:text})}
                            value={this.state.password}
                        />
                        <View style={styles.buttonContainer}>
                            <Button
                                onPress={() => dispatch(logIn({...this.state}))}
                                title="Увійти"
                            />
                            <ButtonFacebook
                                onPress={() => dispatch(logInWithFacebook())}
                            />
                        </View>
                    </View>
            </KeyboardAvoidingView>

        )
    }
}

AuthorizationScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

AuthorizationScreen.navigationOptions = {
  title :  "Авторизація"
};

export default AuthorizationScreen;
