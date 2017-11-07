import React from "react";
import { StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import Message from "../components/Message/Message";
import MessageMain from "../components/MessageMain/MessageMain";
import InputMessage from "../components/InputMessage/InputMessage";
import ModalAvatar from "../components/ModalAvatar/ModalAvatar";

let color = "#F5FCFF";

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: color
  }
});


const arr = [{
    key: "a",
    src: "https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170"
}, {
    key: "b",
    src: "https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170"
}, {
    key: "c",
    src: "https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170"
}, {
    key: "d",
    src: "https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170"
}, {
    key: "e",
    src: "https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170"
}, {
    key: "f",
    src: "https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170"
}, {
    key: "x",
    src: "https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170"
}, {
    key: "g",
    src: "https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170"
}, {
    key: "q",
    src: "https://lh3.googleusercontent.com/3qybHqE4ff9MOts7v5l4S09W3HtOymwDic4LYzNVU-PhDIFvYAbju8qfRKB7AoxeWA=w170"
}];


class CurrentChatScreen extends React.Component {
    state = {
      visible: false,
      src: "",
      keyboard: false
    };
    scrollToIndex = () => {
      this.flatList.scrollToEnd();
    };
    getItemLayout = (data, index) => (
      { length: 50, offset: 50 * index, index }
    );
    render() {
      return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          keyboardVerticalOffset={50}
        >
            <FlatList
                ref={(flatList) => this.flatList = flatList}
                data={arr}
                getItemLayout={this.getItemLayout}
                renderItem={({item}) => item.key === "a" ?
                    <Message
                        onVisibleModalVisible={(src) => this.setState({visible: true, src: src})}
                        src={item.src}
                    /> :
                    <MessageMain/>
                }
            />
            <InputMessage />
            <ModalAvatar
                offVisibleModalVisible={() => this.setState({visible: false, src: ""})}
                src={this.state.src}
                visible={this.state.visible}
            />
        </KeyboardAvoidingView>
      );
    }
}

//scrollToEnd(params?: object)


CurrentChatScreen.navigationOptions = {
  title: "Чат"
};

export default CurrentChatScreen;

/*
navigationOptions: ({navigation}) => ({
    title: `${navigation.state.params.name}"s Profile"`,
}),

*/
