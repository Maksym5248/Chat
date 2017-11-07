import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import ChatListItem from "../components/ChatListItem/ChatListItem";
import ChatListHeader from "../components/ChatListHeader/ChatListHeader";
import ButtonToLogScreen from "../components/ButtonToLogScreen";
import {connect} from "react-redux";
import ModalDelete from "../components/ModalMenuDelete/ModalDelete";

const color = "#F5FCFF";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color
    },
    containerGoToLogin: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color
    }
});


class ChatListScreen extends React.Component {
    state = {
        visible: false,
    };
    render() {
           if (this.props.isLoggedIn === false) {
        return(
            <View style={styles.containerGoToLogin}>
                <ButtonToLogScreen />
            </View>
        );
        }
        return (
            <View>
                <ScrollView>
                    <ChatListItem onVisibleModalVisible={() => this.setState({visible: true})} />
                    <ChatListItem onVisibleModalVisible={() => this.setState({visible: true})} />
                    <ChatListItem onVisibleModalVisible={() => this.setState({visible: true})} />
                    <ChatListItem onVisibleModalVisible={() => this.setState({visible: true})} />
                    <ChatListItem onVisibleModalVisible={() => this.setState({visible: true})} />
                    <ChatListItem onVisibleModalVisible={() => this.setState({visible: true})} />
                    <ChatListItem onVisibleModalVisible={() => this.setState({visible: true})} />
                    <ChatListItem onVisibleModalVisible={() => this.setState({visible: true})} />
                    <ChatListItem onVisibleModalVisible={() => this.setState({visible: true})} />
                    <ChatListItem onVisibleModalVisible={() => this.setState({visible: true})} />
                </ScrollView>
                <ModalDelete
                    offVisibleModalVisible={() => this.setState({visible: false, src: ""})}
                    visible={this.state.visible}
                />
            </View>
        );
    }
}

ChatListScreen.navigationOptions = {
    title: "Список чатів",
    header: <ChatListHeader />
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(ChatListScreen);